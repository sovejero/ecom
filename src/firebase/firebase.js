import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  projectId: "coffee-beans-3673c",
};

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore();
