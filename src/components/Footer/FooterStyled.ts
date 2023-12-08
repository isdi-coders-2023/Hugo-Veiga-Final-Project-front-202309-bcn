import styled from "styled-components";

const FooterStyled = styled.footer`
  display: flex;
  padding: 1.2rem 0.75rem;
  align-items: center;
  justify-content: center;
  gap: 10px;

  .footer {
    &__info {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.color.detailDark};
    }

    &__logo {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default FooterStyled;
