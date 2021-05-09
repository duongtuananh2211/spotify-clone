import { Box, Drawer, makeStyles } from "@material-ui/core";
import React from "react";
import SidebarTabs from "widgets/SidebarTabs";
import style from "./style";

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
          <Box ml={3}>
            <Box className={classes.logo}></Box>
          </Box>
          <SidebarTabs />
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
