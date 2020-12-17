import React from 'react';
import './Contact.css';

const Contact = (props) => {

  return (
    <div className='Contact'>
      <div className='form'>
        <form>
          <label className='form-label'>
            FULL NAME <br/>
            <input className='input' type="text" name="name" value={props.value}/>
          </label><br/><br/>
          <label className='form-label'>
            EMAIL <br/>
            <input className='input' type="text" name="email" value="Enter your email"  />
          </label><br/><br/>
          <label className='form-label'>
            MESSAGE <br/>
            <input className='input' type="text" name="message" value="What are your plans?"  />
          </label> <br/><br/>
          <input className='submit' type="submit" value="Send Message &#8594;" />
        </form>
      </div>
    </div>
  )
}

export default Contact;