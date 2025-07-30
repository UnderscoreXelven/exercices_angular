import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css'
})
export class Pokemon {
  // FormGroup

  pokemon_form : FormGroup = new FormGroup(
    {
      name: new FormControl("", [Validators.required]),
      description : new FormControl("", [Validators.required]),
      ability : new FormGroup({
        name : new FormControl("", [Validators.required]),
        description: new FormControl("", [Validators.required]),
        damage : new FormControl("", [Validators.required]),
        type : new FormControl("", [Validators.required]),
      }),
      types : new FormArray([new FormControl("")])
    }, [Validators.required]
  )

  savePokemon() : void {
    if (this.pokemon_form.valid) {
      console.log("Pokémon : ", this.pokemon_form.value);
      this.pokemon_form.reset()
    }
  }

  get types() {
    return this.pokemon_form.controls["types"] as FormArray
  }

  addType() : void {
    this.types.push(new FormControl(""))
  }
}
