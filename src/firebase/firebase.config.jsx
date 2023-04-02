// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFwPPq6Dnoijlji1DVqtnAXLtyHOkNSYg",
  authDomain: "ema-jhon-e-commerce.firebaseapp.com",
  databaseURL: "https://ema-jhon-e-commerce.firebaseio.com",
  projectId: "ema-jhon-e-commerce",
  storageBucket: "ema-jhon-e-commerce.appspot.com",
  messagingSenderId: "350629705855",
  appId: "1:350629705855:web:24f76b476db23011eda74a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;