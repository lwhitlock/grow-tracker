import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyB9mcdRR4MooTpNb29tnbrZQ9pHrd9MDuA",
  authDomain: "grow-43b16.firebaseapp.com",
  databaseURL: "https://grow-43b16.firebaseio.com",
  projectId: "grow-43b16",
  storageBucket: "grow-43b16.appspot.com",
  messagingSenderId: "56524211178"
};
var fire = firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export default fire;
