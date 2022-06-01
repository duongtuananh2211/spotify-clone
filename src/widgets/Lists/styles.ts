import { makeStyles, createStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiCardContent-root": {
        paddingBottom: 16,
      },

      "& .MuiPaper-root:hover": {
        cursor: "pointer",
        backgroundColor: "gray",
        color: "#fff",
      },
    },
  })
);
