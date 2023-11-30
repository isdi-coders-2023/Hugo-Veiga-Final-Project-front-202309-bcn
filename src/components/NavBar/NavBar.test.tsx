import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import Navigation from "./NavBar";

describe("Given a NavBar component", () => {
  describe("When is rendered", () => {
    test("Then it should show the text `Tattoos`", () => {
      const expectedText = "Tattoos";
      const expectedAccesibelName = "to tattoos";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Navigation />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const tattoosNavLink = screen.getByRole("link", {
        name: expectedAccesibelName,
      });

      expect(tattoosNavLink).toHaveTextContent(expectedText);
    });
  });

  test("Then it should be a link with the path `/tattoos`", () => {
    const expectedPath = "/tattoos";
    const expectedAccesibleName = "to tattoos";

    render(
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          <Navigation />
        </ThemeProvider>
      </BrowserRouter>,
    );

    const tattoosNavLink = screen.getByRole("link", {
      name: expectedAccesibleName,
    });

    expect(tattoosNavLink).toHaveAttribute("href", expectedPath);
  });

  test("Then it should show 2 links", async () => {
    const expectedLinkAmount = 2;

    render(
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          <Navigation />
        </ThemeProvider>
      </BrowserRouter>,
    );

    const tattoosNavLink = await screen.findAllByRole("link");

    expect(tattoosNavLink).toHaveLength(expectedLinkAmount);
  });
});
