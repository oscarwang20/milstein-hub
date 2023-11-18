import admin from "firebase-admin";
import { cert, ServiceAccount } from "firebase-admin/app";
import serviceAccount from "../firebase-admin.json";

admin.initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
});

const db = admin.firestore();

export default db;
