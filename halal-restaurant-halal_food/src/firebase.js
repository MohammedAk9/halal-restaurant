// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOAmOYWJi13qRYBwbfsvqkVLx_OkJyPVQ", // my api 
  authDomain: "halalfood-fe458.firebaseapp.com",// new 
  projectId: "halalfood-fe458",
  storageBucket: "halalfood-fe458.appspot.com",
  messagingSenderId: "223940064173",
  appId: "1:223940064173:web:6537110ddff1b73374a724",
  measurementId: "G-2541G04HPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);    
const analytics = getAnalytics(app);