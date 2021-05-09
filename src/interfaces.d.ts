import firebase from "firebase";
import { ComponentType, FunctionComponent } from "react";

export interface IFirestoreMetadata {
  _metadata: {
    ref: firebase.firestore.DocumentReference;
  };
}

export interface IRoute {
  path: string;
  component: ComponentType | FunctionComponent;
  private?: boolean;
  name: string;
}
