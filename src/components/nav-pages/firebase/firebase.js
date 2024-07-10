// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGEmIJcyvSZH56m4NlgeMbmUfW2iMluME",
  authDomain: "portfoliostorage-fe670.firebaseapp.com",
  projectId: "portfoliostorage-fe670",
  storageBucket: "portfoliostorage-fe670.appspot.com",
  messagingSenderId: "362570256329",
  appId: "1:362570256329:web:1503ba42ed727770322218"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };


/*FUNCTIONALFUNCTIONALFUNCTIONALFUNCTIONALFUNCTIONALFUNCTIONALFUNCTIONAL
FUNCTIONALFUNCTIONALFUNCTIONALFUNCTIONALFUNCTIONALFUNCTIONALFUNCTIONAL*/ 