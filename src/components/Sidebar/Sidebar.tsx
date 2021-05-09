import {
  Box,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import SidebarListItem from "components/SidebarListItem";
import React from "react";
import style from "./style";

import { Home as HomeIcon } from "@material-ui/icons";

const useStyles = makeStyles(style);

interface IProps {}

const Sidebar: React.FC<IProps> = () => {
  const classes = useStyles();
  return (
    <>
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="permanent"
        open
      >
        <Box m={2}>
          <Box className={classes.logo}></Box>

          <List>
            <SidebarListItem selected button>
              <ListItemIcon color="primary">
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </SidebarListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
