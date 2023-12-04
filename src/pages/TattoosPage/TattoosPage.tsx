import Hero from "../../components/Hero/Hero";
import TattooCard from "../../components/TattooCard/TattooCard";
import tattoosMock from "../../data/tattoosData";
import TattoosPageStyled from "./TattoosPageStyled";

const TattoosPage = (): React.ReactElement => {
  return (
    <>
      <Hero />
      <TattoosPageStyled className="tattoos-page">
        <h1 className="tattoos-page__title">Tattoo List</h1>
        <TattooCard tattoo={tattoosMock[0]} />
      </TattoosPageStyled>
    </>
  );
};

export default TattoosPage;
