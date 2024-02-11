
import './App.css'
import React, { setError, useState } from 'react';
import emailSubscriptions from './emailPage';


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

};

  

  return (
    <form className="contact-form" 
          onSubmit={handleSubmit}>
       <input type="email" name="email" onChange={handleDetailsChange} placeholder="Enter your email here..." style={{ color: 'black' }}  />
       <input type="submit" value="Send" style={{ color: 'black' }} />
     </form>
    )
  }

export default App;

 