


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDtYw-VSYZ-JCY_n9cVN5WeZ2xTNPzsnY",
  authDomain: "poll-website-474b9.firebaseapp.com",
  databaseURL: "https://poll-website-474b9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "poll-website-474b9",
  storageBucket: "poll-website-474b9.firebasestorage.app",
  messagingSenderId: "350696442213",
  appId: "1:350696442213:web:ae293e1583a92cdac2398c",
  measurementId: "G-YGJ8PX1SSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function googleSignIn() {
    signInWithPopup(auth, provider)
  .then((result) => {
    console.log("Button works!");
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
});
}

// Make googleSignIn function available globally
 window.googleSignIn = googleSignIn;

 console.log("JavaScript file loaded successfully!");