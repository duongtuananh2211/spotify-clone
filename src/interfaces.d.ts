import firebase from "firebase";

export interface IFirestoreMetadata {
  _metadata: {
    ref: firebase.firestore.DocumentReference;
  };
}
