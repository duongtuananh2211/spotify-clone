import {
  Box,
  CardContent,
  Dialog,
  DialogTitle,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import { Clear } from "@material-ui/icons";
import React, { useState } from "react";
import { Word } from "type";
import { daysToMessage, getDateDiff } from "utils/date";
import useStyles from "./styles";

interface IProps {
  word: Word;
}

const CAMBRIDGE_DICTIONARY_URL = "https://www.dictionary.com/browse/";

const WordDictionaryPopup: React.FC<IProps> = ({ word }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const now = new Date();

  const handleClose = () => setOpen(false);

  return (
    <>
      <Paper onClick={() => setOpen(true)}>
        <CardContent>
          <Typography className="word">{word.content}</Typography>
          <Typography variant="caption" className="remaining">
            <i>{daysToMessage(getDateDiff(now, word.reviewAt.toDate()))}</i>
          </Typography>
        </CardContent>
      </Paper>

      <Dialog
        onClose={handleClose}
        aria-labelledby="word-dictionary-dialog"
        open={open}
        fullWidth
        maxWidth={"md"}
        className={classes.root}
      >
        <DialogTitle id="word-dictionary-dialog-title">
          <Box display={"flex"} justifyContent="space-between">
            <b>{word.content.toUpperCase()}</b>
            <IconButton onClick={handleClose} size="small">
              <Clear />
            </IconButton>
          </Box>
        </DialogTitle>
        <div style={{ height: "calc(100% - 64px)" }}>
          <iframe
            className="dictionary"
            width={"100%"}
            height={"100%"}
            src={CAMBRIDGE_DICTIONARY_URL + word.content}
            title={word.content}
          ></iframe>
        </div>
      </Dialog>
    </>
  );
};

export default WordDictionaryPopup;
