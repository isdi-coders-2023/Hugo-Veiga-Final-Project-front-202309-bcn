import Hero from "../components/Hero/Hero";
import TattoosPageStyled from "./TattoosPageStyled";

const TattoosPage = (): React.ReactElement => {
  return (
    <TattoosPageStyled className="tattoos-page">
      <Hero />
      <h1 className="tattoos-page__title">Tattoo List</h1>
    </TattoosPageStyled>
  );
};

export default TattoosPage;
