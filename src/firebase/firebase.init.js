// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuSjJd3mHiRRu5D8a5-qeH0lzxErIGkFw",
  authDomain: "dimple-firebase-df62c.firebaseapp.com",
  projectId: "dimple-firebase-df62c",
  storageBucket: "dimple-firebase-df62c.firebasestorage.app",
  messagingSenderId: "1073961125443",
  appId: "1:1073961125443:web:906e2e9d5a3187617a76f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);