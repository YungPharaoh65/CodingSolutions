// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA5gP1bPLx1j4_gQOj301ekdADzpg4XldQ",
  authDomain: "contactpage-c3b3e.firebaseapp.com",
  projectId: "contactpage-c3b3e",
  storageBucket: "contactpage-c3b3e.appspot.com",
  messagingSenderId: "144204049122",
  appId: "1:144204049122:web:ae51c03ae0ac081b124cbb",
  measurementId: "G-8QWQWX2H9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Storage
const storage = getStorage(app);

export { db, storage };
