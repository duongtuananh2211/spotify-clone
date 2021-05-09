import {
  AppBar,
  Box,
  Button,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import RoundButton from "components/RoundButton";
import UserMenu from "components/UserMenu";
import React from "react";

interface IProps {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const HomeHeader: React.FC<IProps> = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} color="primary" position="static">
      <Toolbar>
        <Box flexGrow={1}></Box>
        <Box mr={2}>
          <RoundButton
            onClick={() =>
              window.open("https://github.com/duongtuananh2211/spotify-clone")
            }
            variant="contained"
            color="primary"
          >
            Git Hub
          </RoundButton>
        </Box>
        <UserMenu />
      </Toolbar>
    </AppBar>
  );
};

export default HomeHeader;
