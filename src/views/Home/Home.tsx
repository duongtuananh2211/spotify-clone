import React from "react";
import { useUser } from "reactfire";
import { useHistory } from "react-router";
import { Box } from "@material-ui/core";
import Lists from "widgets/Lists";

interface IProps {}

const Home: React.FC<IProps> = () => {
  const { data: user } = useUser(undefined, { suspense: true });
  const history = useHistory();
  if (!user) history.push("/login");

  return (
    <Box>
      <Lists ownerId={user.uid} />
    </Box>
  );
};

export default Home;
