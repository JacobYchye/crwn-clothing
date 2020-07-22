import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBRuWbA7-BIqbE2PMiKp2vrJVZ75vDcIGM",
  authDomain: "crwn-db-109e0.firebaseapp.com",
  databaseURL: "https://crwn-db-109e0.firebaseio.com",
  projectId: "crwn-db-109e0",
  storageBucket: "crwn-db-109e0.appspot.com",
  messagingSenderId: "206652698365",
  appId: "1:206652698365:web:bdf5a99f40daf593e69894",
  measurementId: "G-JBFE0GX7FR",
};


firebase.initializeApp(config);
 
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoggle = () => auth.signInWithPopup(provider);

export default firebase;