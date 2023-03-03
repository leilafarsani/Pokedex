import React from "react";
function Logo(props) {
  return (
    <header className="App-header">
      <h1>Welcome to the {props.appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        onClick = {props.onClick} alt="logo"
      />
    </header>
  );
}

export default Logo;

