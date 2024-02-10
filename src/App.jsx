
import './App.css'
import React, { useState } from 'react';
import emailSubscriptions from './emailPage';


function App() {
  const [sub, setSubscriber] = useState("");

const handleDetailsChange = (event) => {
  const value = event.target.value;
  setSubscriber(value);
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(sub)
  emailSubscriptions(e, sub);

};

  

  return (
    <form className="contact-form" 
          onSubmit={handleSubmit}>
       <label> Email </label>
       <input type="email" name="email" onChange={handleDetailsChange} placeholder="Enter your email here..." />
       <input type="submit" value="Send" />
     </form>
    )
  }

export default App;

 