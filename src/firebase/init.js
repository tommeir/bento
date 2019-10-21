import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const firebaseConfig = {
  apiKey: "AIzaSyB1uAaFrCn87SwhTudHqlovmtFazjvVjrU",
  authDomain: "exegen-db.firebaseapp.com",
  databaseURL: "https://exegen-db.firebaseio.com",
  projectId: "exegen-db",
  storageBucket: "exegen-db.appspot.com",
  messagingSenderId: "77509316720",
  appId: "1:77509316720:web:0a272613aa0a7e1892e4b5",
  measurementId: "G-ZVSNWGG337"
};

firebase.initializeApp(config)
