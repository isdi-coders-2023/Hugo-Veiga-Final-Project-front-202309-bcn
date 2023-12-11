import { useEffect } from "react";
import { toast } from "react-toastify";
import Hero from "../../components/Hero/Hero";
import TattooList from "../../components/TattooList/TattooList";
import useTattoosApi from "../../hooks/useTattoosApi";
import TattoosPageStyled from "./TattoosPageStyled";
import { loadTattoosActionCreator } from "../../store/features/tattoos/tattoosSlice";
import { hideLoadingActionCreator } from "../../store/features/ui/uiSlice";
import { useAppDispatch } from "../../store/hooks";

const TattoosPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getTattoos } = useTattoosApi();

  useEffect(() => {
    (async () => {
      try {
        const tattoos = await getTattoos();

        dispatch(loadTattoosActionCreator(tattoos.tattoos));
      } catch (error) {
        dispatch(hideLoadingActionCreator());

        toast.error("Error loading tattoos", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
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
