// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxYUXDzGVXZ3Gcwwk71DTADx-RiwQOm2w",
  authDomain: "authbox-77d5e.firebaseapp.com",
  projectId: "authbox-77d5e",
  storageBucket: "authbox-77d5e.appspot.com",
  messagingSenderId: "528964178918",
  appId: "1:528964178918:web:42e5ca7cfdb4b27584bc27",
  measurementId: "G-D3DBD89T3Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);