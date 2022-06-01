import { createStyles, makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiCardContent-root": {
        padding: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },

      "& .MuiPaper-root:hover": {
        backgroundColor: "gray",
        color: "#fff",
      },

      "& .word": {
        fontWeight: 600,
      },
    },
  })
);
