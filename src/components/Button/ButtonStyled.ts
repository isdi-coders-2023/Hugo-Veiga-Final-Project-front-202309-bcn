import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 4px;
  color: ${({ theme }) => theme.color.secondary};
  background-color: ${({ theme }) => theme.color.main};

  &:disabled {
    color: ${({ theme }) => theme.color.detailDark};
    background-color: ${({ theme }) => theme.color.detailLight};
  }
`;

export default StyledButton;
