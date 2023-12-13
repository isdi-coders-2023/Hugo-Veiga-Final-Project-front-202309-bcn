import NavBar from "../NavBar/NavBar";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled className="header">
      <a href="/">
        <h1 className="header__title">Inkventory</h1>
      </a>
      <NavBar />
    </HeaderStyled>
  );
};

export default Header;
