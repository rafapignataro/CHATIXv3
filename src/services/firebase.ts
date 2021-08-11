import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDvmNYyLftjukULn8EC4J1Fi-yXjw24VhI',
  authDomain: 'chatix-12345.firebaseapp.com',
  projectId: 'chatix-12345',
  storageBucket: 'chatix-12345.appspot.com',
  messagingSenderId: '37996688836',
  appId: '1:37996688836:web:2d8835985e1f02856fa091',
  measurementId: 'G-XFVF9XGNX0',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export default firebase;
