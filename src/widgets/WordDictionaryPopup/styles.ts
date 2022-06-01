import { createStyles, makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiDialog-paperFullWidth": {
        height: "100vh",
        width: "100vw",
        margin: 0,
      },
    },
  })
);
