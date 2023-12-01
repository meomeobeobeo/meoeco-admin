// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr-gR5mI-P10iwSq03fRs3zFXNkuBX2bU",
  authDomain: "meoeco-d3c20.firebaseapp.com",
  projectId: "meoeco-d3c20",
  storageBucket: "meoeco-d3c20.appspot.com",
  messagingSenderId: "1007496383108",
  appId: "1:1007496383108:web:332430c611c01131b6d0d1",
  measurementId: "G-E5XSR4WDLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app)
