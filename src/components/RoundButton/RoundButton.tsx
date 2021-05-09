import { Button, createStyles, Theme, withStyles } from "@material-ui/core";

const styles = createStyles((theme: Theme) => ({
  root: {
    borderRadius: "50px",
  },
}));

export default withStyles(styles)(Button);
