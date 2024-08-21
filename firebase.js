// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzV2OZIFkVs93F_rdjioUv60uLChPyzK8",
  authDomain: "flashcardsaas-965af.firebaseapp.com",
  projectId: "flashcardsaas-965af",
  storageBucket: "flashcardsaas-965af.appspot.com",
  messagingSenderId: "65991030297",
  appId: "1:65991030297:web:f187de9f8e0d0f9ef45c88",
  measurementId: "G-0Z2W63Y3MZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
