import tattoosMocks from "../../../../mocks/tattoosMock";
import { deleteTattooActionCreator, tattoosReducer } from "../tattoosSlice";
import { TattoosStateStructure } from "../types";

describe("Given a tattoosSlice reducer", () => {
  describe("When it receives a list of tattoos with correct id and the action deleteTattoo", () => {
    test("Then it should return the tattoo list without MissSita's tattoo", () => {
      const expectedArtistName = tattoosMocks[0].artist;
      const expectedTattooId = tattoosMocks[0]._id;
      const initialState: TattoosStateStructure = {
        tattoos: tattoosMocks,
        tattoo: {
          _id: "",
          artist: "",
          email: "",
          instagram: "",
          city: "",
          direction: "",
          style: "",
          image: "",
          notes: "",
          isFavorite: false,
        },
      };

      const currentTattoosState = tattoosReducer(
        initialState,
        deleteTattooActionCreator(expectedTattooId),
      );

      currentTattoosState.tattoos.forEach((tattoo) =>
        expect(tattoo).not.toHaveProperty("name", expectedArtistName),
      );
    });
  });
});
