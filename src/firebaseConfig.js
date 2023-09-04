// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyAVNQSIaxq8qn-7eld7SrxeydfRnM3uKpg",
  // authDomain: "adp24-b7b97.firebaseapp.com",
  // projectId: "adp24-b7b97",
  // storageBucket: "adp24-b7b97.appspot.com",
  // messagingSenderId: "717490128237",
  // appId: "1:717490128237:web:579c80ba138e8b19718664"
  apiKey: "AIzaSyCUQJdrzcxkpQToT1WDUIpTbrTYrG-9Zsg",
  authDomain: "hackathon-54abf.firebaseapp.com",
  projectId: "hackathon-54abf",
  storageBucket: "hackathon-54abf.appspot.com",
  messagingSenderId: "612565089662",
  appId: "1:612565089662:web:fa22354d2681cf87d8c72f",
  measurementId: "G-GRWDY5CSFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);