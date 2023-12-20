import { useEffect } from "react";
import TattooDetailPageStyled from "./TattooDetailPageStyled";
import useTattoosApi from "../../hooks/useTattoosApi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useParams } from "react-router-dom";
import { loadTattooActionCreator } from "../../store/features/tattoos/tattoosSlice";
import { toast } from "react-toastify";
import { hideLoadingActionCreator } from "../../store/features/ui/uiSlice";

const TattooDetailPage = (): React.ReactElement => {
  const { _id } = useParams();
  const tattooById = useAppSelector((state) => state.tattoosState.tattoo);
  const dispatch = useAppDispatch();
  const { getTattoo } = useTattoosApi();

  useEffect(() => {
    (async () => {
      try {
        const tattoo = await getTattoo(_id as string);

        dispatch(loadTattooActionCreator(tattoo!));

        scrollTo(0, 0);
      } catch (error) {
        dispatch(hideLoadingActionCreator());

        toast.error("There was an error getting the tattoo", {
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
  }, [dispatch, getTattoo, _id]);

  return (
    <TattooDetailPageStyled className="tattooDetail-page">
      <div className="tattooDetail-page__wrapper">
        <h2 className="tattooDetail-page__title">{tattooById.artist}</h2>
        <img
          className="tattooDetail-page__image"
          src={tattooById.image}
          alt={`${tattooById.artist}'s tattoo`}
          width="280"
          height="222"
        />
        <div className="tattooDetail-page_toogleFavorite">
          <img
            src="/images/heart-not-favorite.svg"
            alt="toggle favorite tattoo"
            width="30"
            height="30"
          />
        </div>
        <div className="tattooDetail-page__info">
          <span className="tattooDetail-page__data">
            Style:{" "}
            <span className="tattooDetail-page__data--style">
              {tattooById.style}
            </span>
          </span>
          <span className="tattooDetail-page__data">
            City:{" "}
            <span className="tattooDetail-page__data--city">
              {tattooById.city}
            </span>
          </span>
          <span className="tattooDetail-page__data">
            Email:{" "}
            <span className="tattooDetail-page__data--email">
              {tattooById.email}
            </span>
          </span>
          <div className="tattooDetail-page__notes--wrapper">
            <span className="tattooDetail-page__notes--tag">Notes:</span>
            <p className="tattooDetail-page__notes--text">{tattooById.notes}</p>
          </div>
        </div>
        <div className="tattooDetail-page__icons">
          <a href={tattooById.direction}>
            <img
              src="/images/location.svg"
              alt="to tattoo shop ubication"
              width="30"
              height="30"
            />
          </a>
          <a href={tattooById.instagram}>
            <img
              src="/images/instagram.svg"
              alt="to tattoo artist instagram"
              width="30"
              height="30"
            />
          </a>
        </div>
      </div>
    </TattooDetailPageStyled>
  );
};
export default TattooDetailPage;
