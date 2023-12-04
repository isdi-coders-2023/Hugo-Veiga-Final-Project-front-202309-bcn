import Hero from "../../components/Hero/Hero";
import TattooList from "../../components/TattooList/TattooList";
import tattoosMock from "../../data/tattoosData";
import TattoosPageStyled from "./TattoosPageStyled";

const TattoosPage = (): React.ReactElement => {
  return (
    <>
      <Hero />
      <TattoosPageStyled className="tattoos-page">
        <h1 className="tattoos-page__title">Tattoo List</h1>
        <TattooList tattoos={tattoosMock} />
      </TattoosPageStyled>
    </>
  );
};

export default TattoosPage;
