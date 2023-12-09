import { InitialEntry } from "@remix-run/router";
import { MemoryRouter } from "react-router-dom";
import { getMockedStore } from "./customProvider";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "../styles/GlobalStyle";
import { render } from "@testing-library/react";

const customRenderWithMemoryRouter = (
  children: React.ReactElement,
  initialEntries: InitialEntry[] | undefined,
) => {
  const mockedStore = getMockedStore();

  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <Provider store={mockedStore}>
        <ThemeProvider theme={mainTheme}>
          <ToastContainer />
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </Provider>
    </MemoryRouter>,
  );
};

export default customRenderWithMemoryRouter;
