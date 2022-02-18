import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonStoreService {

  listPokemons$ = new BehaviorSubject<any>([]);
  constructor() { }
}
