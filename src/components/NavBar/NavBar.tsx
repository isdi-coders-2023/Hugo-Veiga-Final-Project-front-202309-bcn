import { NavLink } from "react-router-dom";
import NavBarStyled from "./NavBarStyled";

const NavBar = (): React.ReactElement => {
  return (
    <NavBarStyled>
      <ul className="navbar">
        <li>
          <NavLink to="/tattoos" className="navbar__link">
            Tattoos
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-tattoo" className="navbar__link">
            Add tattoo
          </NavLink>
        </li>
      </ul>
    </NavBarStyled>
  );
};

export default NavBar;
