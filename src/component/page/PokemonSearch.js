import axios from "axios";
import StateCard from "./PokeSearch/StateCard";
import { useState } from "react";
import "./PokeSearch/PokemonSearch.css";
import { Line } from "rc-progress";

function PokemonSearch() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState([]);
  const [pokemon, setPokemon] = useState([]);

  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        console.log(response);
        setPokemon({
          name: pokemonName,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          specialATK: response.data.stats[3].base_stat,
          specialDEF: response.data.stats[4].base_stat,
          type: response.data.types[0].type.name,
        });
      });
    setPokemonChosen(pokemon);
    console.log("round2", pokemon);
    console.log("round3", pokemonChosen);
  };

  return (
    <div className="App">
      <h1>pokemon stats</h1>
      <div className="stat-display">
        {!pokemonChosen ? (
          <h1>Please choose a pokemon</h1>
        ) : (
          <>
            <div ClassName="NamePlate">
              <img src={pokemon.img} />
              <h1>{pokemon.name}</h1>
              <h3>Type:{pokemon.type}</h3>
              <h3>Species:{pokemon.species}</h3>
            </div>
            <div className="Power-stat">
              <div className="Hp">
                Hp: {pokemon.hp}{" "}
                <Line
                  percent={pokemon.hp}
                  strokeWidth={10}
                  strokeColor="green"
                  trailColor="rgba(0, 0, 0, 0.863)"
                />
              </div>

              <div className="attack">
                <h1>Attack:{pokemon.attack}</h1>
                <Line
                  percent={pokemon.attack}
                  strokeWidth={10}
                  strokeColor="red"
                  trailColor="rgba(0, 0, 0, 0.863)"
                />
              </div>

              <div className="defense">
                <h1>defense:{pokemon.defense}</h1>
                <Line
                  percent={pokemon.defense}
                  strokeWidth={10}
                  strokeColor="orange"
                  trailColor="rgba(0, 0, 0, 0.863)"
                />
              </div>

              <div className="Special-ATK">
                <h1>S-ATK:{pokemon.specialATK}</h1>
                <Line
                  percent={pokemon.specialATK}
                  strokeWidth={10}
                  strokeColor="purple"
                  trailColor="rgba(0, 0, 0, 0.863)"
                />
              </div>

              <div className="Special-DEF">
                <h1>S-DEF:{pokemon.specialDEF}</h1>
                <Line
                  percent={pokemon.specialDEF}
                  strokeWidth={10}
                  strokeColor="#C9472A"
                  trailColor="rgba(0, 0, 0, 0.863)"
                />
              </div>
            </div>
          </>
        )}
      </div>
      <div className="Search-container">
        <input
          className="Input-container"
          type="text"
          onChange={(event) => {
            setPokemonName(event.target.value);
          }}
        />
        <button className="Button-container" onClick={searchPokemon}>
          Search pokemon
        </button>
      </div>
    </div>
  );
}
export default PokemonSearch;

/*{!pokemonChosen ? (
  <h1>Please choose a pokemon</h1>
) : (
  { PokemonElements }
)}*/
