import { createStyles, Theme } from "@material-ui/core";
import { images } from "assets";

const style = (theme: Theme) =>
  createStyles({
    logo: {
      backgroundImage: `url("${images.SPOTIFY_LOGO_FULL_BLACK.default}")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      height: "100%",
      width: 200,
    },
  });

export default style;
