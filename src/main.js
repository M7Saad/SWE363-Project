import { createApp } from "vue";

import "./style.css";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";

//create app
createApp(App).use(router).mount("#app");

//firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB7zsTwdGw3dOB7c97hlJrPlopL6U3IbJ8",
  authDomain: "swe363-321-project.firebaseapp.com",
  projectId: "swe363-321-project",
  storageBucket: "swe363-321-project.appspot.com",
  messagingSenderId: "18940924314",
  appId: "1:18940924314:web:e8c43c8d4156555f932a23",
  measurementId: "G-T04JL9XZF3",
  databaseURL: "https://swe363-321-project-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app };
