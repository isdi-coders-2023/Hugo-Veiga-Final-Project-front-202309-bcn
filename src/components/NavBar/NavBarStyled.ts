import styled from "styled-components";

const NavBarStyled = styled.nav`
  .navbar {
    display: flex;
    gap: 8px;
    color: ${({ theme }) => theme.color.detail};
  }

  .active {
    color: ${({ theme }) => theme.color.main};
  }
`;

export default NavBarStyled;
