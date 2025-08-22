// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'enter your key',
  authDomain: "edusity-4d4a7.firebaseapp.com",
  projectId: "edusity-4d4a7",
  storageBucket: "edusity-4d4a7.firebasestorage.app",
  messagingSenderId: "1073484704352",
  appId: "1:1073484704352:web:4978f5814c316797fdf105",
  measurementId: "G-PSQJ81JBNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
