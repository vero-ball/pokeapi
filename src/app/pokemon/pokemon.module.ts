import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PokemonComponent],
  exports: [PokemonComponent]
})
export class PokemonModule { }
