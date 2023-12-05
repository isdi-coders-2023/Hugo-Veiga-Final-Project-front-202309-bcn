import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled className="loading">
      <span className="laoding__spinner"></span>
      <span className="loading__text">Loading ...</span>
    </LoadingStyled>
  );
};

export default Loading;
