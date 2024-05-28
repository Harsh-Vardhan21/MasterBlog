// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "masterblog-2daf8.firebaseapp.com",
  projectId: "masterblog-2daf8",
  storageBucket: "masterblog-2daf8.appspot.com",
  messagingSenderId: "683672567098",
  appId: "1:683672567098:web:cbcbf69178e0530cce6403"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);