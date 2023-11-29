import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      main: string;
      secondary: string;
      detail: string;
      detailDark: string;
      detailLight: string;
    };

    typography: {
      mainFont: string;
    };
  }
}
