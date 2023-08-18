import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProductListingPage from "./pages/ProductListingPage/ProductListingPage";
import ProductDescriptionPage from "./pages/ProductDescriptionPage/ProductDescriptionPage";
import "./index.css";
import { PokemonProvider } from "./PokemonContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <PokemonProvider>
      <Routes>
        <Route exact path="/" element={<ProductListingPage />} />
        <Route
          path="/pokemon/:pokemonName"
          element={<ProductDescriptionPage />}
        />
      </Routes>
    </PokemonProvider>
  </Router>
);
