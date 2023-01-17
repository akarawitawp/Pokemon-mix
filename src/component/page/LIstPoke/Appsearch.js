import "./Appsearch.css";
import { FaSearch } from "react-icons/fa";
function Appsearch(props) {
  const { value, onValueChange } = props;
  return (
    <div className="app-search">
      <input
        className="app-search-input"
        type="text"
        placeholder="Search your pokemon"
        value={value}
        onChange={(event) => {
          onValueChange(event.target.value);
        }}
      />
      <div className="SearchIcon">
        <FaSearch />
      </div>
    </div>
  );
}
export default Appsearch;
