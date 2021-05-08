import { createMuiTheme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

export const light = createMuiTheme();

export const dark = createMuiTheme({
  spacing: 5,
  palette: {
    background: {
      default: "#212121",
      paper: "#484848",
    },
    primary: {
      ...green,
      main: "#388e3c",
      light: "#6abf69",
      dark: "#00600f",
      contrastText: "#fff",
    },
  },
  typography: {
    allVariants: {
      color: "#fff",
    },
  },
});
