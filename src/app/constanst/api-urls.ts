import { environment  } from "src/environments/environment";

export const API_URL = {
  listGenerations: environment.pokeAPI + 'generation',
  generationDetail: environment.pokeAPI + 'generation/{id}',
  listGames: environment.pokeAPI + 'version',
  gameDetail: environment.pokeAPI + 'version/{id}',
  listItems: environment.pokeAPI + 'item',
  itemDetail: environment.pokeAPI + 'item/{id}',
  listLocations: environment.pokeAPI + 'location',
  locationDetail: environment.pokeAPI + 'location/{id}',
  listPokemon: environment.pokeAPI + 'pokemon',
  pokemonDetail: environment.pokeAPI + 'pokemon/{id}',
}