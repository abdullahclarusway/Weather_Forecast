import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBf983GiNo9TwtioY7Z6ksUPyis4UjAtd0",
    authDomain: "weather-app-7ee51.firebaseapp.com",
    databaseURL: "https://weather-app-7ee51.firebaseio.com",
    projectId: "weather-app-7ee51",
    storageBucket: "weather-app-7ee51.appspot.com",
    messagingSenderId: "609834221358",
    appId: "1:609834221358:web:cf0e84b32fbae16f1784bf"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
console.log(firebase);
console.log(firebaseApp);

const auth = firebase.auth();

export { auth };
