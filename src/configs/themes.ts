import { createMuiTheme } from "@material-ui/core";

export const light = createMuiTheme();

export const dark = createMuiTheme({
  spacing: 5,
  palette: {
    background: {
      default: "#F0F0F0",
    },
  },
  typography: {},
  overrides: {},
  shape: {
    borderRadius: 10,
  },
});
