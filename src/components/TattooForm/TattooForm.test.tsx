import { fireEvent, screen } from "@testing-library/react";
import TattooForm from "./TattooForm";
import customRenderProvider from "../../testUtils/customRenderProvider";
import userEvent from "@testing-library/user-event";
import tattooMockWithoutId from "../../mocks/tattooMockWithoutId";

describe("Given a FormTattoo component", () => {
  const onSubmitMock = vi.fn();
  describe("When is rendered", () => {
    test("Then it should show the form labels 'artist', 'email', 'instagram (url)', 'city', 'email', 'direction', 'style', 'image (url)', `notes (optional)`", () => {
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

      customRenderProvider(<TattooForm onSubmit={onSubmitMock} />);

      labelTags.forEach((labelTag) => {
        const field = screen.getByLabelText(labelTag);
        expect(field).toBeInTheDocument();
      });
    });

    describe("When it is rendered and the add button is clicked", () => {
      test("Then it should call its onSubmit function", async () => {
        customRenderProvider(<TattooForm onSubmit={onSubmitMock} />);

        const tattooForm = screen.getByLabelText("Artist");
        const addButton = screen.getByRole("button", {
          name: "Add",
        });

        await userEvent.click(addButton);

        fireEvent.submit(tattooForm);

        expect(onSubmitMock).toHaveBeenCalled();
      });
    });
    test("Then it should show a button with the text 'Add' inside", () => {
      const expectedTextButton = "Add";

      customRenderProvider(<TattooForm onSubmit={onSubmitMock} />);

      const button = screen.getByText(expectedTextButton);

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is rendered with all TattooForm fields completed and the add button is clicked", () => {
    test("Then it should call onSubmit function", async () => {
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

      customRenderProvider(<TattooForm onSubmit={onSubmitMock} />);

      const artistInput = screen.getByLabelText(labelTags[0]);
      const emailInput = screen.getByLabelText(labelTags[1]);
      const instagramInput = screen.getByLabelText(labelTags[2]);
      const cityInput = screen.getByLabelText(labelTags[3]);
      const directionInput = screen.getByLabelText(labelTags[4]);
      const styleInput = screen.getByLabelText(labelTags[5]);
      const imageInput = screen.getByLabelText(labelTags[6]);
      const notesInput = screen.getByLabelText(labelTags[7]);

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

      expect(onSubmitMock).toHaveBeenCalled();
    });
  });
});
