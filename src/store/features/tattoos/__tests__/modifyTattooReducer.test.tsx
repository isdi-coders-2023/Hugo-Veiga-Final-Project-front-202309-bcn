import tattooModifiedMock from "../../../../mocks/tattooModifiedMock";
import tattoosMock from "../../../../mocks/tattoosMock";
import { modifyTattooActionCreator, tattoosReducer } from "../tattoosSlice";
import { TattooStructure, TattoosStateStructure } from "../types";

describe("Given a tattoosSlice reducer", () => {
  describe("When it receives a tattoos list, an 'MissSita's tattoo and the action modifyTattoo", () => {
    test("Then it should return the list of tattoos with the 'MissSita's tattoo modified", () => {
      const modifiedTattoo = {
        ...tattoosMock[0],
        email: "hello.misssita@hotmail.com",
      };

      const initialState: TattoosStateStructure = {
        tattoos: tattoosMock,
        tattoo: {} as TattooStructure,
      };

      const currentTattooState = tattoosReducer(
        initialState,
        modifyTattooActionCreator(modifiedTattoo),
      );

      expect(currentTattooState.tattoos[0]).toStrictEqual(tattooModifiedMock);
    });
  });
});
