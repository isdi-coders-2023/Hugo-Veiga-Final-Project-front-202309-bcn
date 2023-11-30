import styled from "styled-components";

const HeroStyled = styled.div`
  .hero {
    &__image {
      display: flex;
      flex-direction: column;
      background-image: url("public/images/hero.webp");
      height: 100vh;
      width: 100vw;
      align-self: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      align-items: center;
      justify-content: center;
    }

    &__text {
      font-size: 2rem;
      text-align: start;
      color: ${({ theme }) => theme.color.secondary};
      text-transform: uppercase;
      line-height: 3rem;
      padding: 2rem;
    }
  }
`;
export default HeroStyled;
