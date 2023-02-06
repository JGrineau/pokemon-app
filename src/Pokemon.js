import React from 'react'

export default function Pokemon() {

    const pokedexUrl =
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

      let pokemonJson = {};
      function getJSONAsync() {
        const request = new XMLHttpRequest();
        request.onload = function () {
          pokemonJson = JSON.parse(request.responseText).pokemon;
        };

        request.open("GET", pokedexUrl, true);
        request.send(null);
      }

      function fetchPokemonInformation() {
        const pokemonId = parseInt(document.getElementById("ID").value);

        let pokemon3 = {};
        for (let i = 0; i < pokemonJson.length; i++) {
          const pokemon = pokemonJson[i];
          if (pokemon.id === pokemonId) {
            pokemon3 = pokemon;
            break;
          }
        }

        // output to elements
        document.getElementById("Number").value = pokemon3.num;
        document.getElementById("Name").value = pokemon3.name;
        document.getElementById("Height").value = pokemon3.height;
        document.getElementById("Weight").value = pokemon3.weight;
        document.getElementById("Image").src = pokemon3.img;
      }

      function next() {
        pokemonId = pokemonId + 1;
        // check validation
        if (pokemonId >= 0 && pokemonId <= 150) {
          fetchPokemonInformation(pokemonId);
        }
      }
      function previous() {
        pokemonId = pokemonId + -1;
        // check validation
        if (pokemonId >= 0 && pokemonId <= 150) {
          fetchPokemonInformation(pokemonId);
        }
      }
  return (
    <div>
        <body onload="getJSONAsync()"></body>
       <h1 class="title">Jarrod's Pokemon Index</h1>
    <div class="id">
      <h2 class="text">Enter Pokemon ID Below</h2>
      <a>Pokemon ID:</a><br />
      <input type="number" id="ID" />
    </div>

    <div class="number">
      <a>Pokemon Number:</a><br />
      <input type="text" id="Number" />
    </div>

    <div class="output">
      <a>Name:</a><br />
      <input type="text" id="Name" />

      <br /><br />

      <a>Height:</a><br />
      <input type="text" id="Height" />
      <br /><br />

      <a>Weight:</a><br />
      <input type="text" id="Weight" />
      <br /><br />
    </div>
    <div class="image">
      <a>Image:</a><br />
      <input type="image" id="Image" />
    </div>

    <br /><br />
    <div class="buttons">
      <input
        type="button"
        id="btnStart"
        value="Retrieve"
        onclick="fetchPokemonInformation();"
      />

      <input
        type="button"
        id="btnStart"
        value="Previous Pokemon"
        onclick="previous();"
      />
      <input
        type="button"
        id="btnStart"
        value="Next Pokemon"
        onclick="next();"
      />
      <br /><br />
    </div>
    <body onload="getJSONAsync()"></body>
    </div>
  )
}
