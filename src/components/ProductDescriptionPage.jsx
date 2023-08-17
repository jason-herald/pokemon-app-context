import React from "react";
import { usePokemon } from "../PokemonContext";
import "./ProductDescriptionPage.css"; // Import the CSS file

const IMAGE_URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";

function ProductDescriptionPage() {
  const { pokemonDetails } = usePokemon();

  return (
    <div className="product-description-container">
      <h1 className="product-description-header">Pokémon Details</h1>
      {pokemonDetails && (
        <div className="pokemon-details">
          <h2 className="pokemon-name">{pokemonDetails.name}</h2>
          <img
            src={`${IMAGE_URL}${String(pokemonDetails.id).padStart(
              3,
              "0"
            )}.png`}
            alt={pokemonDetails.name}
          />
          <p className="pokemon-id">ID: {pokemonDetails.id}</p>
          <p className="pokemon-property">Height: {pokemonDetails.height}</p>
          <p className="pokemon-property">Weight: {pokemonDetails.weight}</p>
          <p className="pokemon-property">Abilities:</p>
          <ul className="abilities-list">
            {pokemonDetails.abilities.map((ability) => (
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
