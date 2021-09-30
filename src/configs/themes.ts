import { createMuiTheme } from "@material-ui/core";

export const light = createMuiTheme();

export const dark = createMuiTheme({
  spacing: 5,
  palette: {
    background: {
      default: '#D8D8D8'
    }
  },
  typography: {

  },
  overrides: {

  },
  shape: {
    borderRadius: 5,
  },
});
