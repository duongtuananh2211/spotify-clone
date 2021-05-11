import { Box } from "@material-ui/core";
import Footer from "components/Footer";
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

      <Footer />
    </>
  );
};

export default DefaultLayout;
