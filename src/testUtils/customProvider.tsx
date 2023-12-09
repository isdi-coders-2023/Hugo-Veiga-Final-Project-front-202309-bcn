import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { tattoosReducer } from "../store/features/tattoos/tattoosSlice";
import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "../store/features/ui/uiSlice";
import tattoosMock from "../mocks/tattoosMock";

export const customProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export const getMockedStore = () => {
  const mockedStore = configureStore({
    reducer: { tattoosState: tattoosReducer, uiState: uiReducer },
    preloadedState: {
      tattoosState: { tattoos: tattoosMock },
      uiState: { isLoading: false },
    },
  });

  return mockedStore;
};
