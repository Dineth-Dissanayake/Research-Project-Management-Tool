import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCkl6w9VDBJHU6nJIELxcIvHdAE7xoPoqE",
  authDomain: "react-pitch-deck-uploader.firebaseapp.com",
  databaseURL: "https://react-pitch-deck-uploader.firebaseio.com",
  projectId: "react-pitch-deck-uploader",
  storageBucket: "react-pitch-deck-uploader.appspot.com",
  messagingSenderId: "856266835618",
  appId: "1:856266835618:web:c01ab48bf33ece9128b9fb",
  
// Not working yet, not sure why
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export const auth = firebase.auth()

export { storage, firebase as default };
