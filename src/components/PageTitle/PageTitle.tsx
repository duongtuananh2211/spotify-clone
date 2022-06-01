import { Box, Button, Typography } from "@material-ui/core";
import { NavigateBefore } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";

interface IProps {
  title: string;
  backTo?: string;
}

const PageTitle: React.FC<IProps> = ({ title, backTo = "/" }) => {
  const browerHistory = useHistory();
  return (
    <Box>
      <Button onClick={() => browerHistory.push(backTo)}>
        <NavigateBefore />
        <Typography variant="h6">
          <b>{title.toUpperCase()}</b>
        </Typography>
      </Button>
    </Box>
  );
};

export default PageTitle;
