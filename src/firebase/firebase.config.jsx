// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC34CyZYsqTvdAaYqNnqVvP9s8arTAkQw",
  authDomain: "validation-firebase.firebaseapp.com",
  databaseURL: "https://validation-firebase.firebaseio.com",
  projectId: "validation-firebase",
  storageBucket: "validation-firebase.appspot.com",
  messagingSenderId: "239203237517",
  appId: "1:239203237517:web:f52f9b0c65792a1ff66cc4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;