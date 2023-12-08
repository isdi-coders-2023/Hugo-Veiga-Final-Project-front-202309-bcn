import { screen } from "@testing-library/react";
import customRenderProvider from "../../testUtils/customRenderProvider";
import TattooList from "./TattooList";
import tattoosMock from "../../mocks/tattoosMock";

describe("Given a TattooList component", () => {
  describe("When it receives ana array with tattoos", () => {
    test("Then it should show a listitem with 'Nissaco' name in a heading", () => {
      const expectedArtistName = tattoosMock[1].artist;
      customRenderProvider(<TattooList />);

      const spanElement = screen.getByRole("heading", {
        name: expectedArtistName,
      });

      expect(spanElement).toBeInTheDocument();
    });
  });
});
