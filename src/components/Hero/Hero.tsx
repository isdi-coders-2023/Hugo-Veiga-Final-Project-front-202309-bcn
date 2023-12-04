import HeroStyled from "./HeroStyled";

const Hero = (): React.ReactElement => {
  return (
    <HeroStyled className="hero">
      <span className="hero__text">Your own tattoo ideas</span>
    </HeroStyled>
  );
};
export default Hero;
