import HeroStyled from "./HeroStyled";

const Hero = (): React.ReactElement => {
  return (
    <HeroStyled className="hero">
      <div
        className="hero__image"
        aria-label="ink texture hero background image"
      >
        <span className="hero__text">Your own tattoo ideas</span>
      </div>
    </HeroStyled>
  );
};
export default Hero;
