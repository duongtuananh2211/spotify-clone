import {
  Avatar,
  Box,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@material-ui/core";
import RoundButton from "components/RoundButton";
import React, { useCallback, useState } from "react";
import { useAuth, useUser } from "reactfire";
import firebase from "firebase";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import Fade from "@material-ui/core/Fade";
import { useHistory } from "react-router";

interface IProps {}

const UserMenu: React.FC<IProps> = () => {
  const user = useUser<firebase.User>();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const auth = useAuth();

  const history = useHistory();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const redirectTo = useCallback(
    (path: string) => history.push(path),
    [history]
  );

  const handleSignOut = useCallback(async () => {
    try {
      await auth.signOut();
    } catch (e) {
      alert("Có lỗi xảy ra");
    }
  }, [auth]);

  console.log(user);

  if (!user.data)
    return (
      <RoundButton
        onClick={() => redirectTo("/login")}
        variant="contained"
        color="primary"
      >
        Log In
      </RoundButton>
    );

  return (
    <Box>
      <RoundButton
        onClick={handleClick}
        style={{ padding: 4 }}
        color="primary"
        variant="contained"
      >
        <Avatar
          style={{ width: 30, height: 30, marginRight: 2 }}
          src={user.data.photoURL || ""}
        />{" "}
        <Typography style={{ textTransform: "none" }} variant="body2">
          {user.data.displayName}
        </Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </RoundButton>

      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={handleSignOut} button>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserMenu;
