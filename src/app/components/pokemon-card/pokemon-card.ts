import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// Re-déclaration ici (sinon tu peux l'importer de pokemon.ts si besoin)
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
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css'
})
export class PokemonCardComponent {
  @Input() pokemon!: PokemonModel;
  @Output() delete = new EventEmitter<number>();

  onDelete(): void {
    this.delete.emit(this.pokemon.id);
  }
}