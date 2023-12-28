import styled from "styled-components";

const ModifyTattooPageSTyled = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin-right: 1rem;
  margin-left: 1rem;
  align-items: center;
  padding-bottom: 4rem;

  .modifyTattoo-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 2rem;

    &__title {
      font-size: 1.2rem;
      text-align: center;
      padding: 1.2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-weight: 600;

      @media (min-width: 1000px) {
        font-size: 1.4rem;
      }
    }
  }
`;

export default ModifyTattooPageSTyled;
