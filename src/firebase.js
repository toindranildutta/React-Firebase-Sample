// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "learn-firebase-93e0f.firebaseapp.com",
  projectId: "learn-firebase-93e0f",
  storageBucket: "learn-firebase-93e0f.appspot.com",
  messagingSenderId: "532218541857",
  appId: "1:532218541857:web:40cf4b0dfe5cfcd5887060"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();