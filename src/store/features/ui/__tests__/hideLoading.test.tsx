import { UiStructure } from "../types";
import { hideLoadingActionCreator, uiReducer } from "../uiSlice";

describe("Given a uiReducer", () => {
  describe("When it receives an initial state with isLoading as false and an hideLoadingActionCreator", () => {
    test("Then it should return the new state with isLoading false", () => {
      const initialState: UiStructure = { isLoading: true };

      const newUiState = uiReducer(initialState, hideLoadingActionCreator());

      expect(newUiState.isLoading).toBeFalsy();
    });
  });
});
