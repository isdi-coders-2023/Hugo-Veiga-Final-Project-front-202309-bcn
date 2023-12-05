import { useAppSelector } from "../../store/hooks";
import TattooCard from "../TattooCard/TattooCard";
import TattooListStyled from "./TattooListStyled";

const TattooList = (): React.ReactElement => {
  const tattoos = useAppSelector((state) => {
    return state.tattoosState.tattoos;
  });

  return (
    <TattooListStyled>
      {tattoos.map((tattoo) => (
        <li key={tattoo._id} className="tattoo-list__list-item">
          <TattooCard tattoo={tattoo} />
        </li>
      ))}
    </TattooListStyled>
  );
};

export default TattooList;
