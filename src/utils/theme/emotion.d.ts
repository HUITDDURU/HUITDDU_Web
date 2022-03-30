import "@emotion/react";
import { Theme as ThemeType } from ".";

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
