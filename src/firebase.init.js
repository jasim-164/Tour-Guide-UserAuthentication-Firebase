// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAptjB-fnlLBsgHvjKBrO_QmtTa0niEzpk",
  authDomain: "tour-guide-6986e.firebaseapp.com",
  projectId: "tour-guide-6986e",
  storageBucket: "tour-guide-6986e.appspot.com",
  messagingSenderId: "61494933238",
  appId: "1:61494933238:web:a3e21c7f0faf0436419ed7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;