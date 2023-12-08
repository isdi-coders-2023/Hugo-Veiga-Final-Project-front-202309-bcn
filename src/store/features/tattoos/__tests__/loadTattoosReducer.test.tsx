import tattoosMock from "../../../../mocks/tattoosMock";
import { loadTattoosActionCreator, tattoosReducer } from "../tattoosSlice";
import { TattoosStateStructure, TattooStructure } from "../types";

describe("Given a tattoosSlice reducer", () => {
  describe("When it receives an empty tattooState and an action to load tattooos", () => {
    test("Then it should return a new state with tattoos data on it", () => {
      const emptyState: TattooStructure[] = [];

      const currentTattoosState: TattoosStateStructure = {
        tattoos: emptyState,
      };

      const loadTattoosAction = loadTattoosActionCreator(tattoosMock);

      const expectedNewTattoosState: TattoosStateStructure = {
        ...currentTattoosState,
        tattoos: tattoosMock,
      };

      const newState: TattoosStateStructure = tattoosReducer(
        currentTattoosState,
        loadTattoosAction,
      );

      expect(expectedNewTattoosState).toStrictEqual(newState);
    });
  });
});
