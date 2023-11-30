// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7zsTwdGw3dOB7c97hlJrPlopL6U3IbJ8",
  authDomain: "swe363-321-project.firebaseapp.com",
  projectId: "swe363-321-project",
  storageBucket: "swe363-321-project.appspot.com",
  messagingSenderId: "18940924314",
  appId: "1:18940924314:web:e8c43c8d4156555f932a23",
  measurementId: "G-T04JL9XZF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);