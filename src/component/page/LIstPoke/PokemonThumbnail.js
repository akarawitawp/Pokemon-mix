import React from "react";

function PokemonThumbnail(props) {
  const { pokemon, onPokemonClick } = props;
  const style = `thumb-container $(type)`;

  return (
    <div
      className="thumb-container"
      onClick={() => {
        onPokemonClick();
      }}
    >
      <img
        className="thumb-img"
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <div className="number">
        <small>N{pokemon.id}</small>
      </div>
      <div className="detail-wrapper">
        <h3>{pokemon.name}</h3>
        {/* <small className={pokemon.types[0].type.name}>{pokemon.types[0].type.name}</small>
           {pokemon.types[1] ? <small className={pokemon.types[1].type.name}>{pokemon.types[1].type.name}</small> : null} */}
        <div className="Type-container">
          {pokemon.types.map((t) => (
            <small className={t.type.name}>{t.type.name}</small>
          ))}
        </div>
      </div>
    </div>
  );
}
export default PokemonThumbnail;
