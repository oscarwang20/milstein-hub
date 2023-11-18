import db from "../firestore";
import { DBEvent } from "../../../types/common-types";

export const getEvents = async (): Promise<DBEvent[]> => {
  const events = await db.collection("Events").get();
  return events.docs.map((doc) => ({ id: doc.id, ...doc.data() } as DBEvent));
};
