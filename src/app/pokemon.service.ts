import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private base = 'https://pokeapi.co/';
  private pokeListEndpoint = 'api/v2/pokemon/';

  constructor(private httpClient: HttpClient) { }

  getAllPokemon$() {
    const url = this.base + this.pokeListEndpoint;
    return this.httpClient.get<any>(url).pipe(map(result => result [1]));
  }
}
