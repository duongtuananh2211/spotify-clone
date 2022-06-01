import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { useCol } from "hooks/words";
import React, { useCallback, useState } from "react";
import firebase from "firebase";
import { Word } from "type";

interface IProps {
  listId: string;
  ownerId: string;
}

const AddNewWord: React.FC<IProps> = ({ listId, ownerId }) => {
  const [open, setOpen] = useState(false);
  const [word, setWord] = useState("");

  const col = useCol();

  const handleSave = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!!word) {
        const ref = col.doc();
        const timestampNow = firebase.firestore.Timestamp.now();

        await ref.set(
          {
            content: word,
            createdAt: timestampNow,
            reviewAt: timestampNow,
            listId: listId,
            ownerId: ownerId,
            spaced: 0,
          } as Word,
          { merge: true }
        );

        handleClose();
      }
    },
    [col, listId, ownerId, word]
  );

  const handleClose = () => {
    setWord("");
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen((o) => !o)} color="primary">
        <b>Add Word</b>
      </Button>

      <Dialog
        onClose={handleClose}
        aria-labelledby="add-word-dialog"
        open={open}
        fullWidth
        maxWidth={"md"}
      >
        <DialogTitle id="add-word-dialog-title">Add Word</DialogTitle>

        <DialogContent>
          <Box paddingBottom={1}>
            <form onSubmit={handleSave}>
              <TextField
                size="medium"
                fullWidth
                variant="outlined"
                placeholder="Type a word"
                value={word}
                onChange={(e) => setWord(e.target.value)}
              ></TextField>

              <Box mt={2} display="flex" justifyContent={"flex-end"}>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit" variant="contained" color="primary">
                  Add
                </Button>
              </Box>
            </form>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddNewWord;
