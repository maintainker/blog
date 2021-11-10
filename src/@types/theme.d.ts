import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    children?: any | Element[];
    COLORS: {
      NONE: string;
      TEXT_BASIC: string;
      TEXT_WHITE: string;
      TEXT_PRIMARY: string;
      BG_BODY: string;
      BUTTON_DISABLED: string;
    };
  }
}
