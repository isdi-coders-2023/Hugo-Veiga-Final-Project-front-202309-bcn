import { screen, waitFor } from "@testing-library/react";
import customRenderProvider from "../../testUtils/customRenderProvider";
import TattoosPage from "./TattoosPage";
import { server } from "../../mocks/msw/node";
import handlersError from "../../mocks/msw/handlersError";

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

  describe("When TattooPage is rendered and there is an error loading tattoos", () => {
    test("Then it should call toastify with message the'Error loading tattoos'", async () => {
      const expectedTextError = "Error loading tattoos";
      server.use(...handlersError);

      customRenderProvider(<TattoosPage />);

      await waitFor(() => {
        expect(screen.getByText(expectedTextError)).toBeInTheDocument();
      });
    });
  });
});
