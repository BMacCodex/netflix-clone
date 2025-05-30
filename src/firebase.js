// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDby1U4IXdcqWCJzrPLenI0PHJd2QM7Gh4",
  authDomain: "netflix-clone-3eb65.firebaseapp.com",
  projectId: "netflix-clone-3eb65",
  storageBucket: "netflix-clone-3eb65.firebasestorage.app",
  messagingSenderId: "941438597868",
  appId: "1:941438597868:web:68beffe61323d6f231c3c9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
