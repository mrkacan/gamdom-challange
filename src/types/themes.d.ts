import "styled-components";
import { Theme } from "../styles/themes.ts";

type ThemeInterface = typeof Theme;

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}
