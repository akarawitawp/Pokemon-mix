import { Link } from "react-router-dom";
import { FaAtlassian, FaAngular, FaMixer } from "react-icons/fa";
import { useState } from "react";
import "./Navigation.css";
import MenuData from "./MenuData";
const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <aside>
      <div className="navbar">
        <div className="navbar-toggle">
          <Link to="#" className="menu-bar">
            <FaAtlassian onClick={toggleMenu} />
          </Link>
        </div>
      </div>

      <nav className={showMenu ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-item">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bar">
              <FaMixer onClick={toggleMenu} />
            </Link>
          </li>

          {MenuData.map((menu, index) => {
            return (
              <li className="menu-text" key={index}>
                <Link to={menu.path}>
                  {menu.icon}
                  <span>{menu.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
export default Navigation;
