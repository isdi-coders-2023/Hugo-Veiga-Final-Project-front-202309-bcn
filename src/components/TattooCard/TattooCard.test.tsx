import { screen } from "@testing-library/react";
import customRenderProvider from "../../testUtils/customRenderProvider";
import TattooCard from "./TattooCard";
import tattoosMock from "../../data/tattoosData";

describe("Given a FriendCard component", () => {
  describe("When is rendered with MissSitas's tattoo data", () => {
    test("Then it should show MissSita artist name in a span", () => {
      const missSitaTattoo = tattoosMock[0];
      const expectedArtistName = `Tattoo artist: ${tattoosMock[0].artist}`;

      customRenderProvider(<TattooCard tattoo={missSitaTattoo} />);

      const spanElement = screen.getByText(expectedArtistName);

      expect(spanElement).toHaveTextContent(expectedArtistName);
    });
  });

  test("Then it should show MissSita's image", () => {
    const missSitaTattoo = tattoosMock[0];
    const expectedAltText = `${missSitaTattoo.artist}'s tattoo`;

    customRenderProvider(<TattooCard tattoo={missSitaTattoo} />);

    const imageElement = screen.getByAltText(expectedAltText);

    expect(imageElement).toBeInTheDocument();
  });
});