import React from "react";
import "./App.css";
import { Box, Button, CssBaseline, ThemeProvider } from "@material-ui/core";
import * as themes from "configs/themes";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themes["dark"]}>
      <CssBaseline />
      <Box>Hello</Box>
      <Button color="primary" variant="contained">
        Test
      </Button>
    </ThemeProvider>
  );
};

export default App;
