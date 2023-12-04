import { screen } from "@testing-library/react";
import Hero from "./Hero";
import customRenderProvider from "../../testUtils/customRenderProvider";

describe("Given a Hero component", () => {
  describe("When is rendered", () => {
    test("Then it should show the text `Your own tattoo ideas`in a span", () => {
      const expectedText = "Your own tattoo ideas";

      customRenderProvider(<Hero />);

      const heroSpan = screen.getByText(expectedText);

      expect(heroSpan).toHaveTextContent(expectedText);
    });
  });
});
