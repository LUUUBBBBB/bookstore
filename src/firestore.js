import firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyAaQv_dWn1dp8bCEdR0inFUB-DNlcg457E",
    authDomain: "bookstore-8f7d2.firebaseapp.com",
    databaseURL: "https://bookstore-8f7d2.firebaseio.com",
    projectId: "bookstore-8f7d2",
    storageBucket: "bookstore-8f7d2.appspot.com",
    messagingSenderId: "637988338179"
  };
firebase.initializeApp(config);
const db = firebase.firestore();
export default db ; 