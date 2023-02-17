import { pokemons } from "./data.js";

//Listar todos os pokemons de um mesmo tipo

const searchPokemonType = (sameType) => {
  return pokemons.filter((pokemon) => pokemon.type.includes(sameType));
};

console.log(searchPokemonType("grass"));
