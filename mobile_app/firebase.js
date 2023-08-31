// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import * as firebase from "firebase/compat/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsumTmuHzPuMimUVJQQCjbMfkPJ_TfDXs",
  authDomain: "oh-my-leave.firebaseapp.com",
  projectId: "oh-my-leave",
  storageBucket: "oh-my-leave.appspot.com",
  messagingSenderId: "142375466446",
  appId: "1:142375466446:web:5f8019e8cd528fa139679f",
  //measurementId: "G-040Z7N8E87"
};




// Initialize Firebase

let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

/*
const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, user => {
  // Check for user status
});

*/
const auth = firebase.auth()

export {auth};