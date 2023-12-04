import { TattooStructure } from "../../store/features/tattoos/types";
import TattooCard from "../TattooCard/TattooCard";
import TattooListStyled from "./TattooListStyled";

interface TattooListProps {
  tattoos: TattooStructure[];
}

const TattooList = ({ tattoos }: TattooListProps): React.ReactElement => {
  return (
    <TattooListStyled>
      {tattoos.map((tattoo) => (
        <li key={tattoo.id}>
          <TattooCard tattoo={tattoo} />
        </li>
      ))}
    </TattooListStyled>
  );
};

export default TattooList;
