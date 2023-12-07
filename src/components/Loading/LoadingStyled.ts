import styled from "styled-components";

const LoadingStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  background-color: #f4f4f480;

  .loading__text {
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
  }

  .laoding__spinner {
    width: 96px;
    box-sizing: content-box;
    height: 48px;
    background: ${({ theme }) => theme.color.secondary};
    border-color: ${({ theme }) => theme.color.main};
    border-style: solid;
    border-width: 2px 2px 50px 2px;
    border-radius: 100%;
    position: relative;
    animation: 3s yinYang linear infinite;
  }
  .laoding__spinner:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    background: ${({ theme }) => theme.color.secondary};
    border: 18px solid ${({ theme }) => theme.color.main};
    border-radius: 100%;
    width: 12px;
    height: 12px;
    box-sizing: content-box;
  }
  .laoding__spinner:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    background: ${({ theme }) => theme.color.main};
    border: 18px solid ${({ theme }) => theme.color.secondary};
    border-radius: 100%;
    width: 12px;
    height: 12px;
    box-sizing: content-box;
  }
  @keyframes yinYang {
    100% {
      transform: rotate(360deg);
    }
  }
`;
export default LoadingStyled;
