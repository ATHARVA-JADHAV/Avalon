// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC26HuDaKaCAP5ZiOOzRSyurnLZz9jF8Q0",
  authDomain: "carbonara-67eae.firebaseapp.com",
  projectId: "carbonara-67eae",
  storageBucket: "carbonara-67eae.appspot.com",
  messagingSenderId: "216121501388",
  appId: "1:216121501388:web:af2b4dfab32b5588554469",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app };
export { db };
