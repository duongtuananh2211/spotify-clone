import { createStyles, Theme } from "@material-ui/core";
import { images } from "assets";

const drawerWidth = 240;

const style = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    logo: {
      width: "60%",
      backgroundImage: `url('${images.SPOTIFY_LOGO_FULL_WHITE.default}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      height: 60,
    },
  });

export default style;
