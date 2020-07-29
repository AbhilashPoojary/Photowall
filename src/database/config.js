import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyAtzud2JfS9rmx_Fs9Z2iajMpMaQWC0EkA",
  authDomain: "photowall-f7db3.firebaseapp.com",
  databaseURL: "https://photowall-f7db3.firebaseio.com",
  projectId: "photowall-f7db3",
  storageBucket: "photowall-f7db3.appspot.com",
  messagingSenderId: "40724592409",
  appId: "1:40724592409:web:a311b0e1448783f1efb788",
  measurementId: "G-8M1J5Y5NG0",
};

firebase.initializeApp(config);
const database = firebase.database();
export { database };
