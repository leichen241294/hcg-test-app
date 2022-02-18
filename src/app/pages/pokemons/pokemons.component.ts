import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, fromEvent, lastValueFrom, map } from 'rxjs';
import {
  LIST_DEFAULT_LIMIT,
  LIST_DEFAULT_OFFSET,
} from 'src/app/constanst/common';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { DetailDialogComponent } from 'src/app/shared/components/detail-dialog/detail-dialog.component';
import { PokemonStoreService } from 'src/app/stores/pokemon.store.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  listPokemons: any;
  page: number = 1;
  offset: number = LIST_DEFAULT_OFFSET.pokemons;;
  limit: number = LIST_DEFAULT_LIMIT.pokemons;
  count: number = 0;
  searchText: any;
  smallScreen = window.matchMedia('(max-width: 768px)').matches;
  limitSelect = [10, 20, 50, 100];
  listPokemons$ = this.pokemonStores.listPokemons$;
  isSearching = false;

  @ViewChild('searchInput') searchInput!: ElementRef;
  constructor(
    private pokemonService: PokemonService,
    private modalService: NgbModal,
    private pokemonStores: PokemonStoreService
  ) {}

  ngOnInit(): void {
    this.getAllPokemons();
  }

  ngAfterViewInit() {
    this.searchText = fromEvent(
      this.searchInput.nativeElement,
      'keyup'
    ).pipe(
      map((event: any) => {
        return event.target.value;
      }),
      debounceTime(300)
    ).subscribe((searchText) => {
      if (searchText) {
        this.isSearching = true;
        
        this.listPokemons$.subscribe((res) => {
          const fiteredList = res.filter((e: any) => {
            return e.name.includes(searchText);
          });
          this.count = fiteredList.length;
          this.listPokemons = fiteredList;
        });

        this.listPokemons$.next(this.listPokemons);
      } else {
        this.isSearching = false;
        this.getAllPokemons();
      }
    });
  }

  async getAllPokemons() {
    const params = {
      offset: this.offset,
      limit: 99999,
    };

    const res: any = await lastValueFrom(this.pokemonService.getListPokemon(params));
    const listPokemons = await Promise.all(
      res.results.map(async (pokemon: any) => {
        const pokemonDetail: any = await lastValueFrom(
          this.pokemonService.getDetailPokemon(pokemon.name)
        );
        const image = pokemonDetail.sprites.other['official-artwork'].front_default;

        return Object.assign({}, pokemon, pokemonDetail, { image });
      })
    );

    this.listPokemons$.next(listPokemons);
  }

  openPokemonDetailDialog(pokemon = {}) {
    const modalRef = this.modalService.open(DetailDialogComponent);
    modalRef.componentInstance.pokemonDetail = pokemon;
    return;
  }

  handleSelectLimit(e: any) {
    this.limit = Number(e.target.value);
  }
}
