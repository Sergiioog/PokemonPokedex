import { Component } from '@angular/core';
import {AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements AfterViewInit {

  pokemons: Array<any>;

  constructor() {
    this.pokemons = [
      { imagen: "assets/pokemons/Bulbasur.png", descripcionImg:"Bulbasur img",
        nombre: 'Bulbasur', altura: '0,7m' , peso: '6,9 kg', categoria: 'Semilla',tipo: 'Planta',
      },
      { imagen: "assets/pokemons/Ivysaur.png", descripcionImg:"Ivysaur img",
      nombre: 'Ivysaur', altura: '1,0m' , peso: '13,0 kg', categoria: 'Semilla',tipo: 'Planta'
      },
      { imagen: "assets/pokemons/Venusaur.png", descripcionImg:"Venusaur img",
      nombre: 'Venusaur', altura: '2,0m' , peso: '100,0 kg', categoria: 'Semilla',tipo: 'Planta'
      },
      { imagen: "assets/pokemons/Charmander.png", descripcionImg:"Charmander img",
      nombre: 'Charmander', altura: '0,6m' , peso: '8,5 kg', categoria: 'Lagartija',tipo: 'Fuego'
      },
      { imagen: "assets/pokemons/Charmaleon.png", descripcionImg:"Charmaleon img",
      nombre: 'Charmaleon', altura: '1,1m' , peso: '19,0 kg', categoria: 'LLama',tipo: 'Fuego'
      },
      { imagen: "assets/pokemons/Charizard.png", descripcionImg:"Charizard img",
      nombre: 'Charizard', altura: '1,7m' , peso: '90,5 kg', categoria: 'LLama',tipo: 'Fuego'
      },
      { imagen: "assets/pokemons/Squirtle.png", descripcionImg:"Squirtle img",
      nombre: 'Squirtle', altura: '0,5m' , peso: '9,0 kg', categoria: 'Tortuguita',tipo: 'Agua'
      },
      { imagen: "assets/pokemons/Wartortle.png", descripcionImg:"Wartortle img",
      nombre: 'Wartortle', altura: '1,0m' , peso: '22,5 kg', categoria: 'Tortuga',tipo: 'Agua'
      },
      { imagen: "assets/pokemons/Blastoise.png", descripcionImg:"Blastoise img",
      nombre: 'Blastoise', altura: '1,6m' , peso: '85,5 kg', categoria: 'Armazón',tipo: 'Agua'
      },
  
    ];
  }
    ngAfterViewInit() {
      var cardPokemon = document.querySelector('.pokeCard') as HTMLElement | null; //Se le llama como un elemento HTML ya que no se hacerlo mediante vinculacion de clases

    if (cardPokemon !== null) {

      for (let i = 0; i < this.pokemons.length; i++) {
        if (this.pokemons[i].tipo === 'Fuego') {
          cardPokemon.style.background = 'rgba(241, 25, 17, 0.549)';
          console.log(this.pokemons[i].nombre);
        }
      }
    }
    

    
  }

}

  

  

