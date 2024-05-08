// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-7b3b7.firebaseapp.com",
  projectId: "mern-blog-7b3b7",
  storageBucket: "mern-blog-7b3b7.appspot.com",
  messagingSenderId: "818954738104",
  appId: "1:818954738104:web:050cba5ce38450f135974d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
