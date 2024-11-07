// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKGKSSH8NAzi8TeFf8kG5L87aLxK0gLCA",
  authDomain: "draw-notes-aaa80.firebaseapp.com",
  projectId: "draw-notes-aaa80",
  storageBucket: "draw-notes-aaa80.firebasestorage.app",
  messagingSenderId: "674188808778",
  appId: "1:674188808778:web:fa55f13ec771db6f17ccb3",
  measurementId: "G-LPEPWHN6SX"
};


const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

// Google Sign-In
export const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
};

// Email/Password Sign-Up
export const signUpWithEmailPassword = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
};

// Email/Password Login
export const loginWithEmailPassword = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
};