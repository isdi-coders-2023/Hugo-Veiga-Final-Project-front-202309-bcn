import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import GlobalStyle from "../styles/GlobalStyle";
import { getMockedStore } from "./customProvider";

const customRenderProvider = (children: React.ReactElement) => {
  const mockedStore = getMockedStore();

  return render(
    <BrowserRouter>
      <Provider store={mockedStore}>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </Provider>
    </BrowserRouter>,
  );
};
export default customRenderProvider;
