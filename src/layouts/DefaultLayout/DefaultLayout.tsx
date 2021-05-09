import { Box } from "@material-ui/core";
import Sidebar from "components/Sidebar";
import React from "react";

interface IProps {}

const DefaultLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Sidebar />

      <Box style={{ marginLeft: 240 }}>{children}</Box>
    </>
  );
};

export default DefaultLayout;
