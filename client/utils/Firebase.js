// Import the functions you need from the SDKs you need
import {GoogleAuthProvider, getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FIREBASE_API_KEY}`,
  authDomain: "logincartcraze.firebaseapp.com",
  projectId: "logincartcraze",
  storageBucket: "logincartcraze.firebasestorage.app",
  messagingSenderId: "209249400707",
  appId: "1:209249400707:web:206f13bb4000be520e68b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider =new GoogleAuthProvider()

export {auth , provider}