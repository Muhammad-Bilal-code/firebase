// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxhpkLx8lj4_TfHZPPbk6AM-ZseqtwEbk",
  authDomain: "fir-f693d.firebaseapp.com",
  databaseURL: "https://fir-f693d-default-rtdb.firebaseio.com",
  projectId: "fir-f693d",
  storageBucket: "fir-f693d.appspot.com",
  messagingSenderId: "184826292103",
  appId: "1:184826292103:web:53acf189893415fad65522",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
