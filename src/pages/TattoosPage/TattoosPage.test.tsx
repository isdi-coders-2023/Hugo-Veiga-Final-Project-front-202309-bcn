import { screen } from "@testing-library/react";
import customRenderProvider from "../../testUtils/customRenderProvider";
import TattoosPage from "./TattoosPage";

describe("Given a TattoosPage component", () => {
  describe("When is rendered", () => {
    test("Then it should show a heading containing the text `Tattoo List`", () => {
      const expectedHeadingText = "Tattoo List";

      customRenderProvider(<TattoosPage />);

      const headingText = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(headingText).toBeInTheDocument();
    });
  });
});
