import { useDispatch } from "react-redux";
import Hero from "../components/Hero/Hero";
import { useAppSelector } from "../store/hooks";
import TattoosPageStyled from "./TattoosPageStyled";
import tattoosMock from "../mocks/tattoosMocks";
import { useEffect } from "react";
import { loadTattoosActionCreator } from "../store/features/tattoos/tattoosSlice";

const TattoosPage = (): React.ReactElement => {
  const tattooState = useAppSelector((tatoo) => tatoo.tattoosState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTattoosActionCreator(tattoosMock));
  }, [dispatch]);

  return (
    <TattoosPageStyled className="tattoos-page">
      <Hero />
      <h1 className="tattoos-page__title">Tattoo List</h1>
      {tattooState.tattoos.map((tattoo) => (
        <span key={tattoo.id}>{tattoo.artist}</span>
      ))}
    </TattoosPageStyled>
  );
};

export default TattoosPage;
