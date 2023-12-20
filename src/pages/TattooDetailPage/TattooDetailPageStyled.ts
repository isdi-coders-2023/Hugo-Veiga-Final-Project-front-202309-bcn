import styled from "styled-components";

const TattooDetailPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding-bottom: 2rem;
  height: 100vh;

  .tattooDetail-page__notes--wrapper:has(> p:empty) {
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
      object-fit: cover;
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
      gap: 5px;

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
        text-transform: lowercase;
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
