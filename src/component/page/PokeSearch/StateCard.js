import react from "react";

function StateCard(props) {
  const { pokemon } = props;
  return (
    <div>
      <img
        className="thumb-img"
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <div className="number"></div>
    </div>
  );
}
export default StateCard;

/*<div className="Max-HP">
{pokemon.stat[0]}
<Line
  percent={pokemon.stat[0]}
  strokeWidth={2}
  strokeColor="green"
  trailColor="white"
/>
</div>
<div className="Attack">
{pokemon.stat[1]}
<Line
  percent={pokemon.stat[1]}
  strokeWidth={2}
  strokeColor="green"
  trailColor="white"
/>
</div>
<div className="Defense">
{pokemon.stat[2]}
<Line
  percent={pokemon.stat[2]}
  strokeWidth={2}
  strokeColor="green"
  trailColor="white"
/>
</div>
<div className="Special-Def">
{pokemon.stat[3]}
<Line
  percent={pokemon.stat[3]}
  strokeWidth={2}
  strokeColor="green"
  trailColor="white"
/>
</div>
<div className="Special-ATK">
{pokemon.stat[4]}
<Line
  percent={pokemon.stat[4]}
  strokeWidth={2}
  strokeColor="green"
  trailColor="white"
/>
</div>
<div className="Speed">
{pokemon.stat[5]}
<Line
  percent={pokemon.stat[5]}
  strokeWidth={2}
  strokeColor="green"
  trailColor="white"
/>
</div>
<Line
percent={5}
strokeWidth={2}
strokeColor="green"
trailColor="white"
/>*/
