// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9m2C0GdzrgQMy9Rb3uxHyWPhh6YdBg9A",
  authDomain: "oliver-foundation.firebaseapp.com",
  projectId: "oliver-foundation",
  storageBucket: "oliver-foundation.appspot.com",
  messagingSenderId: "559109476334",
  appId: "1:559109476334:web:500c458552a0dd2ba5c8ff",
  measurementId: "G-KLKZRR62NB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);