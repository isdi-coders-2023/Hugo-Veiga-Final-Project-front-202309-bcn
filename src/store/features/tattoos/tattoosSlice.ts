import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TattoosStateStructure, TattooStructure } from "./types";

const initialTattoosState: TattoosStateStructure = {
  tattoos: [],
};

const tattoosSlice = createSlice({
  name: "tattoos",
  initialState: initialTattoosState,
  reducers: {
    loadTattoos: (
      currentState,
      action: PayloadAction<TattooStructure[]>,
    ): TattoosStateStructure => {
      return { ...currentState, tattoos: action.payload };
    },

    deleteTattoo: (currentState, action: PayloadAction<string>) => ({
      ...currentState,
      tattoos: currentState.tattoos.filter(
        (tattoo) => tattoo._id !== action.payload,
      ),
    }),
  },
});

export const {
  loadTattoos: loadTattoosActionCreator,
  deleteTattoo: deleteTattooActionCreator,
} = tattoosSlice.actions;
export const tattoosReducer = tattoosSlice.reducer;
