import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-tag',
  templateUrl: './type-tag.component.html',
  styleUrls: ['./type-tag.component.scss']
})
export class TypeTagComponent implements OnInit {
  @Input() pokemonType: any;
  
  public tagDetails: {
    text: string,
    cssClass: string
  }
  constructor() {
    this.tagDetails = {
      text: '',
      cssClass: ''
    }
   }

  ngOnInit(): void {
    this.handleTagDetails()
  }

  handleTagDetails() {
    let type = this.pokemonType || null;
    switch(type) {
      case "normal":
        this.tagDetails = {
          text: 'Normal',
          cssClass: 'normal',
        };
        break;

      case "fire":
        this.tagDetails = {
          text: 'Fire',
          cssClass: 'fire',
        };
        break;

      case "fighting":
        this.tagDetails = {
          text: 'Fighting',
          cssClass: 'fighting',
        };
        break;

      case "water":
        this.tagDetails = {
          text: 'Water',
          cssClass: 'water',
        };
        break;

      case "flying":
        this.tagDetails = {
          text: 'Flying',
          cssClass: 'flying',
        };
        break;
        
      case "grass":
        this.tagDetails = {
          text: 'Grass',
          cssClass: 'grass',
        };
        break;

      case "poison":
        this.tagDetails = {
          text: 'Poison',
          cssClass: 'poison',
        };
        break;
        
      case "electric":
        this.tagDetails = {
          text: 'Electric',
          cssClass: 'electric',
        };
        break;

      case "ground":
        this.tagDetails = {
          text: 'Ground',
          cssClass: 'ground',
        };
        break;
        
      case "psychic":
        this.tagDetails = {
          text: 'Psychic',
          cssClass: 'psychic',
        };
        break;

      case "rock":
        this.tagDetails = {
          text: 'Rock',
          cssClass: 'rock',
        };
        break;
        
      case "ice":
        this.tagDetails = {
          text: 'Ice',
          cssClass: 'ice',
        };
        break;

      case "bug":
        this.tagDetails = {
          text: 'Bug',
          cssClass: 'bug',
        };
        break;

      case "dragon":
        this.tagDetails = {
          text: 'Dragon',
          cssClass: 'dragon',
        };
        break;

      case "ghost":
        this.tagDetails = {
          text: 'Ghost',
          cssClass: 'ghost',
        };
        break;

      case "dark":
        this.tagDetails = {
          text: 'Dark',
          cssClass: 'dark',
        };
        break;

      case "steel":
        this.tagDetails = {
          text: 'Steel',
          cssClass: 'steel',
        };
        break;

      case "fairy":
        this.tagDetails = {
          text: 'Fairy',
          cssClass: 'fairy',
        };
        break;
    }
  }
}
