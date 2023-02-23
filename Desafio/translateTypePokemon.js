import { pokemons } from "./data.js";

let listOfPokemonTypesIntoEnglish = pokemons.map((pokemon) => pokemon.type);

listOfPokemonTypesIntoEnglish = listOfPokemonTypesIntoEnglish.flat();
listOfPokemonTypesIntoEnglish = [...new Set(listOfPokemonTypesIntoEnglish)];

const pokemonTypesIntoPortuguese = {
  normal: "normal",
  fire: "fogo",
  water: "água",
  grass: "grama",
  flying: "voador",
  fighting: "lutador",
  poison: "veneno",
  electric: "elétrico",
  ground: "terra",
  rock: "pedra",
  psychic: "psíquico",
  ice: "gelo",
  bug: "inseto",
  ghost: "fantasma",
  steel: "ferro",
  dragon: "dragão",
  dark: "sombrio",
  fairy: "fada",
};

const translatedPokemons = (listOfTranslatedPokemons) => {
  return pokemons.map((pokemon) => {
    return {
      ...pokemon,
      type: pokemon.type.map((type) => listOfTranslatedPokemons[type]),
    };
  });
};

console.log(translatedPokemons(pokemonTypesIntoPortuguese));
