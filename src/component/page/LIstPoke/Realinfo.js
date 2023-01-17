import "./RealInfo.css";

function Realinfo(props) {
  const { pokemon } = props;
  const statNames = {
    hp: "hp",
    attack: "atk",
    defense: "def",
    "special-attack": "s-atk",
    "special-defense": "s-def",
    speed: "spd",
  };
  return (
    <div className={!pokemon ? "Info-containers close" : "Info-containers"}>
      <img
        className="Top-img"
        src={pokemon.sprites.other.dream_world.front_default}
      />

      <h1>{pokemon.name}</h1>

      <div className="Typeinfo-container">
        <h1>Type</h1>
        {pokemon.types.map((t) => (
          <small className={[t.type.name] + "Info"}>{t.type.name}</small>
        ))}
      </div>
      <h1>Ability</h1>
      <div className="Ability-container">
        {pokemon.abilities.map((a) => (
          <small className="ability">{a.ability.name}</small>
        ))}
      </div>
      <h1>Stat</h1>
      <div className="Stat-container">
        {pokemon.stats.map((s) => (
          <div className={s.base_stat}>
            <div className={s.stat.name}>
              {s.base_stat}
              <br className="gap" />
              <span>{statNames[s.stat.name]}</span>
              <br />
            </div>
          </div>
        ))}
      </div>
      <div className="Shape-container">
        <small className="shape">
          Weight:
          <span />
          {pokemon.weight}
        </small>
        <small className="shape">
          height:
          <span />
          {pokemon.height}
        </small>
      </div>
    </div>
  );
}
export default Realinfo;
