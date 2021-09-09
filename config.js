// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLXRZGY0pOu6CBtEWo2QU1ESXE97HV2GY",
  authDomain: "storytelling-app-56ed7.firebaseapp.com",
  projectId: "storytelling-app-56ed7",
  storageBucket: "storytelling-app-56ed7.appspot.com",
  messagingSenderId: "312554785366",
  appId: "1:312554785366:web:69763f2c4e25423ea509f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig()