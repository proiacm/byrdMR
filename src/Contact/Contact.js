import React from 'react';
import './Contact.css';

const Contact = () => {

  return (
    <div className='Contact'>
      <div className='form'>
        <label for='name'>NAME</label><br/>
          <input className='input'type="text" id="name" name="name" 
          placeholder="Enter your full name"/><br/><br/>
        <label for='email'>EMAIL</label><br/>
          <input className='input' type="text" id="email" name="email" 
            placeholder="Enter your email"/><br/><br/>
        <label for='subject'>MESSAGE</label><br/>
          <input className='input' type="text" id="subject" name="subject" placeholder="What are your plans?"/><br/>
          <input className='submit' type="submit" value="Send Message &#8594;"/>
      </div>
    </div>
  )
}

export default Contact;