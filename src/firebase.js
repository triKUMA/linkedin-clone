import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB63OTO8TbNyH3ovL5OB7W3nBxQWLekgJs",
  authDomain: "linkedin-clone-2a00b.firebaseapp.com",
  projectId: "linkedin-clone-2a00b",
  storageBucket: "linkedin-clone-2a00b.appspot.com",
  messagingSenderId: "595546511313",
  appId: "1:595546511313:web:87f8fa91b6b2e489eab2f0",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
