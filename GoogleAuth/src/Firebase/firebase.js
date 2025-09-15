import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNj1zAaWwgD6GlFExBav0wCm5zikxmemc",
  authDomain: "brijeshlogin.firebaseapp.com",
  projectId: "brijeshlogin",
  storageBucket: "brijeshlogin.firebasestorage.app",
  messagingSenderId: "192000211358",
  appId: "1:192000211358:web:2f465aa0600d232952fe8f",
  measurementId: "G-9PN09TTXZB"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();