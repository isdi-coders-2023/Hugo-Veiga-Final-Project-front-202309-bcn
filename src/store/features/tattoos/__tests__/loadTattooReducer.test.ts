import tattoosMock from "../../../../mocks/tattoosMock";
import { loadTattooActionCreator, tattoosReducer } from "../tattoosSlice";
import { TattoosStateStructure } from "../types";

describe("Given a tattoosSlice reducer", () => {
  describe("When it receives and empty state of a tattoo and load tattoo action with `MissSita's tattoo data", () => {
    test("Then it should return a new state with `MissSita's tattoo data ", () => {
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
