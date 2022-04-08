const firebase = require('firebase');

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA70ophXOeiUNj1uVnmkN9Hw_ywYPibfHg",
  authDomain: "api-test-fcd1a.firebaseapp.com",
  projectId: "api-test-fcd1a",
  storageBucket: "api-test-fcd1a.appspot.com",
  messagingSenderId: "910912806564",
  appId: "1:910912806564:web:130a29909037174bf05031"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig); //initialize firebase app 
module.exports = { firebase }; //export the app