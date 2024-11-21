// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlAq-4_LovVYj8L2iezEAqX4YlohWFArQ",
  authDomain: "fe-mid.firebaseapp.com",
  databaseURL: "https://fe-mid-default-rtdb.firebaseio.com",
  projectId: "fe-mid",
  storageBucket: "fe-mid.firebasestorage.app",
  messagingSenderId: "663049977554",
  appId: "1:663049977554:web:41a350464d56d23943770b",
  measurementId: "G-CK7LT851CV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);