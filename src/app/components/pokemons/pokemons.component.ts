import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent {

  pokemons: Array<any>;
  cartasPoke : Array<any>;

  constructor() {


    /*------Array de Pokemons------*/
    this.pokemons = [
      { imagen: "assets/pokemons/Bulbasur.png", descripcionImg: "Bulbasur img",
        nombre: 'Bulbasur', altura: '0,7m', peso: '6,9 kg', categoria: 'Semilla', tipo: 'Planta',
        debilidades: ['Fuego', 'Volador', 'Pisquico', 'Hielo']
      },
      { imagen: "assets/pokemons/Ivysaur.png", descripcionImg: "Ivysaur img",
        nombre: 'Ivysaur', altura: '1,0m', peso: '13,0 kg', categoria: 'Semilla', tipo: 'Planta',
        debilidades: ['Fuego', 'Volador', 'Pisquico', 'Hielo']
      },
      { imagen: "assets/pokemons/Venusaur.png", descripcionImg: "Venusaur img",
        nombre: 'Venusaur', altura: '2,0m', peso: '100,0 kg', categoria: 'Semilla', tipo: 'Planta',
        debilidades: ['Fuego', 'Volador', 'Pisquico', 'Hielo']
      },
      { imagen: "assets/pokemons/Charmander.png", descripcionImg: "Charmander img",
        nombre: 'Charmander', altura: '0,6m', peso: '8,5 kg', categoria: 'Lagartija', tipo: 'Fuego',
        debilidades: ['Volador', 'Pisquico', 'Hielo']
      },
      { imagen: "assets/pokemons/Charmaleon.png", descripcionImg: "Charmaleon img",
        nombre: 'Charmaleon', altura: '1,1m', peso: '19,0 kg', categoria: 'LLama', tipo: 'Fuego',
        debilidades: ['Fuego', 'Volador', 'Pisquico', 'Hielo']
      },
      { imagen: "assets/pokemons/Charizard.png", descripcionImg: "Charizard img",
        nombre: 'Charizard', altura: '1,7m', peso: '90,5 kg', categoria: 'LLama', tipo: 'Fuego',
        debilidades: ['Fuego', 'Volador', 'Pisquico', 'Hielo']
      },
      { imagen: "assets/pokemons/Squirtle.png", descripcionImg: "Squirtle img",
        nombre: 'Squirtle', altura: '0,5m', peso: '9,0 kg', categoria: 'Tortuguita', tipo: 'Agua',
        debilidades: ['Fuego', 'Volador', 'Pisquico', 'Hielo']
      },
      { imagen: "assets/pokemons/Wartortle.png", descripcionImg: "Wartortle img",
        nombre: 'Wartortle', altura: '1,0m', peso: '22,5 kg', categoria: 'Tortuga', tipo: 'Agua',
        debilidades: ['Fuego', 'Volador', 'Pisquico', 'Hielo']
      },
      { imagen: "assets/pokemons/Blastoise.png", descripcionImg: "Blastoise img",
        nombre: 'Blastoise', altura: '1,6m', peso: '85,5 kg', categoria: 'Armazón', tipo: 'Agua',
        debilidades: ['Fuego', 'Volador', 'Pisquico', 'Hielo']
      },
    ];
    const debilidadesPlanta = {
      Fuego: {
        'background': 'red',
      },
      Volador: {
        'background': 'white',
      },
    };
    /*------Array de Pokemons------*/

    /*------Array para elegir el color de las cards------*/
    this.cartasPoke = [];



    for(let i= 0; i < this.pokemons.length; i++){
      let cartaPedeterminada = {
        'background': 'rgba( 255, 255, 255, 0.40 )',
        'box-shadow': '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        'backdrop-filter': 'blur( 5px )',
        '-webkit-backdrop-filter': 'blur( 5px )',
        'border-radius': '10px',
        'border': '1px solid rgba( 255, 255, 255, 0.18 )'
      }
      
      if (this.pokemons[i].tipo === 'Planta') {
        cartaPedeterminada = {
          'background': 'rgba(79, 145, 67, 0.8)', // Tono de verde más oscuro
          'box-shadow': '0 8px 32px 0 rgba(46, 139, 87, 0.5)',
          'backdrop-filter': 'blur(8px)',
          '-webkit-backdrop-filter': 'blur(8px)',
          'border-radius': '12px',
          'border': '2px solid rgba(255, 255, 255, 0.4)'
        };
        
        this.pokemons[i].debilidades = Object.keys(debilidadesPlanta);

      }else if (this.pokemons[i].tipo === 'Fuego') {
        cartaPedeterminada = {
          'background': 'rgba(255, 120, 33, 0.8)', // Cambiado a un tono de naranja
          'box-shadow': '0 8px 32px 0 rgba(255, 69, 0, 0.5)', // Cambiado a una sombra más oscura
          'backdrop-filter': 'blur(8px)', // Reducido el desenfoque de fondo
          '-webkit-backdrop-filter': 'blur(8px)',
          'border-radius': '12px', // Aumentado el radio de borde
          'border': '2px solid rgba(255, 255, 255, 0.4)' // Ajustado el color del borde
        };
       
        
      }else if (this.pokemons[i].tipo === 'Agua') {
        cartaPedeterminada = {
          'background': 'rgba(70, 130, 180, 0.8)', // Tono de azul para representar el agua
          'box-shadow': '0 8px 32px 0 rgba(30, 144, 255, 0.5)',
          'backdrop-filter': 'blur(8px)',
          '-webkit-backdrop-filter': 'blur(8px)',
          'border-radius': '12px',
          'border': '2px solid rgba(255, 255, 255, 0.4)'
        };
        
      
      }
      
      this.cartasPoke.push(cartaPedeterminada);
      
    }

    
    /*------Array para elegir el color de las cards------*/

   
   


   } 


  
   

    

    
  

}

  

  

