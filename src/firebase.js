  import firebase from 'firebase/app'
  import 'firebase/firebase-firestore'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA_QOgg_6jFzIKfhCZVp-TnLeZSDdPHLLo",
    authDomain: "naturach-34049.firebaseapp.com",
    projectId: "naturach-34049",
    storageBucket: "naturach-34049.appspot.com",
    messagingSenderId: "179056475188",
    appId: "1:179056475188:web:680d1b3e79f849237bde61"
  };
  // Initialize Firebase
  const fb =  firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore()

  