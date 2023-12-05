import { screen } from "@testing-library/react";
import customRenderProvider from "../../testUtils/customRenderProvider";
import TattooCard from "./TattooCard";
import tattoosMock from "../../mocks/tattoosMocks";

describe("Given a FriendCard component", () => {
  describe("When is rendered with MissSitas's tattoo data", () => {
    test("Then it should show `MissSita` artist name in a heading", () => {
      const missSitaTattoo = tattoosMock[0];
      const expectedArtistName = tattoosMock[0].artist;

      customRenderProvider(<TattooCard tattoo={missSitaTattoo} />);

      const headingElement = screen.getByRole("heading", {
        name: expectedArtistName,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });

  test("Then it should show MissSita's image", () => {
    const missSitaTattoo = tattoosMock[0];
    const expectedAltText = `${missSitaTattoo.artist}'s tattoo`;

    customRenderProvider(<TattooCard tattoo={missSitaTattoo} />);

    const imageElement = screen.getByAltText(expectedAltText);

    expect(imageElement).toBeInTheDocument();
  });

  test("Then it should show an icon with the alt text `toggle favorite tattoo` ", () => {
    const missSitaTattoo = tattoosMock[0];
    const expectedAltText = `toggle favorite tattoo`;

    customRenderProvider(<TattooCard tattoo={missSitaTattoo} />);

    const imageElement = screen.getByAltText(expectedAltText);

    expect(imageElement).toBeInTheDocument();
  });
});
