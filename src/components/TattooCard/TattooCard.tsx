import { TattooStructure } from "../../store/features/tattoos/types";
import TattooCardStyled from "./TattooCardStyled";

interface TattooCardProps {
  tattoo: TattooStructure;
}

const TattooCard = ({
  tattoo: { artist, image, style },
}: TattooCardProps): React.ReactElement => {
  return (
    <TattooCardStyled>
      <div className="tattooCard">
        <img
          className="tattooCard__image"
          src={image}
          alt={`${artist}'s tattoo`}
          width="280"
          height="222"
        />
        <div className="tattooCard_toogleFavorite">
          <img
            src="/images/heart-not-favorite.svg"
            alt="toggle favorite tattoo"
            width="30"
            height="30"
          />
        </div>
        <div className="tattooCard__info">
          <span className="tattooCard__data">Tattoo artist: {artist}</span>
          <span className="tattooCard__data">Style: {style}</span>
        </div>
        <div className="tattooCard__icons">
          <a href="/">
            <img
              src="/images/detail-info.svg"
              alt="to taattoo detail page"
              width="30"
              height="30"
            />
          </a>
          <a href="/">
            <img
              src="/images/edit.svg"
              alt="to edit tattoo form"
              width="30"
              height="30"
            />
          </a>
          <a href="/">
            <img
              src="/images/trash-delete.svg"
              alt="delete tattoo"
              width="30"
              height="30"
            />
          </a>
        </div>
      </div>
    </TattooCardStyled>
  );
};

export default TattooCard;
