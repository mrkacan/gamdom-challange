import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/themes.ts";
import { themeMode } from "./types/app.type.ts";
import Header from "./components/shared/Header.tsx";
import SportsBetting from "./features/sportsbetting/SportsBetting.tsx";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }

  html {
    background-color: ${(props) => props.theme.background};
  }

  body, html, #root {
    margin: 0;
    height: 100%;
  }
`;

function App() {
  const [mode, setMode] = useState<themeMode>("dark");
  const theme = mode === "light" ? lightTheme : darkTheme;

  const toggleMode = () => {
    setMode((themeMode: themeMode) =>
      themeMode === "light" ? "dark" : "light",
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleMode={toggleMode} themeMode={mode} />
      <SportsBetting />
    </ThemeProvider>
  );
}

export default App;
