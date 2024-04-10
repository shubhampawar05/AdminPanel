// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpQIlQrpYkEvfKKBv6ahDtdLKfSrH8l0c",
  authDomain: "mctadminpanle.firebaseapp.com",
  projectId: "mctadminpanle",
  storageBucket: "mctadminpanle.appspot.com",
  messagingSenderId: "12460140624",
  appId: "1:12460140624:web:9970be27ecad2fea1b4955",
  measurementId: "G-7C7S5V5H4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export{ app , auth, db };
// const analytics = getAnalytics(app);