import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBy4NL0XRLdy_D65E56S12kLqNw7OhI-t4",
    authDomain: "clone-438f2.firebaseapp.com",
    projectId: "clone-438f2",
    storageBucket: "clone-438f2.appspot.com",
    messagingSenderId: "24110173443",
    appId: "1:24110173443:web:73681bf4ac9005d651ad36",
    measurementId: "G-6CPFXS63FD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };