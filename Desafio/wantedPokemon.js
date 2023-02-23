import { pokemons } from "./data.js";

const pokemonFound = (wantedPokemon) => {
  return pokemons.find((pokemon) => pokemon.name === wantedPokemon);
};

console.log(pokemonFound("bulbasaur"));
