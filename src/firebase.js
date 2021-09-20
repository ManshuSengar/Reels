import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";


let firebaseConfig = {
    apiKey: "AIzaSyD6Nfc1s6bSom5lkZ1aRNst2N05O4RoiOE",
    authDomain: "reels-47aa8.firebaseapp.com",
    projectId: "reels-47aa8",
    storageBucket: "reels-47aa8.appspot.com",
    messagingSenderId: "116371260639",
    appId: "1:116371260639:web:bfedc6ce140c5b91aed56a"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 export const firestore= firebase.firestore();
 export const auth=firebase.auth();
 export const storage=firebase.storage();
 let provider= new firebase.auth.GoogleAuthProvider();
 export const signInWithGoogle=()=> auth.signInWithPopup(provider);
 export default firebase ;
 