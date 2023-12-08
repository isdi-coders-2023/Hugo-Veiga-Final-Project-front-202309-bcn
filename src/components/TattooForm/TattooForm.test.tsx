import { screen } from "@testing-library/react";
import TattooForm from "./TattooForm";
import customRenderProvider from "../../testUtils/customRenderProvider";

describe("Given a FormTattoo component", () => {
  describe("When is rendered", () => {
    test("Then it should show the form labels 'artist', 'email', 'instagram (url)', 'city', 'email', 'direction', 'style', 'image (url)', `notes (optional)`", () => {
      const labelTags = [
        "Artist",
        "Email",
        "Instagram (url)",
        "City",
        "Email",
        "Direction (url)",
        "Style",
        "Image",
        "Notes (optional)",
      ];

      customRenderProvider(<TattooForm />);

      labelTags.forEach((labelTag) => {
        const field = screen.getByLabelText(labelTag);
        expect(field).toBeInTheDocument();
      });
    });
  });
});
