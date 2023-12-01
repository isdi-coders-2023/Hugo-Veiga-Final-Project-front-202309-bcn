import styled from "styled-components";

const TattooCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.secondary};
  box-shadow: 0px 4px 8px 0px rgba(41, 41, 41, 0.08);

  .tattooCard {
    display: flex;
    gap: 10px;
    flex-direction: column;

    &__image {
      border-radius: 10px;
      object-fit: cover;
    }

    &__info {
      padding: 12px;
      display: flex;
      gap: 10px;
      flex-direction: column;
      align-items: flex-start;
    }

    &__data {
      display: flex;
      align-items: start;
      justify-content: center;
    }
  }
`;
export default TattooCardStyled;
