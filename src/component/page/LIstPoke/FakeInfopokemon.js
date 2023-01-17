import "./Infopokemon.css";
const FakeInfopokemon = (props) => {
  const { pokemon } = props;
  return (
    <div className={!pokemon ? "Info-containers" : "Info-containers close"}>
      <img
        className="Top-img"
        src="https://sv1.picz.in.th/images/2022/11/18/G41hJt.png"
      />
      <h4>
        Select a Pokemon
        <br /> to display here.
      </h4>
    </div>
  );
};
export default FakeInfopokemon;
