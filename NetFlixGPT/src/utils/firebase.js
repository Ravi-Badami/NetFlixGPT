// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKqdBgYzDVFh6rkQSxKI6E-7ARS4rrDN8",
  authDomain: "netflixgpt-26fcf.firebaseapp.com",
  projectId: "netflixgpt-26fcf",
  storageBucket: "netflixgpt-26fcf.appspot.com",
  messagingSenderId: "314057927875",
  appId: "1:314057927875:web:eebda5653d4c1b39d1c676",
  measurementId: "G-R203SXPJ3R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
