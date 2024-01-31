// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernblogv1.firebaseapp.com",
  projectId: "mernblogv1",
  storageBucket: "mernblogv1.appspot.com",
  messagingSenderId: "45912084874",
  appId: "1:45912084874:web:6e689319eddd1d26e87873",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
