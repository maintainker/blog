import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./style/theme";
import ResetCss from "./style/reset";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={LightTheme}>
      <ResetCss />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

reportWebVitals();
