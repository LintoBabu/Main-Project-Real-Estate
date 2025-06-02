// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c6d33.firebaseapp.com",
  projectId: "mern-estate-c6d33",
  storageBucket: "mern-estate-c6d33.firebasestorage.app",
  messagingSenderId: "168973861436",
  appId: "1:168973861436:web:9c4f47deadd2fef5963939"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);