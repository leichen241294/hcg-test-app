import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/constanst/api-urls';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(
    private http: HttpClient
  ) { }

  getListPokemon(params: any) {
    const url = API_URL.listPokemon;

    return this.http.get(url, { params });
  }

  getDetailPokemon(name: string) {
    const url = API_URL.pokemonDetail.replace('{id}', name);

    return this.http.get(url)
  }
}
