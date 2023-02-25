import React from "react";
 const BestPokemon = (props) =>{
  //const abilities = ["Anticipation", "Adaptability", "Run-Away"];
return(
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {props.pokAbility.map((ability) => (
          <li key={ability}>{ability}</li>
        ))}
      </ul>
    </div>
);
};
export default BestPokemon;