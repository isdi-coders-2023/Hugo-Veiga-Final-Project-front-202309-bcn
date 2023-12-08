import FooterStyled from "./FooterStyled";

const Footer = (): React.ReactElement => {
  return (
    <FooterStyled className="footer">
      <img
        src="/favicon.ico"
        alt="web logo"
        width={25}
        height={25}
        className="footer__logo"
      />
      <span className="footer__info">Copyright © 2023</span>
      <img
        src="/favicon.ico"
        alt="web logo"
        width={25}
        height={25}
        className="footer__logo"
      />
    </FooterStyled>
  );
};

export default Footer;
