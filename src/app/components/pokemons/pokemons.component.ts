import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent {
  
  pokemons = [
    { imagen: "assets/pokemons/Bulbasur.png", descripcionImg:"Bulbasur img",
      nombre: 'Bulbasur', altura: '0,7m' , peso: '6,9kg', categoria: 'Semilla',tipo: 'Planta',
    },
    { imagen: "assets/pokemons/Ivysaur.png", descripcionImg:"Ivysaur img",
    nombre: 'Ivysaur', altura: '1,0m' , peso: '13,0kg', categoria: 'Semilla',tipo: 'Planta'
    },
    { imagen: "assets/pokemons/Venusaur.png", descripcionImg:"Venusaur img",
    nombre: 'Venusaur', altura: '2,0m' , peso: '100,0 kg', categoria: 'Semilla',tipo: 'Planta'
    },
    { imagen: "assets/pokemons/Bulbasur.png", descripcionImg:"Bulbasur img",
    nombre: 'Bulbasur', altura: '0,7m' , peso: '6,9kg', categoria: 'Semilla',tipo: 'Planta'
    },

  ];
}
