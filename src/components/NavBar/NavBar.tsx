import { NavLink } from "react-router-dom";
import NavBarStyled from "./NavBarStyled";

const NavBar = (): React.ReactElement => {
  return (
    <NavBarStyled>
      <ul className="navbar">
        <li>
          <NavLink
            aria-label="to tattoos"
            to="/tattoos"
            className="navbar__link"
          >
            Tattoos
          </NavLink>
        </li>
        <li>
          <NavLink
            aria-label="to add tattoo"
            to="/add-tattoo"
            className="navbar__link"
          >
            Add tattoo
          </NavLink>
        </li>
      </ul>
    </NavBarStyled>
  );
};

export default NavBar;
