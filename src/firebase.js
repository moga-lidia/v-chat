import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyDwDUWttSqkplHjOwABr2F9HrISy6XdJi8",
    authDomain: "v-chat-classes.firebaseapp.com",
    projectId: "v-chat-classes",
    storageBucket: "v-chat-classes.appspot.com",
    messagingSenderId: "561793965380",
    appId: "1:561793965380:web:5d8370215b23e76c784b11",
    measurementId: "G-N6CNXJXT9K",
  }).auth();  

