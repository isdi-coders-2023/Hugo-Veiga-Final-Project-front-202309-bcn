import { screen } from "@testing-library/react";
import tattoosMock from "../../data/tattoosData";
import customRenderProvider from "../../testUtils/customRenderProvider";
import TattooList from "./TattooList";

describe("Given a TattooList component", () => {
  describe("When it receives ana array with tattoos", () => {
    test("Then it should the tattoo cards in listitem", () => {
      const expectedTattoosAmount = tattoosMock.length;

      customRenderProvider(<TattooList tattoos={tattoosMock} />);

      const actualTattoosAmount = screen.getAllByRole("listitem").length;

      expect(actualTattoosAmount).toBe(expectedTattoosAmount);
    });
  });
});
