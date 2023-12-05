import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import TattooList from "../../components/TattooList/TattooList";
import useTattoosApi from "../../hooks/useTattoosApi";
import TattoosPageStyled from "./TattoosPageStyled";
import { useEffect } from "react";
import { loadTattoosActionCreator } from "../../store/features/tattoos/tattoosSlice";

const TattoosPage = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { getTattoos } = useTattoosApi();

  useEffect(() => {
    (async () => {
      const { tattoos } = await getTattoos();

      dispatch(loadTattoosActionCreator(tattoos));
    })();
  }, [dispatch, getTattoos]);
  return (
    <>
      <Hero />
      <TattoosPageStyled className="tattoos-page">
        <h1 className="tattoos-page__title">Tattoo List</h1>
        <TattooList />
      </TattoosPageStyled>
    </>
  );
};

export default TattoosPage;
