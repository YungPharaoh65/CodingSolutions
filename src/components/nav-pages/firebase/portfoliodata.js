import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGEmIJcyvSZH56m4NlgeMbmUfW2iMluME",
  authDomain: "portfoliostorage-fe670.firebaseapp.com",
  projectId: "portfoliostorage-fe670",
  storageBucket: "portfoliostorage-fe670.appspot.com",
  messagingSenderId: "362570256329",
  appId: "1:362570256329:web:1503ba42ed727770322218"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
