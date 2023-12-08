import { screen } from "@testing-library/react";
import customRenderProvider from "../../testUtils/customRenderProvider";
import AddTattooPage from "./AddTattooPage";

describe("Given an AddTattooPage", () => {
  describe("When is rendered", () => {
    test("Then it should show a heading with the text 'Add a new tattoo'", () => {
      const headingText = "Add a new tattoo";

      customRenderProvider(<AddTattooPage />);

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
