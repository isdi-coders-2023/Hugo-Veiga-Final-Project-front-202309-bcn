import { screen } from "@testing-library/react";
import customRenderProvider from "../../testUtils/customRenderProvider";
import TattooList from "./TattooList";
import tattoosMock from "../../mocks/tattoosMocks";

describe("Given a TattooList component", () => {
  describe("When it receives ana array with tattoos", () => {
    test("Then it should show a listitem with 'Nissaco' name in a span", () => {
      const expectedArtistName = `Tattoo artist: ${tattoosMock[1].artist}`;
      customRenderProvider(<TattooList />);

      const spanElement = screen.getByText(expectedArtistName);

      expect(spanElement).toBeInTheDocument();
    });
  });
});
