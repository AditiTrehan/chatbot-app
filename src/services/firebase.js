import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
    apiKey: "AIzaSyBo7f2gPkwq3kjvf8Sd2fK7SoV7-DBiWbc",
    authDomain: "chatbot-59cc6.firebaseapp.com",
    databaseURL: "https://chatbot-59cc6.firebaseio.com",
    projectId: "chatbot-59cc6",
    storageBucket: "chatbot-59cc6.appspot.com",
    messagingSenderId: "526561682235",
    appId: "1:526561682235:web:a8b5173eb6f560d1eb0d1e"
}

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();