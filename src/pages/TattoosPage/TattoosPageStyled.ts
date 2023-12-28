import styled from "styled-components";

const TattoosPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-bottom: 6rem;
  padding-top: 3rem;

  .tattoos-page {
    &__title {
      font-size: 1.2rem;
      text-align: center;
      padding-top: 2rem;
      padding-bottom: 2rem;
      font-weight: 600;

      @media (min-width: 1000px) {
        font-size: 1.4rem;
      }
    }
  }
`;
export default TattoosPageStyled;
