import React from 'react';
import './Contact.css';
import logo from '../Images/Logo.png';
import fb from '../Images/fb.png';
import twitter from '../Images/twitter.png'

const Contact = (props) => {

  return (
    <div className='Contact' id='contact'>
      <img className='social' src={fb} alt='facebook' />
      <img className='social' src={twitter} alt='twitter' />
      <img className='logo' src={logo} alt='logo' />
      <div className='form'>
        <form>
          <label className='form-label'>
            FULL NAME <br/>
            <input className='input' type="text" name="name" placeholder={props.name} onChange={props.nameChanged}/>
          </label><br/><br/>
          <label className='form-label'>
            EMAIL <br/>
            <input className='input' type="text" name="email" placeholder={props.email} onChange={props.emailChanged} />
          </label><br/><br/>
          <label className='form-label'>
            MESSAGE <br/>
            <input className='input-text' type="text" name="message" placeholder={props.message} onChange={props.messageChanged} />
          </label> <br/><br/>
          <input className='submit' type="submit" value="Send Message &#8594;" />
        </form>
      </div>
    </div>
  )
}

export default Contact;