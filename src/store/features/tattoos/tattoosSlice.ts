import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TattoosStateStructure, TattooStructure } from "./types";

const initialTattoosState: TattoosStateStructure = {
  tattoos: [],
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

    addTattoo: (
      currentState,
      action: PayloadAction<TattooStructure>,
    ): TattoosStateStructure => ({
      ...currentState,
      tattoos: [...currentState.tattoos, action.payload],
    }),

    loadTattoo: (
      currentState,
      action: PayloadAction<TattooStructure>,
    ): TattoosStateStructure => ({
      ...currentState,
      tattoo: action.payload,
    }),
  },
});

export const {
  loadTattoos: loadTattoosActionCreator,
  deleteTattoo: deleteTattooActionCreator,
  addTattoo: addTattooActionCreator,
  loadTattoo: loadTattooActionCreator,
} = tattoosSlice.actions;
export const tattoosReducer = tattoosSlice.reducer;
