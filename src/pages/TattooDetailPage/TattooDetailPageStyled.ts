import styled from "styled-components";

const TattooDetailPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;

  .tattooDetail-page__notes__wrapper:has(> p:empty) {
    display: none;
  }

  .tattooDetail-page {
    &__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      padding: 1rem;
      gap: 1rem;
    }

    &__image {
      border-radius: 10px;
      height: 100%;
      width: 100%;
    }

    &__info {
      display: flex;
      gap: 10px;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
    }

    &__title {
      font-size: 1.2rem;
      text-transform: uppercase;
    }

    &__data {
      display: flex;
      align-items: start;
      justify-content: flex-start;
      width: 100%;

      &--style {
        text-transform: lowercase;
      }

      &--city {
        text-transform: capitalize;
      }

      &--email {
        text-transform: lowercase;
      }
    }

    &__notes {
      display: flex;
      align-items: start;

      &--wrapper {
        display: flex;
        align-items: start;
        flex-direction: column;
        justify-content: flex-start;
        gap: 0.5rem;
      }

      &--text {
        width: 280px;
        display: flex;
        justify-content: flex-start;
        text-align: start;
        padding-top: 5px;
        text-transform: capitalize;
      }
    }

    &__toogleFavorite {
      display: inline-flex;
    }

    &__icons {
      display: inline-flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      padding-top: 50px;
    }
  }
`;
export default TattooDetailPageStyled;
