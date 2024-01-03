import { initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { firebaseConfig } from "./firebase-config";

let auth, db, storage;

try {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
} catch (error) {
  console.error("Firebase initialization error:", error);
  throw error; // Rethrow the error to halt the application startup if Firebase initialization fails.
}

export { auth, db, storage };
