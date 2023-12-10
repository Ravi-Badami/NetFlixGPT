// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIpf_045x6dLw2ByruGWtVBsVI1e-HI0k",
  authDomain: "netflixgpt-2eaf5.firebaseapp.com",
  projectId: "netflixgpt-2eaf5",
  storageBucket: "netflixgpt-2eaf5.appspot.com",
  messagingSenderId: "375783679110",
  appId: "1:375783679110:web:1d61a9e39359cc0217dd07",
  measurementId: "G-R38LBEF9Y6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
