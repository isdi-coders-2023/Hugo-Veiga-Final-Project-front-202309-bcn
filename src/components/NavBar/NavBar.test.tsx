import { screen } from "@testing-library/react";
import Navigation from "./NavBar";
import customRenderProvider from "../../testUtils/customRenderProvider";

describe("Given a NavBar component", () => {
  describe("When is rendered", () => {
    test("Then it should show the text `Tattoos`", () => {
      const expectedText = "Tattoos";
      const expectedAccesibelName = "to tattoos";

      customRenderProvider(<Navigation />);

      const tattoosNavLink = screen.getByRole("link", {
        name: expectedAccesibelName,
      });

      expect(tattoosNavLink).toHaveTextContent(expectedText);
    });
  });

  test("Then it should be a link with the path `/tattoos`", () => {
    const expectedPath = "/tattoos";
    const expectedAccesibleName = "to tattoos";

    customRenderProvider(<Navigation />);

    const tattoosNavLink = screen.getByRole("link", {
      name: expectedAccesibleName,
    });

    expect(tattoosNavLink).toHaveAttribute("href", expectedPath);
  });

  test("Then it should show 2 links", async () => {
    const expectedLinkAmount = 2;

    customRenderProvider(<Navigation />);

    const tattoosNavLink = await screen.findAllByRole("link");

    expect(tattoosNavLink).toHaveLength(expectedLinkAmount);
  });
});
