import axios from "axios";
import { useState } from "react";
import "./PokeSearch/PokemonSearch.css";

function PokemonSearch() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState();
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
          speed: response.data.stats[5].base_stat,
          type: response.data.types[0].type.name,
        });
      });
    setPokemonChosen(pokemon);
    console.log("round2", pokemon);
    console.log("round3", pokemonChosen);
  };

  return (
    <div className="App">
      <div classname="Container">
        <div className="stat-display">
          {!pokemonChosen ? (
            <>
              <div className="NamePlate1">
                <img
                  className="firstImage"
                  src="https://web-pokedex.vercel.app/assets/img/Pokemon-Pokeball-PNG-HD-Image.png"
                />
                <h1 className={"Nameh1"}>Pokemon</h1>
                <medium className="StartType">Type</medium>
                <medium className="StartName">Pokemon</medium>
                <div className="Search-container">
                  <div className="Search-box">
                    <input
                      className="Input-container"
                      type="text"
                      placeholder="Type a Pokemon"
                      onChange={(event) => {
                        setPokemonName(event.target.value);
                      }}
                    />
                    <button
                      className="Button-container"
                      onClick={searchPokemon}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>

              <div className="Power-stat">
                <img
                  className="pokemonlogo"
                  src="https://nproxy.org/img_contents/4857/29gntwcxhd2n3-16-9.webp"
                />
                <div className="Hp-container">
                  <div className="Hp">
                    <h2>Max HP</h2>
                  </div>
                  <div className="HpBar" style={{ width: pokemon.hp + "px" }}>
                    {pokemon.hp}
                  </div>
                </div>

                <div className="Attack-container">
                  <div className="Attack">
                    <h2>Attack</h2>
                  </div>
                  <div
                    className="AttackBar"
                    style={{ width: pokemon.attack + "px" }}
                  >
                    {pokemon.attack}
                  </div>
                </div>

                <div className="Defense-container">
                  <div className="Defense">
                    <h2>Defense</h2>
                  </div>
                  <div
                    className="DefenseBar"
                    style={{ width: pokemon.defense + "px" }}
                  >
                    {pokemon.defense}
                  </div>
                </div>

                <div className="Special-ATK-container">
                  <div className="Special-ATK">
                    <h2>S-ATK</h2>
                  </div>
                  <div
                    className="Special-ATKBar"
                    style={{ width: pokemon.specialATK + "px" }}
                  >
                    {pokemon.specialATK}
                  </div>
                </div>

                <div className="Special-DEF-container">
                  <div className="Special-DEF">
                    <h2>S-DEF</h2>
                  </div>
                  <div
                    className="Special-DEFBar"
                    style={{ width: pokemon.specialDEF + "px" }}
                  >
                    {pokemon.specialDEF}
                  </div>
                </div>

                <div className="Speed-container">
                  <div className="Speed">
                    <h2>Speed</h2>
                  </div>
                  <div
                    className="SpeedBar"
                    style={{ width: pokemon.speed + "px" }}
                  >
                    {pokemon.speed}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="NamePlate">
                <img className={pokemon.type + "img"} src={pokemon.img} />
                <h1 className={"Nameh1"}>{pokemon.name}</h1>
                <medium className={pokemon.type + "StartType"}>Type</medium>
                <medium className={pokemon.type + "StartName"}>
                  {pokemon.type}
                </medium>
                <div className="Search-container">
                  <div className="Search-box">
                    <input
                      className="Input-container"
                      type="text"
                      placeholder="Type a Pokemon"
                      onChange={(event) => {
                        setPokemonName(event.target.value);
                      }}
                    />
                    <button
                      className="Button-container"
                      onClick={searchPokemon}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>

              <div className="Power-stat">
                <img
                  className="pokemonlogo"
                  src="https://nproxy.org/img_contents/4857/29gntwcxhd2n3-16-9.webp"
                />
                <div className="Hp-container">
                  <div className="Hp">
                    <h2>Max HP</h2>
                  </div>
                  <div className="HpBar" style={{ width: pokemon.hp + "px" }}>
                    {pokemon.hp}
                  </div>
                </div>

                <div className="Attack-container">
                  <div className="Attack">
                    <h2>Attack</h2>
                  </div>
                  <div
                    className="AttackBar"
                    style={{ width: pokemon.attack + "px" }}
                  >
                    {pokemon.attack}
                  </div>
                </div>

                <div className="Defense-container">
                  <div className="Defense">
                    <h2>Defense</h2>
                  </div>
                  <div
                    className="DefenseBar"
                    style={{ width: pokemon.defense + "px" }}
                  >
                    {pokemon.defense}
                  </div>
                </div>

                <div className="Special-ATK-container">
                  <div className="Special-ATK">
                    <h2>S-ATK</h2>
                  </div>
                  <div
                    className="Special-ATKBar"
                    style={{ width: pokemon.specialATK + "px" }}
                  >
                    {pokemon.specialATK}
                  </div>
                </div>

                <div className="Special-DEF-container">
                  <div className="Special-DEF">
                    <h2>S-DEF</h2>
                  </div>
                  <div
                    className="Special-DEFBar"
                    style={{ width: pokemon.specialDEF + "px" }}
                  >
                    {pokemon.specialDEF}
                  </div>
                </div>

                <div className="Speed-container">
                  <div className="Speed">
                    <h2>Speed</h2>
                  </div>
                  <div
                    className="SpeedBar"
                    style={{ width: pokemon.speed + "px" }}
                  >
                    {pokemon.speed}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default PokemonSearch;

/*
{!pokemonChosen ? (
  <h1>Please choose a pokemon</h1>
) : (
  { PokemonElements }
)}
*/
