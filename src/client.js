import React from "react";
import { hydrate } from "react-dom";
import theme from "./theme";
import { MuiThemeProvider } from "material-ui/styles";
import App from "./App";

// This is needed in order to deduplicate the injection of CSS in the page.
const sheetsManager = new WeakMap();

hydrate(
  <MuiThemeProvider sheetsManager={sheetsManager} theme={theme}>
    <App />
  </MuiThemeProvider>
);

if (module.hot) {
  module.hot.accept();
}
