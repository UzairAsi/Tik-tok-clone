import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN-5JjC3AVkRSrS6l5_0StsW-lnPrRaBU",
  authDomain: "tik-tok-clone-6bfef.firebaseapp.com",
  projectId: "tik-tok-clone-6bfef",
  storageBucket: "tik-tok-clone-6bfef.appspot.com",
  messagingSenderId: "413346370679",
  appId: "1:413346370679:web:e57669e66802e912922272",
  measurementId: "G-Z09DB4R5Z9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
