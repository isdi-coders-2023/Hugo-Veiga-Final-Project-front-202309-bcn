import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store";
import { tattoosReducer } from "../store/features/tattoos/tattoosSlice";
import tattoosMock from "../mocks/tattoosMocks";
import { configureStore } from "@reduxjs/toolkit";

export const customProvider = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
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
