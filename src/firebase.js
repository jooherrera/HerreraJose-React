import firebase from "firebase/app";
import "firebase/firebase-firestore";

// Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyA_QOgg_6jFzIKfhCZVp-TnLeZSDdPHLLo",
//   authDomain: "naturach-34049.firebaseapp.com",
//   projectId: "naturach-34049",
//   storageBucket: "naturach-34049.appspot.com",
//   messagingSenderId: "179056475188",
//   appId: "1:179056475188:web:680d1b3e79f849237bde61"
// };
var firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
