import styled from "styled-components";

const TattooListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-right: 1rem;
  padding-left: 1rem;
  align-items: center;

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4rem;
  }
`;

export default TattooListStyled;
