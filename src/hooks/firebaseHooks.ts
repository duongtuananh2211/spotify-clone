import firebase from "firebase";
import { IFirestoreMetadata } from "interfaces";
import React, { useMemo } from "react";
import {
  ReactFireOptions,
  useFirestoreCollection,
  useFirestoreDoc,
} from "reactfire";

const dataWithMetadata = <T>(
  data: T,
  ref: firebase.firestore.DocumentReference
): T & IFirestoreMetadata => {
  return { ...data, _metadata: { ref: ref } };
};

const convertDocSnapshotWithMetadata = <T>(
  docSnapshot: firebase.firestore.DocumentSnapshot,
  options: ReactFireOptions<T[]>
): T & IFirestoreMetadata => {
  const idField = options.idField || "id";
  return dataWithMetadata(
    { [idField]: docSnapshot.id, ...docSnapshot.data() },
    docSnapshot.ref
  ) as T & IFirestoreMetadata;
};

export const useCollectionDataWithSuspense = <T extends object>(
  query: firebase.firestore.Query,
  options: ReactFireOptions<T[]>
): (T & IFirestoreMetadata)[] => {
  const rfOptions: ReactFireOptions<T[]> = {
    initialData: undefined,
    idField: "id",
    ...options,
    suspense: true,
  };

  const { data } = useFirestoreCollection<T>(query, rfOptions);

  return useMemo(() => {
    if (!data) return [];
    const querySnapshot = data as firebase.firestore.QuerySnapshot;
    return querySnapshot.docs.map((snapshot) =>
      convertDocSnapshotWithMetadata<T>(snapshot, options)
    );
  }, [data, options]);
};

export const useDocumentDataWithSuspense = <T extends object>(
  docRef: firebase.firestore.DocumentReference,
  options: ReactFireOptions<T>
): undefined | (T & IFirestoreMetadata) => {
  const rfOptions: ReactFireOptions<T[]> = {
    initialData: undefined,
    idField: "id",
    ...options,
    suspense: true,
  };

  const { data } = useFirestoreDoc<T>(docRef, rfOptions);

  return useMemo(() => {
    if (!data) return undefined;

    const snapshot = data as firebase.firestore.DocumentSnapshot;

    if (!Boolean(snapshot.exists)) return undefined;

    return convertDocSnapshotWithMetadata(snapshot, options);
  }, [data, options]);
};
