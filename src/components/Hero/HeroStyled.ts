import styled from "styled-components";

const HeroStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url("/images/hero.webp");
  height: 100vh;
  align-self: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  align-items: center;
  justify-content: center;

  .hero {
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
