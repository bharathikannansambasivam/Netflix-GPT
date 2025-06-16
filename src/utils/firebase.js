// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmcptod9CJ5RbRoIQgB3IV3V2vArgYVl8",
  authDomain: "bk-netflixgpt.firebaseapp.com",
  projectId: "bk-netflixgpt",
  storageBucket: "bk-netflixgpt.firebasestorage.app",
  messagingSenderId: "839268341942",
  appId: "1:839268341942:web:641ff9e060f7c6a2882e17",
  measurementId: "G-L98YJR96VB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
