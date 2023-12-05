import { screen } from "@testing-library/react";
import customRenderProvider from "../../testUtils/customRenderProvider";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Loading...' in a span", () => {
      const expectedText = "Loading...";

      customRenderProvider(<Loading />);

      const loadingElement = screen.getByText(expectedText);

      expect(loadingElement).toBeInTheDocument();
    });
  });
});
