//import { initializeApp } from 'firebase/app';
//import { getFirestore } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/database'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBhhN2GT867DIqrRcKpgz7-Ouo4jGnHHFo",
    authDomain: "netflix-clone-bdd60.firebaseapp.com",
    projectId: "netflix-clone-bdd60",
    storageBucket: "netflix-clone-bdd60.appspot.com",
    messagingSenderId: "117786811793",
    appId: "1:117786811793:web:b28a822458865acdd80e30"
  };

// Initialize Firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);
//const db = getFirestore();
const auth = getAuth();

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
export default firebaseApp;
// import firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "AIzaSyBhhN2GT867DIqrRcKpgz7-Ouo4jGnHHFo",
//     authDomain: "netflix-clone-bdd60.firebaseapp.com",
//     projectId: "netflix-clone-bdd60",
//     storageBucket: "netflix-clone-bdd60.appspot.com",
//     messagingSenderId: "117786811793",
//     appId: "1:117786811793:web:b28a822458865acdd80e30"
//   };

//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = firebaseApp.firestore();
//   const auth = firebase.auth();

//   export { auth }
//   export default db;