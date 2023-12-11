import tattoosMock from "../../../../mocks/tattoosMock";
import { loadTattooActionCreator, tattoosReducer } from "../tattoosSlice";
import { TattoosStateStructure } from "../types";

describe("Given a tattoosSlice reducer", () => {
  describe("When it receives and empty state of selected and load selected bike action with the bike 'Orbea Orca M31ETEAM 23'", () => {
    test("Then it should return the new state with the bike 'Orbea Orca M31ETEAM 23'", () => {
      const initialState: TattoosStateStructure = {
        tattoos: tattoosMock,
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

      const expectedNewState: TattoosStateStructure = {
        tattoos: tattoosMock,
        tattoo: tattoosMock[0],
      };

      const loadTattooAction = loadTattooActionCreator(tattoosMock[0]);

      const newState: TattoosStateStructure = tattoosReducer(
        initialState,
        loadTattooAction,
      );

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});
