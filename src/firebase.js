// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBJD20QNxSZ25AVG-ZR1fKoBPtU13aME-A",
    authDomain: "clone-288d7.firebaseapp.com",
    projectId: "clone-288d7",
    storageBucket: "clone-288d7.appspot.com",
    messagingSenderId: "1003167633296",
    appId: "1:1003167633296:web:24d475e42f54186473ad15",
    measurementId: "G-J6RTGLJK2Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };