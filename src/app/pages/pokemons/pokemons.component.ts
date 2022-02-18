import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, fromEvent, lastValueFrom, map } from 'rxjs';
import {
  LIST_DEFAULT_LIMIT,
  LIST_DEFAULT_OFFSET,
} from 'src/app/constanst/common';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { DetailDialogComponent } from 'src/app/shared/components/detail-dialog/detail-dialog.component';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  listPokemons: any;
  page: number;
  offset: number;
  limit: number;
  count: number;
  searchText: any;
  smallScreen = window.matchMedia('(max-width: 768px)').matches;

  @ViewChild('searchInput') searchInput!: ElementRef;
  constructor(
    private pokemonService: PokemonService,
    private modalService: NgbModal
  ) {
    this.count = 0;
    this.page = 1;
    this.offset = LIST_DEFAULT_OFFSET.pokemons;
    this.limit = LIST_DEFAULT_LIMIT.pokemons;
  }

  ngOnInit(): void {
    this.getListPokemons();
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
    ).subscribe((e) => {
      console.log('search text', e);
    });
  }

  async getListPokemons() {
    const params = {
      offset: this.offset,
      limit: LIST_DEFAULT_LIMIT.pokemons,
    };

    const res: any = await lastValueFrom(
      this.pokemonService.getListPokemon(params)
    );
    this.count = res.count;
    this.listPokemons = await Promise.all(
      res.results.map(async (pokemon: any) => {
        const pokemonDetail: any = await lastValueFrom(
          this.pokemonService.getDetailPokemon(pokemon.name)
        );
        const image =
          pokemonDetail.sprites.other['official-artwork'].front_default;

        return Object.assign({}, pokemon, pokemonDetail, { image });
      })
    );
  }

  openPokemonDetailDialog(pokemon = {}) {
    const modalRef = this.modalService.open(DetailDialogComponent);
    modalRef.componentInstance.pokemonDetail = pokemon;
    return;
  }

  onPageChange(e: any) {
    this.page = e;
    this.offset = (e - 1) * LIST_DEFAULT_LIMIT.pokemons;
    this.getListPokemons();
  }
}
