import { screen } from "@testing-library/react";
import Header from "./Header";
import customRenderProvider from "../../testUtils/customRenderProvider";

describe("Given a Header component", () => {
  describe("When is rendered", () => {
    test("Then it should show the text `Inkventory`in a heading", () => {
      const expectedText = "Inkventory";

      customRenderProvider(<Header />);

      const headerText = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(headerText).toBeInTheDocument();
    });
  });
});
