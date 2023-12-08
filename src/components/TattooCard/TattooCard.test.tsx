import { screen, waitFor } from "@testing-library/react";
import customRenderProvider from "../../testUtils/customRenderProvider";
import TattooCard from "./TattooCard";
import tattoosMock from "../../mocks/tattoosMock";
import userEvent from "@testing-library/user-event";
import { server } from "../../mocks/msw/node";
import handlersError from "../../mocks/msw/handlersError";

describe("Given a FriendCard component", () => {
  describe("When is rendered with MissSitas's tattoo data", () => {
    test("Then it should show `MissSita` artist name in a heading", () => {
      const missSitaTattoo = tattoosMock[0];
      const expectedArtistName = tattoosMock[0].artist;

      customRenderProvider(<TattooCard tattoo={missSitaTattoo} />);

      const headingElement = screen.getByRole("heading", {
        name: expectedArtistName,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });

  test("Then it should show MissSita's image", () => {
    const missSitaTattoo = tattoosMock[0];
    const expectedAltText = `${missSitaTattoo.artist}'s tattoo`;

    customRenderProvider(<TattooCard tattoo={missSitaTattoo} />);

    const imageElement = screen.getByAltText(expectedAltText);

    expect(imageElement).toBeInTheDocument();
  });

  test("Then it should show an icon with the alt text `toggle favorite tattoo` ", () => {
    const missSitaTattoo = tattoosMock[0];
    const expectedAltText = `toggle favorite tattoo`;

    customRenderProvider(<TattooCard tattoo={missSitaTattoo} />);

    const imageElement = screen.getByAltText(expectedAltText);

    expect(imageElement).toBeInTheDocument();
  });
});

describe("When the delete button is clicked on 'MissSita' tattoo card", () => {
  test("Then it should show a feedback message 'Tattoo deleted succesfully!'", async () => {
    const missSitaTattoo = tattoosMock[0];
    const expectedFeedbackMessage = "Tattoo deleted succesfully!";
    const expectedButtonText = "delete tattoo";

    customRenderProvider(<TattooCard tattoo={missSitaTattoo} />);

    const button = screen.getByRole("button", { name: expectedButtonText });

    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(expectedFeedbackMessage)).toBeInTheDocument();
    });
  });

  describe("When the delete button is clicked on 'MissSita' tattoo card and there is an error deleting the tattoo", () => {
    test("Then it should show a feedback message 'There was an error deleting the tattoo'", async () => {
      server.use(...handlersError);

      const missSitaTattoo = tattoosMock[0];
      const expectedFeedbackMessage = "There was an error deleting the tattoo";
      const expectedButtonText = "delete tattoo";

      customRenderProvider(<TattooCard tattoo={missSitaTattoo} />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      await waitFor(() => {
        expect(screen.getByText(expectedFeedbackMessage)).toBeInTheDocument();
      });
    });
  });
});
