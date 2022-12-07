import "./LIstPoke/AppPoke.css";
import { useEffect, useState } from "react";
import PokemonThumbnail from "./LIstPoke/PokemonThumbnail";
import React from "react";
import Appsearch from "./LIstPoke/Appsearch";
import FakeInfopokemon from "./LIstPoke/FakeInfopokemon";
import RealInfo from "./LIstPoke/Realinfo";

function PokemonApp() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
  );
  const [searchText, setSearchText] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const getAllPokemon = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    console.log("load2", data);
    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`
        );
        const data = await res.json();

        setAllPokemon((currentList) => [...currentList, data]);

        await console.log(allPokemon);
      });
    }
    createPokemonObject(data.results);
    await console.log(allPokemon);
  };
  const onPokemonOpenClick = (thePokemon) => {
    setSelectedPokemon(thePokemon);

    // camelCase
    // PascalCase
  };

  const filteredpokemon = allPokemon.filter((pokemon) => {
    return pokemon.name.includes(searchText);
  });
  const PokemonElements = filteredpokemon.map((pokemon, index) => {
    return (
      <PokemonThumbnail
        pokemon={pokemon}
        key={index}
        onPokemonClick={() => {
          console.log("pokemon", pokemon);
          onPokemonOpenClick(pokemon);
        }}
      />
    );
  });

  useEffect(() => {
    getAllPokemon();
  }, []);

  // let pokemonInfo = null;
  // if (!!selectedPokemon) {
  //   pokemonInfo = <RealInfo pokemon={selectedPokemon} />;
  // }

  return (
    <div className="PokeApp">
      <h1>Pokedex</h1>
      <div className="Search-container">
        <Appsearch value={searchText} onValueChange={setSearchText} />
      </div>
      <div className="pokemon-container">
        <div className="all-container">{PokemonElements}</div>
      </div>
      <button className="load-more" onClick={() => getAllPokemon()}>
        Load more
      </button>
      <div className="info-container">
        <FakeInfopokemon />
      </div>
      {selectedPokemon ? <RealInfo pokemon={selectedPokemon} /> : null}
    </div>
  );
}

export default PokemonApp;
/*<img
        className="backPicture"
        src="https://sv1.picz.in.th/images/2022/11/18/G413fe.png"
      />*/
