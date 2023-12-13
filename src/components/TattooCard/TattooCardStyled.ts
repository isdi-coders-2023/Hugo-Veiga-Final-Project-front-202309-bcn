import styled from "styled-components";

const TattooCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.secondary};
  box-shadow: 0px 4px 8px 0px rgba(41, 41, 41, 0.08);
  padding-bottom: 1rem;

  .tattooCard {
    display: flex;
    gap: 1.2rem;
    flex-direction: column;

    &__image {
      border-radius: 10px;
      object-fit: cover;

      &__wrapper {
        min-width: 280px;
      }
    }

    &__info {
      padding: 0 12px;
      display: flex;
      gap: 10px;
      flex-direction: column;
      align-items: flex-start;
    }

    &__title {
      font-size: 1.2rem;
      text-transform: capitalize;
    }

    &__data {
      display: flex;
      align-items: start;
      justify-content: center;
      text-transform: lowercase;
    }

    &__toogleFavorite {
      display: inline-flex;
    }

    &__icons {
      display: inline-flex;
      justify-content: space-around;
      align-items: center;
      padding-top: 10px;
    }
  }
`;
export default TattooCardStyled;
