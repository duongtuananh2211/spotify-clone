import { Box, CardContent, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { useLists } from "../../hooks/lists";
import useStyles from "./styles";

interface IProps {
  ownerId: string;
}

const Lists: React.FC<IProps> = ({ ownerId }) => {
  const classes = useStyles();
  const lists = useLists(ownerId);
  const history = useHistory();

  return (
    <>
      <Box className={classes.root}>
        <Box>
          <Typography variant="h5">Lists</Typography>
        </Box>
        <Box mt={5}>
          <Grid container spacing={2}>
            {lists.map((list) => (
              <Grid key={list.id} item xs={12}>
                <Paper onClick={() => history.push(`list/${list.id}`)}>
                  <CardContent>
                    <Typography variant="h6">{list.name}</Typography>
                  </CardContent>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Lists;
