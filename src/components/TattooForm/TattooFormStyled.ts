import styled from "styled-components";

const TattooFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  gap: 1.8rem;
  padding: 20px;
  max-width: 600px;

  .tattoo-form {
    &__control {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      font-size: 1rem;
    }

    &__input {
      border-radius: 8px;
      border: 1.5px solid ${({ theme }) => theme.color.detailDark};
      height: 100%;
      padding: 10px;
      width: 250px;
      color: ${({ theme }) => theme.color.main};
    }

    &__text-area {
      border-radius: 8px;
      border: 1.5px solid ${({ theme }) => theme.color.detailDark};
      height: 100%;
      width: 250px;
      padding: 10px;
      color: ${({ theme }) => theme.color.main};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-self: stretch;
      resize: none;
    }
  }
`;

export default TattooFormStyled;
