import React, { useState } from "react";

const CaughtPokemon = (props) => {
 //const date = new Date().toLocaleDateString();
 const [caught, setCaught] = useState(0);
  function catchPokemon() {
    setCaught(caught + 1);
  }
 return (
   <div>
     <button onClick={catchPokemon}>Catch Pokemon</button>
     <p>
       Caught {caught} Pokemon on {props.pokDate}
     </p>
     ;
   </div>
 );
};
export default CaughtPokemon;