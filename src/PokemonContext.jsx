import { createContext, useContext, useState } from "react";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  return (
    <PokemonContext.Provider value={{ pokemonDetails, setPokemonDetails }}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  return useContext(PokemonContext);
}
