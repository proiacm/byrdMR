import React from 'react';
import './Contact.css';

const Contact = (props) => {

  return (
    <div className='Contact'>
      <div className='form'>
        <form>
          <label className='form-label'>
            FULL NAME <br/>
            <input className='input' type="text" name="name" value={props.name} onClick={props.nameClicked} onChange={props.nameChanged}/>
          </label><br/><br/>
          <label className='form-label'>
            EMAIL <br/>
            <input className='input' type="text" name="email" value={props.email} onClick={props.emailClicked} onChange={props.emailChanged} />
          </label><br/><br/>
          <label className='form-label'>
            MESSAGE <br/>
            <input className='input' type="text" name="message" value={props.message} onClick={props.messageClicked} onChange={props.messageChanged} />
          </label> <br/><br/>
          <input className='submit' type="submit" value="Send Message &#8594;" />
        </form>
      </div>
    </div>
  )
}

export default Contact;