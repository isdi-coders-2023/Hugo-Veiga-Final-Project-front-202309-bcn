import { NavLink } from "react-router-dom";
import useTattoosApi from "../../hooks/useTattoosApi";
import { deleteTattooActionCreator } from "../../store/features/tattoos/tattoosSlice";
import { TattooStructure } from "../../store/features/tattoos/types";
import { useAppDispatch } from "../../store/hooks";
import TattooCardStyled from "./TattooCardStyled";

interface TattooCardProps {
  tattoo: TattooStructure;
}

const TattooCard = ({
  tattoo: { artist, image, style, _id },
}: TattooCardProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { deleteTattoo } = useTattoosApi();

  const deleteTattooId = () => {
    deleteTattoo(_id);

    dispatch(deleteTattooActionCreator(_id));
  };
  return (
    <TattooCardStyled>
      <div className="tattooCard">
        <a href={`/tattoos/${_id}`} className="tattooCard__image__wrapper">
          <img
            className="tattooCard__image"
            src={image}
            alt={`${artist}'s tattoo`}
            width="280"
            height="222"
          />
        </a>
        <div className="tattooCard_toogleFavorite">
          <img
            src="/images/heart-not-favorite.svg"
            alt="toggle favorite tattoo"
            width="30"
            height="30"
          />
        </div>
        <div className="tattooCard__info">
          <h2 className="tattooCard__title">{artist}</h2>
          <span className="tattooCard__data">Style: {style}</span>
        </div>
        <div className="tattooCard__icons">
          <NavLink to={`/tattoos/${_id}`}>
            <img
              src="/images/detail-info.svg"
              alt={`to ${artist}'s tattoo detail page`}
              width="30"
              height="30"
            />
          </NavLink>
          <NavLink to={`/modify-tattoo/${_id}`}>
            <img
              src="/images/edit.svg"
              alt={`to ${artist}'s edit tattoo form`}
              width="30"
              height="30"
            />
          </NavLink>
          <button
            disabled={false}
            type={undefined}
            onClick={deleteTattooId}
            className="tattooCard__button"
          >
            <img
              src="/images/trash-delete.svg"
              alt="delete tattoo"
              width="30"
              height="30"
            />
          </button>
        </div>
      </div>
    </TattooCardStyled>
  );
};

export default TattooCard;
