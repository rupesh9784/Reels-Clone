
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdoFQ0jJArA6Y6VXHRfWQmjY7bwsIOKBI",
  authDomain: "class-demo-91756.firebaseapp.com",
  projectId: "class-demo-91756",
  storageBucket: "class-demo-91756.appspot.com",
  messagingSenderId: "1036067676243",
  appId: "1:1036067676243:web:b9b3417835cce6f396e6a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let auth = getAuth(app);