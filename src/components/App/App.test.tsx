import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import { Provider } from "react-redux";
import { store } from "../../store";
import tattooMockWithoutId from "../../mocks/tattooMockWithoutId";
import userEvent from "@testing-library/user-event";
import customRenderProviderWithMemoryRouter from "../../testUtils/customRenderProviderMemoryRouter";
import { server } from "../../mocks/msw/node";
import { handlers } from "../../mocks/msw/handlers";
import customRenderProvider from "../../testUtils/customRenderProvider";
import handlersError from "../../mocks/msw/handlersError";

describe("Given an App component", () => {
  describe("When is rendered", () => {
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

    describe("When is rendered and the users clicks the detail icon of `MissSita`'s tattoo and there is an error loading the detail page", () => {
      test("Then it should render a feedback message with `to MissSita's tattoo detail page`", async () => {
        server.use(handlersError[3]);
        const detailButtonName = `to MissSita's tattoo detail page`;
        const expectedFeedbackMessage = "There was an error getting the tattoo";

        customRenderProvider(<App />);

        const actualDetailButton = screen.getByRole("link", {
          name: detailButtonName,
        });

        await userEvent.click(actualDetailButton);

        const actualFeedbackMessage = await screen.findAllByText(
          expectedFeedbackMessage,
        );
        await waitFor(() => {
          expect(actualFeedbackMessage[0]).toBeInTheDocument();
        });
      });
    });

    describe("When is rendered and the users clicks the detail icon of `MissSita`'s tattoo", () => {
      test("Then it should render a heading with `MissSita` text on it", async () => {
        server.use(...handlers);
        const expectedHeading = "MissSita";

        customRenderProvider(<App />);

        const actualHeading = screen.getByText(expectedHeading);

        await waitFor(() => {
          expect(actualHeading).toBeInTheDocument();
        });
      });
    });

    describe("When it is rendered with all TattooForm fields completed and the add button is clicked", () => {
      test("Then it should call onSubmit function", async () => {
        server.use(...handlers);
        const expectedFeedback = "The tattoo has been created succesfully!";
        const labelTags = [
          "Artist",
          "Email",
          "Instagram (url)",
          "City",
          "Direction (url)",
          "Style",
          "Image (url)",
          "Notes (optional)",
        ];

        customRenderProviderWithMemoryRouter(<App />, ["/add-tattoo"]);

        const artistInput = screen.getByLabelText(labelTags[0]);
        const emailInput = screen.getByLabelText(labelTags[1]);
        const instagramInput = screen.getByLabelText(labelTags[2]);
        const cityInput = screen.getByLabelText(labelTags[3]);
        const directionInput = screen.getByLabelText(labelTags[4]);
        const styleInput = screen.getByLabelText(labelTags[5]);
        const imageInput = screen.getByLabelText(labelTags[6]);
        const notesInput = screen.getByLabelText(labelTags[6]);

        const buttonName = "Add";
        const buttonElement = screen.getByRole("button", { name: buttonName });

        const artist = tattooMockWithoutId[0].artist;
        const email = tattooMockWithoutId[0].email;
        const instagram = tattooMockWithoutId[0].instagram;
        const city = tattooMockWithoutId[0].city;
        const direction = tattooMockWithoutId[0].direction;
        const style = tattooMockWithoutId[0].style;
        const image = tattooMockWithoutId[0].image;
        const notes = tattooMockWithoutId[0].notes;

        await userEvent.type(artistInput, artist);
        await userEvent.type(emailInput, email);
        await userEvent.type(instagramInput, instagram);
        await userEvent.type(cityInput, city);
        await userEvent.type(directionInput, direction);
        await userEvent.type(styleInput, style);
        await userEvent.type(imageInput, image);
        await userEvent.type(notesInput, notes);

        await userEvent.click(buttonElement);

        const actualMessages = await screen.getAllByText(expectedFeedback);

        expect(actualMessages[0]).toBeInTheDocument();
      });
    });
  });
});
