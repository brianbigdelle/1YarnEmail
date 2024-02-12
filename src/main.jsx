import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://yarn-97698-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <img src='../selknam_tiny.jpg'></img>
    <h2>1Yarn is building the future of writing contests.</h2>
    <h1>Join our Mailing List</h1>
    <App />
  </React.StrictMode>,
)
