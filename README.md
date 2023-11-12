# PokemonPokedex

PokemonPokedex es una aplicación web desarrollada en Angular que proporciona información detallada sobre diferentes Pokémon. La aplicación utiliza componentes, directivas de Angular como ngFor y ngStyle, así como arrays para organizar y mostrar las tarjetas de los Pokémon.

## Características principales

- **Componentes Angular:** El proyecto está estructurado en componentes para una fácil modularidad y mantenimiento del código. Dichos componentes son, el header, el body y el footer, que simulan una Pokedex, así como el componente pokemons, que hace posible ver las tarjetas de los Pokemons.

- **Directiva ngFor:** Se utiliza la directiva ngFor para iterar sobre un array de Pokémon y mostrar dinámicamente las tarjetas de cada uno. Esto permite una fácil actualización de la interfaz de usuario cuando se añaden nuevos Pokémon.
  ```typescript
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
      },....
  ```

- **Directiva ngStyle:** La directiva ngStyle se utiliza para aplicar estilos dinámicos a las tarjetas de los Pokémon. Por ejemplo, se pueden cambiar los colores de fondo o el tamaño del texto según ciertos atributos de los Pokémon.

  ```html
  <div class="cardPokemon">
    <div class="pokeCard" *ngFor="let pokemon of pokemons; let i = index" [ngStyle]="cartasPoke[i]">
      <!--*ngFor que va sacando los pokemons del array de pokemon y ngStyle para controlar el color de las cards-->
      <div id="cab">
        <div class="imgCabecera">
          <img class="imagenPok" src="{{pokemon.imagen}}" alt="{{pokemon.descripcionImg}}">
        </div>
        <div class="idDiv">
          <p>{{pokemon.id}}</p>
        </div>
      </div>
     
      <div class="cuerpoTarjeta">
        <div id="tituloDiv">
          <h1>{{pokemon.nombre}}</h1>
        </div>
        <div id="tipos">
          <div class="opciones">
            <div class="opcion">
              <h4>Altura</h4>
              <p>{{pokemon.altura}}</p>
            </div>
            <div class="opcion">
              <h4>Peso</h4>
              <p>{{pokemon.peso}}</p>
            </div>
          </div>
          <div class="opciones">
            <div class="opcion">
              <h4>Categoría</h4>
              <p>{{pokemon.categoria}}</p>
            </div>
    ```

- **Arrays para gestionar datos:** La información de los Pokémon se almacena en arrays, lo que facilita la gestión y manipulación de los datos. Cada elemento del array representa un Pokémon con sus respectivas características.

## Instalación y ejecución

1. Clona el repositorio: `git clone https://github.com/tuusuario/PokemonPokedex.git`
2. Navega al directorio del proyecto: `cd PokemonPokedex`
3. Instala las dependencias: `npm install`
4. Inicia la aplicación: `ng serve`
5. Abre tu navegador y visita `http://localhost:4200/`

¡Disfruta explorando la PokemonPokedex!

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún problema o tienes ideas para mejorar la aplicación, no dudes en abrir un problema o enviar una solicitud de extracción.

