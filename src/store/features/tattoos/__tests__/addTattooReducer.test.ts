import tattoosMock from "../../../../mocks/tattoosMock";
import { addTattooActionCreator, tattoosReducer } from "../tattoosSlice";
import { TattoosStateStructure } from "../types";

describe("Given a tattoosSlice reducer", () => {
  describe("When it receives a tattoo list with the action to add a new tattoo", () => {
    test("Then it should return a list of tattoo with the new tattoo", () => {
      const initialState: TattoosStateStructure = {
        tattoos: tattoosMock,
      };

      const expectedNewTattoosState: TattoosStateStructure = {
        tattoos: [...tattoosMock, tattoosMock[0]],
      };

      const addTattooAction = addTattooActionCreator(tattoosMock[0]);
      const newState: TattoosStateStructure = tattoosReducer(
        initialState,
        addTattooAction,
      );

      expect(newState).toStrictEqual(expectedNewTattoosState);
    });
  });
});
