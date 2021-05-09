import { createMuiTheme } from "@material-ui/core";
import { green, grey } from "@material-ui/core/colors";

export const light = createMuiTheme();

export const dark = createMuiTheme({
  spacing: 5,
  palette: {
    background: {
      default: "#212121",
      paper: "#484848",
    },
    secondary: {
      ...green,
      main: "#388e3c",
      light: "#6abf69",
      dark: "#00600f",
      contrastText: "#fff",
    },
    primary: {
      ...grey,
      main: "#424242",
      light: "#6d6d6d",
      dark: "#1b1b1b",
      contrastText: "#fff",
    },
  },
  typography: {
    allVariants: {
      color: "#fff",
    },
  },
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: "#1b1b1b",
      },
    },
  },
  shape: {
    borderRadius: 5,
  },
});
