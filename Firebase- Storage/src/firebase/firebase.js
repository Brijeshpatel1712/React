// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Login from "../components/Login";
import { getFirestore } from "firebase/firestore";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYBrblb3sVrq1aopbJRULhgewCMNlfbhE",
  authDomain: "login-authon.firebaseapp.com",
  projectId: "login-authon",
  storageBucket: "login-authon.firebasestorage.app",
  messagingSenderId: "71984050536",
  appId: "1:71984050536:web:35a0a6cfc10327d74126dd",
  measurementId: "G-2228MZNPNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
