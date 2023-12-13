import { screen } from "@testing-library/react";
import ModifyTattooPage from "./ModifyTattooPage";
import customRenderProvider from "../../testUtils/customRenderProvider";

describe("Given a ModifyTattooPage page", () => {
  describe("When is rendered", () => {
    test("Then it should show a heading with the text 'Modify your tattoo:'", () => {
      const modifyTattooPageHeadingText = "Modify tattoo";

      customRenderProvider(<ModifyTattooPage />);

      const modifyTattooPageHeading = screen.getByRole("heading", {
        name: modifyTattooPageHeadingText,
      });

      expect(modifyTattooPageHeading).toBeInTheDocument();
    });

    test("Then it should show a form with a 'Direction (url)' text in a label ", () => {
      const expectedLabelText = "Direction (url)";

      customRenderProvider(<ModifyTattooPage />);

      const labelText = screen.getByLabelText(expectedLabelText);

      expect(labelText).toBeInTheDocument();
    });
  });
});
