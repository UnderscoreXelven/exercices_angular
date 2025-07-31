import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card';

//POO
interface Ability {
  name: string;
  description: string;
  damage: string;
  type: string;
}

interface PokemonModel {
  id: number;
  name: string;
  description: string;
  ability: Ability;
  types: string[];
}

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PokemonCardComponent],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css'
})

export class Pokemon {
  pokemon_form: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    ability: new FormGroup({
      name: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      damage: new FormControl("", [Validators.required]),
      type: new FormControl("", [Validators.required]),
    }),
    types: new FormArray([new FormControl("")])
  });

  pokemons: PokemonModel[] = [];
  private nextId: number = 1;

  savePokemon(): void {
    if (this.pokemon_form.valid) {
      const pokemon: PokemonModel = {
        id: this.nextId++,
        ...this.pokemon_form.value,
        types: [...this.types.value]
      };
      this.pokemons.push(pokemon);
      this.pokemon_form.reset();
      this.pokemon_form.setControl('types', new FormArray([new FormControl("")]));
    }
  }

  get types(): FormArray {
    return this.pokemon_form.get('types') as FormArray;
  }

  addType(): void {
    this.types.push(new FormControl(""));
  }

  deletePokemon(id: number): void {
    this.pokemons = this.pokemons.filter(p => p.id !== id);
  }
}