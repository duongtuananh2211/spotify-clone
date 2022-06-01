import firebase from "firebase";

export declare type Timetrack = {
  createdAt: firebase.firestore.Timestamp;
  updatedAt?: firebase.firestore.Timestamp;
  deletedAt?: firebase.firestore.Timestamp;
};

export declare type List = {
  id: string;
  name: string;
  ownerId: string;
  statistics: {
    totalWords: number;
  };
} & Timetrack;

export declare type Word = {
  id: string;
  content: string;
  ownerId: string;
  listId: string;
  spaced: number;
  reviewAt: firebase.firestore.Timestamp;
} & Timetrack;
