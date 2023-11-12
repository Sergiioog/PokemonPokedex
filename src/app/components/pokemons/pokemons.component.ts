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
        nombre: 'Bulbasur',id: '1', altura: '0,7m', peso: '6,9 kg', categoria: 'Semilla', tipo: 'Planta',
        debilidades: ['Fuego', 'Volador']
      },
      { imagen: "assets/pokemons/Ivysaur.png", descripcionImg: "Ivysaur img",
        nombre: 'Ivysaur', id: '2', altura: '1,0m', peso: '13,0 kg', categoria: 'Semilla', tipo: 'Planta',
        debilidades: ['Fuego', 'Volador']
      },
      { imagen: "assets/pokemons/Venusaur.png", descripcionImg: "Venusaur img",
        nombre: 'Venusaur', id: '3', altura: '2,0m', peso: '100,0 kg', categoria: 'Semilla', tipo: 'Planta',
        debilidades: ['Fuego', 'Volador']
      },
      { imagen: "assets/pokemons/Charmander.png", descripcionImg: "Charmander img",
        nombre: 'Charmander', id: '4', altura: '0,6m', peso: '8,5 kg', categoria: 'Lagartija', tipo: 'Fuego',
        debilidades: ['Agua', 'Tierra', 'Roca']
      },
      { imagen: "assets/pokemons/Charmaleon.png", descripcionImg: "Charmaleon img",
        nombre: 'Charmaleon', id: '5', altura: '1,1m', peso: '19,0 kg', categoria: 'LLama', tipo: 'Fuego',
        debilidades: ['Agua', 'Tierra', 'Roca']
      },
      { imagen: "assets/pokemons/Charizard.png", descripcionImg: "Charizard img",
        nombre: 'Charizard', id: '6', altura: '1,7m', peso: '90,5 kg', categoria: 'LLama', tipo: 'Fuego',
        debilidades: ['Agua', 'Eléctrico', 'Roca']
      },
      { imagen: "assets/pokemons/Squirtle.png", descripcionImg: "Squirtle img",
        nombre: 'Squirtle', id: '7', altura: '0,5m', peso: '9,0 kg', categoria: 'Tortuguita', tipo: 'Agua',
        debilidades: ['Planta','Eléctrico']
      },
      { imagen: "assets/pokemons/Wartortle.png", descripcionImg: "Wartortle img",
        nombre: 'Wartortle', id: '8', altura: '1,0m', peso: '22,5 kg', categoria: 'Tortuga', tipo: 'Agua',
        debilidades: ['Planta','Eléctrico']
      },
      { imagen: "assets/pokemons/Blastoise.png", descripcionImg: "Blastoise img",
        nombre: 'Blastoise', id: '9', altura: '1,6m', peso: '85,5 kg', categoria: 'Armazón', tipo: 'Agua',
        debilidades: ['Planta','Eléctrico']
      },
    ];
    
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

  

  

