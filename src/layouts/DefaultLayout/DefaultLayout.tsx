import { Box } from "@material-ui/core";
import RouterView from "components/RouterView";
import Sidebar from "components/Sidebar";
import React from "react";

interface IProps {}

const DefaultLayout: React.FC<IProps> = () => {
  return (
    <>
      <Sidebar />

      <Box style={{ marginLeft: 240 }}>
        <RouterView></RouterView>
      </Box>
    </>
  );
};

export default DefaultLayout;
