
import './App.css'
import React, { setError, useState } from 'react';
import emailSubscriptions from './emailPage';
import { getDatabase, ref, push } from "firebase/database";
import { initializeApp } from "firebase/app";


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





function App() {
  const [sub, setSubscriber] = useState("");

const handleDetailsChange = (event) => {
  const value = event.target.value;
  setSubscriber(value);
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (!sub.trim()) {
    setError("Please enter your email.");
    return; // Stop further execution if email is empty
  }
  console.log(sub)
  emailSubscriptions(e, sub);

  const message = document.querySelector("#success");

  message.textContent="Added!";

};



  

  return (
    <form className="contact-form" 
          onSubmit={handleSubmit}>
       <input type="email" name="email" onChange={handleDetailsChange} placeholder="Enter your email here..." style={{ color: 'black' }}  />
       <input className="button" type="submit" value="Send" style={{ color: 'black' }} />
        <h4 id='success'></h4>
     </form>
    )
  }

export default App;

 