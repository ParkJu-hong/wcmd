import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCvWVdoWVbd00AXTAo0o50NBeeSxxBKQgE",
  authDomain: "wcmd-6a186.firebaseapp.com",
  projectId: "wcmd-6a186",
  storageBucket: "wcmd-6a186.appspot.com",
  messagingSenderId: "423130376836",
  appId: "1:423130376836:web:28ff74ae77341b50c6f0d1",
  measurementId: "G-0P1WEKPBBT"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();