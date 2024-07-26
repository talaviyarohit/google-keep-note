// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8gSQ8CrMVg8cbtljBWw-BwFRQD79ghNQ",
  authDomain: "keep-note-957a9.firebaseapp.com",
  projectId: "keep-note-957a9",
  storageBucket: "keep-note-957a9.appspot.com",
  messagingSenderId: "85801894853",
  appId: "1:85801894853:web:d50ded6f5c2482321041ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) ;
export const auth = getAuth(app) ;

