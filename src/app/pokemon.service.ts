import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url = 'https://pokeapi.co/';
  private pokeListEndpoint = 'api/v2/pokemon/';

  constructor(private httoClient: HttpClient) { }

  getAllPokemon{

  }
}
