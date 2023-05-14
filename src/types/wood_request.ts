import {
  FirestoreDataConverter,
  DocumentData,
  WithFieldValue,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "@firebase/firestore";

export type WoodRequest = {
  id: string;
  title: string;
  description: string;
};

export const woodRequestConverter: FirestoreDataConverter<WoodRequest> = {
  toFirestore(woodRequest: WithFieldValue<WoodRequest>): DocumentData {
    return {
      title: woodRequest.title,
      description: woodRequest.description,
    };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): WoodRequest {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      title: data.title,
      description: data.description,
    };
  },
};
