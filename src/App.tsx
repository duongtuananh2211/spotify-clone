import React from "react";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import * as themes from "configs/themes";
import { BrowserRouter as Router } from "react-router-dom";
import routings from "routing";
import RouteProvider from "providers/RouteProvider";
import RouterView from "components/RouterView";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themes["dark"]}>
      <CssBaseline />
      <Router>
        <RouteProvider routes={routings}>
          <RouterView />
        </RouteProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
