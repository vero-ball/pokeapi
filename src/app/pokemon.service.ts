import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private base = 'https://pokeapi.co/api/v2/';
  private regionEndpoint = 'region';
  private pokeListEndpoint = '?limit=60&offset=60';

  constructor(private httpClient: HttpClient) { }

  getAllPokemon$() {
    const url = this.base + this.pokeListEndpoint;
    return this.httpClient.get<any>(url).pipe(map(result => result [1]));
  }

  getAllRegions$() {
    const url = this.base + this.regionEndpoint;
    return this.httpClient.get<any[]>(url).pipe(map(result => result [1]));
  }
}
