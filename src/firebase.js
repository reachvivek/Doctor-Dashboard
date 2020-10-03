import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVkiDJImYmrdmvtjrbdpwAbUnXNSd80uo",
    authDomain: "chikitsak-d3a3e.firebaseapp.com",
    databaseURL: "https://chikitsak-d3a3e.firebaseio.com",
    projectId: "chikitsak-d3a3e",
    storageBucket: "chikitsak-d3a3e.appspot.com",
    messagingSenderId: "144492358195",
    appId: "1:144492358195:web:e8336385e38947c977d146",
    measurementId: "G-8TKFKLDZNN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;