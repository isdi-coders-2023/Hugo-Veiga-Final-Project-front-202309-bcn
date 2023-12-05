import { UiStructure } from "../types";
import { showLoadingActionCreator, uiReducer } from "../uiSlice";

describe("Given a uiReducer", () => {
  describe("When it receives an initial state with isLoading as false and an showLoadingActionCreator", () => {
    test("Then it should return the new state with isLoading as true", () => {
      const initialState: UiStructure = { isLoading: false };

      const newUiState = uiReducer(initialState, showLoadingActionCreator());

      expect(newUiState.isLoading).toBeTruthy();
    });
  });
});
