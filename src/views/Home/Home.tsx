import React from "react";
import {useUser} from "reactfire";
import {useHistory} from "react-router";
import {Box, Grid, Typography} from "@material-ui/core";
import TotalCapitalCard from "../../widgets/TotalCapitalCard";

interface IProps {}

const Home: React.FC<IProps> = () => {
  const {data: user} = useUser(undefined, {suspense: true})
  const history = useHistory()
  if (!user) history.push('/login')

  return <Box>
    <Typography><b>Chao xìn, {user.displayName}</b></Typography>
    <Box mt={2}>
      <Grid container spacing={2}>
        <Grid md={3}>
          <TotalCapitalCard uid={user.uid}   />
        </Grid>
      </Grid>
    </Box>
  </Box>
};

export default Home;
