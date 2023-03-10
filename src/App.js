import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

const abilities = ["Anticipation", "Adaptability", "Run-Away"];
const date = new Date().toLocaleDateString();
const App = () => {
const logWhenClicked = () => {
    console.log("How are you?");
  };
  return (
    <div className="App">
      <Logo appName="Pokedex" onClick={logWhenClicked} />
      <BestPokemon pokAbility={abilities} />
      <CaughtPokemon pokDate={date} />
    </div>
  );
};



export default App;
