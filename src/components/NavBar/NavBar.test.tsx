import { screen } from "@testing-library/react";
import Navigation from "./NavBar";
import customRenderProvider from "../../testUtils/customRenderProvider";

describe("Given a NavBar component", () => {
  describe("When is rendered", () => {
    test("Then it should show the text `Tattoos`", () => {
      const expectedText = "Tattoos";

      customRenderProvider(<Navigation />);

      const tattoosNavLink = screen.getByRole("link", {
        name: expectedText,
      });

      expect(tattoosNavLink).toBeInTheDocument();
    });
  });

  test("Then it should show 2 links", async () => {
    const expectedLinkAmount = 2;

    customRenderProvider(<Navigation />);

    const tattoosNavLink = await screen.findAllByRole("link");

    expect(tattoosNavLink).toHaveLength(expectedLinkAmount);
  });
});
