import React from "react";

export default function Species({ species, handleSpecies }) {
  return (
    <div>
      <h2>Species</h2>
        {species.map((specie, key) => (
              <button 
                key={key}
                onClick={handleSpecies} 
                value={specie} 
                >{specie}</button>
          ))}
    </div>
  );
}
