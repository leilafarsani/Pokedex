import React, { useState } from "react";

const CaughtPokemon = (props) => {
 //const date = new Date().toLocaleDateString();
 const [caught, setCaught] = useState([]);
  function catchPokemon() {
    let pokemonArray = ["Eevee", "Ditto", "Squirtle", "Spearow"];
    setCaught(caught.concat(pokemonArray[Math.floor(Math.random()* pokemonArray.length)]));
  }
 return (
   <div>
     <button onClick={catchPokemon}>Catch Pokemon</button>
     <p>
       Caught {caught.length} Pokemon on {props.pokDate}
     </p>
     <ul>
       {caught.map((pokemon, index) => (
         <li key={index}>{pokemon}</li>
       ))}
     </ul>
   </div>
 );
};
export default CaughtPokemon;