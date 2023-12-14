import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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

    describe("When is rendered and the users clicks the detail icon of `MissSita`'s tattoo", () => {
      test("Then it should render a span with `Email: hello.misssita@gmail.com` text on it", async () => {
        server.use(handlers[3]);
        const expectedSpan = "Email: hello.misssita@gmail.com";

        customRenderProviderWithMemoryRouter(<App />, [
          "/tattoos/6571d83d81f419ec2f6fc543",
        ]);

        const actualSpan = await screen.findByText(expectedSpan);

        await waitFor(() => {
          expect(actualSpan).toHaveTextContent(expectedSpan);
        });
      });
    });

    describe("When is rendered and the users clicks the detail icon of `MissSita`'s tattoo and there is an error laoding the detail page", () => {
      test("Then it should show a feedback message with the text `There was an error getting the tattoo`", async () => {
        server.use(handlersError[3]);
        const expectedMessage = "There was an error getting the tattoo";

        customRenderProviderWithMemoryRouter(<App />, [
          "/tattoos/6571d83d81f419ec2f6fc543",
        ]);

        const actualMessage = await screen.findAllByText(expectedMessage);

        await waitFor(() => {
          expect(actualMessage[0]).toBeInTheDocument();
        });
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

  describe("When it is rendered on the TattoosPage and the user clicks on the `MissSita`'s tattoo and clicks the add button", () => {
    test("Then it should go to the ModifyTattooPage and show a label with `Instagram (url)` on it", async () => {
      const expectedLabel = "Artist";
      const expectedValue = "MissSita";
      const expectedButtonText = "to MissSita's edit tattoo form";

      customRenderProviderWithMemoryRouter(<App />, ["/tattoos"]);

      const button = screen.getByRole("link", {
        name: expectedButtonText,
      });

      await userEvent.click(button);

      const label = await screen.findByRole("textbox", {
        name: expectedLabel,
      });

      await waitFor(() => {
        expect(label).toHaveValue(expectedValue);
      });
    });
  });

  describe("When it is rendered on the ModifyTattooPage and the user changes the email of `MissSita`'s tattoo and clicks the add button", () => {
    test("Then it should modify the `MissSita`'s tattoo and go to TattoosPage", async () => {
      const buttonText = "Add";
      const expectedTitle = "Tattoo List";
      customRenderProviderWithMemoryRouter(<App />, [
        "/modify-tattoo/6571d83d81f419ec2f6fc543",
      ]);

      const button = screen.getByRole("button", { name: buttonText });

      await fireEvent.submit(button);

      const title = await screen.findByRole("heading", {
        name: expectedTitle,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
