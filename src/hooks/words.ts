import { useFirestore } from "reactfire";
import firebase from "firebase";
import {
  useCollectionDataWithSuspense,
  useDocumentDataWithSuspense,
} from "./firebaseHooks";
import { Word } from "../type";

export const useCol = () => {
  const db = useFirestore();

  return db.collection("words");
};

export const useRef = (id: string) => {
  const db = useFirestore();

  return db.collection("words").doc(id);
};

const getByOwner = (col: firebase.firestore.Query, ownerId: string) =>
  col.where("ownerId", "==", ownerId);

const getByListId = (col: firebase.firestore.Query, ownerId: string) =>
  col.where("listId", "==", ownerId);

export const useWordsByListId = (listId: string) => {
  const col = useCol();
  const query = getByListId(col, listId);

  return useCollectionDataWithSuspense<Word>(query.orderBy("reviewAt", "asc"), {
    idField: "id",
  });
};

export const useWord = (id: string) => {
  const ref = useRef(id);

  return useDocumentDataWithSuspense<Word>(ref, { idField: "id" });
};
