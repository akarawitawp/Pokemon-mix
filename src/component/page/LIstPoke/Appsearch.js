import "./Appsearch.css";

function Appsearch(props) {
  const { value, onValueChange } = props;
  return (
    <div className="app-search">
      <input
        className="app-search-input"
        type="text"
        placeholder="ค้นหา"
        value={value}
        onChange={(event) => {
          onValueChange(event.target.value);
        }}
      />
    </div>
  );
}

export default Appsearch;
