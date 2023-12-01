import { render, screen } from "@testing-library/react";
import customRenderProvider from "../../testUtils/customRenderProvider";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Given an App component", () => {
  describe("When is rendered", () => {
    test("Then it should show the the Header component with a heading containing the text `Inkventory`", () => {
      const expectedText = "Inkventory";

      customRenderProvider(<App />);

      const headerText = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(headerText).toBeInTheDocument();
    });
  });

  test("Then it should render `/tattoos`", async () => {
    const expectedPathname = "/tattoos";
    const expectedTattooPageHeading = "Tattoo List";

    render(
      <MemoryRouter initialEntries={[{ pathname: expectedPathname }]}>
        <Provider store={store}>
          <ThemeProvider theme={mainTheme}>
            <App />
          </ThemeProvider>
        </Provider>
      </MemoryRouter>,
    );

    const tattooPageheading = screen.getByRole("heading", {
      name: expectedTattooPageHeading,
    });

    expect(tattooPageheading).toBeInTheDocument();
  });
});
