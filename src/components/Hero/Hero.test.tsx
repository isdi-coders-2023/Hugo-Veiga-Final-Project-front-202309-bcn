import { screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import Hero from "./Hero";
import customRenderProvider from "../../testUtils/customRenderProvider";

describe("Given a Hero component", () => {
  describe("When is rendered", () => {
    test("Then it should show the text `Your own tattoo ideas`in a span", () => {
      const expectedText = "Your own tattoo ideas";

      customRenderProvider(<Hero />);

      const heroSpan = screen.getByText(expectedText);

      expect(heroSpan).toHaveTextContent(expectedText);
    });
  });

  test("Then it should show the background image in a div", () => {
    const accesibleNameDiv = "ink texture hero background image";
    const expectedBackgroundImageUrl = "public/images/hero.webp";

    customRenderProvider(
      <ThemeProvider theme={mainTheme}>
        <Hero />
      </ThemeProvider>,
    );

    const heroSpan = screen.getByLabelText(accesibleNameDiv);

    expect(heroSpan).toHaveStyle(
      `background-image: url(${expectedBackgroundImageUrl})`,
    );
  });
});
