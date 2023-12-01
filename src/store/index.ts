import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { tattoosReducer } from "./features/tattoos/tattoosSlice";

export const store = configureStore({
  reducer: {
    tattoosState: tattoosReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
