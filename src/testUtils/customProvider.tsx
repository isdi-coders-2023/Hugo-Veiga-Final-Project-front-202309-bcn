import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { tattoosReducer } from "../store/features/tattoos/tattoosSlice";
import tattoosMock from "../mocks/tattoosMock";
import { configureStore } from "@reduxjs/toolkit";

export const customProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export const getMockedStore = () => {
  const mockedStore = configureStore({
    reducer: { tattoosState: tattoosReducer },
    preloadedState: {
      tattoosState: { tattoos: tattoosMock },
    },
  });

  return mockedStore;
};
