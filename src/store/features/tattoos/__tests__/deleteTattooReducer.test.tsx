import tattoosMocks from "../../../../mocks/tattoosMocks";
import { deleteTattooActionCreator, tattoosReducer } from "../tattoosSlice";
import { TattoosStateStructure } from "../types";

describe("Given a tattoosSlice reducer", () => {
  describe("When it receives a list of tattoos with correct id and the action deleteTattoo", () => {
    test("Then it should return the tattoo list without MissSita's tattoo", () => {
      const expectedArtistName = tattoosMocks[0].artist;
      const expectedTattooId = tattoosMocks[0]._id;
      const initialState: TattoosStateStructure = { tattoos: tattoosMocks };

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
