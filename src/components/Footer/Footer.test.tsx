import { screen } from "@testing-library/react";
import customRenderProvider from "../../testUtils/customRenderProvider";
import Footer from "./Footer";

describe("Given a Footer component", () => {
  describe("When is rendered", () => {
    test("Then it should show the text `Copyright © 2023`in a footer", () => {
      const expectedText = "Copyright © 2023";

      customRenderProvider(<Footer />);

      const footerElement = screen.getByText(expectedText);

      expect(footerElement).toBeInTheDocument();
    });
  });
});
