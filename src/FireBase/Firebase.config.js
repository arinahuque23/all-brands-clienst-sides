// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0lSQc31qsYG3PG47QwjFfcjfrXX8OoaQ",
  authDomain: "all-brands-clients.firebaseapp.com",
  projectId: "all-brands-clients",
  storageBucket: "all-brands-clients.appspot.com",
  messagingSenderId: "473089108699",
  appId: "1:473089108699:web:9694e9a958984b7bdefafe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;