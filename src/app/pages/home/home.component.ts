import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { LIST_ITEMS_HOMEPAGE_LIMIT, LIST_POKEMONS_HOMEPAGE_LIMIT } from 'src/app/constanst/common';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailDialogComponent } from 'src/app/shared/components/detail-dialog/detail-dialog.component';
import { ItemsService } from 'src/app/services/items/items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listPokemons: any;
  listItems: any;
  constructor(
    private pokemonService: PokemonService,
    private modalService: NgbModal,
    private itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    this.getListPokemons(LIST_POKEMONS_HOMEPAGE_LIMIT);
    this.getListItems();
  }

  async getListPokemons(limit: number) {
    const params = {
      limit
    };

    const res: any = await lastValueFrom(this.pokemonService.getListPokemon(params));
    this.listPokemons = await Promise.all(res.results.map(async (pokemon: any) => {
      const pokemonDetail: any = await lastValueFrom(this.pokemonService.getDetailPokemon(pokemon.name));
      const image = pokemonDetail.sprites.other["official-artwork"].front_default;

      return Object.assign({}, pokemon, pokemonDetail, { image })
    }));
  }

  openPokemonDetailDialog(pokemon = {}) {
    const modalRef = this.modalService.open(DetailDialogComponent);
    modalRef.componentInstance.pokemonDetail = pokemon;
    return
  }

  async getListItems() {
    const params = {
      limit: LIST_ITEMS_HOMEPAGE_LIMIT
    }

    const res: any = await lastValueFrom(this.itemsService.getListItems(params));
    this.listItems = await Promise.all(res.results.map(async (item: any) => {
      const itemDetail: any = await lastValueFrom(this.itemsService.getDetailItem(item.name));

      return Object.assign({}, item, itemDetail)
    }));
  }
}
