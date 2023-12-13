import { screen } from "@testing-library/react";
import TattooDetailPage from "./TattooDetailPage";
import tattoosMock from "../../mocks/tattoosMock";
import customRenderProviderWithMemoryRouter from "../../testUtils/customRenderProviderMemoryRouter";

describe("Given an TattooDetailPage", () => {
  describe("When is rendered with a valid id", () => {
    const expectedTattooId = tattoosMock[0]._id;
    const path = `/${expectedTattooId}`;
    test("Then it should show a heading with the tattoo artist name in a heading", () => {
      const expectedTitle = tattoosMock[0].artist;

      customRenderProviderWithMemoryRouter(<TattooDetailPage />, [path]);

      const heading = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show the tattoo image", () => {
      const expectedImageAlt = `${tattoosMock[0].artist}'s tattoo`;

      customRenderProviderWithMemoryRouter(<TattooDetailPage />, [path]);

      const actualImage = screen.getByAltText(expectedImageAlt);

      expect(actualImage).toBeInTheDocument();
    });

    test("Then it should show an icon with link to tattoo's instagram url", () => {
      const expectedInstagram = tattoosMock[0].instagram;
      const expectedAlt = "to tattoo artist instagram";
      customRenderProviderWithMemoryRouter(<TattooDetailPage />, [path]);

      const actualInstagramSpan = screen.getByRole("link", {
        name: expectedAlt,
      });

      expect(actualInstagramSpan).toHaveAttribute("href", expectedInstagram);
      expect(actualInstagramSpan).toBeInTheDocument();
    });

    test("Then it should show an icon with link to tattoo's direction url", () => {
      const expectedDirection = tattoosMock[0].direction;
      const expectedAlt = "to tattoo shop ubication";

      customRenderProviderWithMemoryRouter(<TattooDetailPage />, [path]);

      const actualDirectionSpan = screen.getByRole("link", {
        name: expectedAlt,
      });

      expect(actualDirectionSpan).toHaveAttribute("href", expectedDirection);
      expect(actualDirectionSpan).toBeInTheDocument();
    });
  });
});
