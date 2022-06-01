import { useFirestore } from "reactfire";
import firebase from "firebase";
import {
  useCollectionDataWithSuspense,
  useDocumentDataWithSuspense,
} from "./firebaseHooks";
import { List } from "type";

const useCol = () => {
  const db = useFirestore();

  return db.collection("lists");
};

const useRef = (id: string) => {
  const db = useFirestore();

  return db.collection("lists").doc(id);
};

const getByOwner = (col: firebase.firestore.Query, ownerId: string) =>
  col.where("ownerId", "==", ownerId);

export const useLists = (ownerId: string) => {
  const col = useCol();
  const query = getByOwner(col, ownerId);

  return useCollectionDataWithSuspense<List>(
    query.orderBy("createdAt", "desc"),
    { idField: "id" }
  );
};

export const useList = (id: string) => {
  const ref = useRef(id);

  return useDocumentDataWithSuspense<List>(ref, { idField: "id" });
};
