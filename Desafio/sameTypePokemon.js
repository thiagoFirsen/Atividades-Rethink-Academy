import { pokemons } from "./data.js";

const typeOfPokemonWanted = (sameTypePokemon) => {
  return pokemons.filter((pokemon) => pokemon.type.includes(sameTypePokemon));
};

console.log(typeOfPokemonWanted("grass"));
