import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { fetchPokemonList, fetchPokemonDetails } from "../api";
import "./ProductListingPage.css";
import { usePokemon } from "../PokemonContext";
import PokemonCard from "../components/PokemonCard";

function ProductListingPage() {
  const { setPokemonDetails } = usePokemon();

  useEffect(() => {
    async function fetchData() {
      const data = await fetchPokemonList();
      const pokemonWithDetails = await Promise.all(
        data.map(async (pokemon) => {
          const details = await fetchPokemonDetails(pokemon.name);
          return { ...pokemon, details };
        })
      );
      setPokemonDetails(pokemonWithDetails);
    }
    fetchData();
  }, []);
  const pokemon = usePokemon().pokemonDetails;
  return (
    <div className="pokemon-list-container">
      <h1>Pokémon List</h1>
      <div className="pokemon-card-grid">
        {pokemon?.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;
