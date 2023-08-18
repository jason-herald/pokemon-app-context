import React from "react";
import { usePokemon } from "../../PokemonContext";
import "./ProductDescriptionPage.css"; // Import the CSS file
import { useParams } from "react-router-dom";

import { IMAGE_URL } from "../../components/constants";

function ProductDescriptionPage() {
  const { pokemonDetails } = usePokemon();
  const { pokemonName } = useParams();
  const pokemon = pokemonDetails?.find(
    (pokemon) => pokemon.name === pokemonName
  ).details;

  return (
    <div className="product-description-container">
      <h1 className="product-description-header">Pokémon Details</h1>
      {pokemon && (
        <div className="pokemon-details">
          <h2 className="pokemon-name">{pokemon.name}</h2>
          <img
            src={`${IMAGE_URL}${String(pokemon.id).padStart(3, "0")}.png`}
            alt={pokemon.name}
          />
          <p className="pokemon-id">ID: {pokemon.id}</p>
          <p className="pokemon-property">Height: {pokemon.height}</p>
          <p className="pokemon-property">Weight: {pokemon.weight}</p>
          <p className="pokemon-property">Abilities:</p>
          <ul className="abilities-list">
            {pokemon.abilities.map((ability) => (
              <li className="ability-item" key={ability.ability.name}>
                {ability.ability.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductDescriptionPage;
