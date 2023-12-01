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
          alt={`Tatuaje de ${artist}`}
          width="280"
          height="222"
        />
        <div className="tattooCard__info">
          <span className="tattooCard__data">Tattoo artist: {artist}</span>
          <span className="tattooCard__data">Style: {style}</span>
        </div>
      </div>
    </TattooCardStyled>
  );
};

export default TattooCard;
