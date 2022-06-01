import { Box, Grid } from "@material-ui/core";
import React from "react";
import { useWordsByListId } from "../../hooks/words";
import useStyles from "./styles";
import WordDictionaryPopup from "../WordDictionaryPopup";

interface IProps {
  listId: string;
}

const Words: React.FC<IProps> = ({ listId }) => {
  const words = useWordsByListId(listId);
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        {words.map((word) => (
          <Grid item xs={12} key={word.id}>
            <WordDictionaryPopup word={word} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Words;
