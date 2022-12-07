import Navigation from "./component/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/page/Home";
import Product from "./component/page/PokemonSearch";
import PokemonApp from "./component/page/PokemonApp";
import PokemonSearch from "./component/page/PokemonSearch";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/PokemonApp" element={<PokemonApp />} />
        <Route path="/PokemonSearch" element={<PokemonSearch />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
//exact เพื่อบอกหน้าแรก
