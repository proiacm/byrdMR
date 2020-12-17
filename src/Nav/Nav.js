import React from 'react';
import './Nav.css';
import {Link} from 'react-scroll';
import logo from '../Images/Logo.png';

const Nav = () => {

  return (
    <div className='Nav'>
      <Link className='nav-li-left' style={{ cursor: "pointer"}} to="store" spy={true} smooth={true}>Store</Link>
      <Link className='nav-li-left' style={{ cursor: "pointer"}} to="tutorials" spy={true} smooth={true}>Tutorials</Link>
      <img className='nav-img' src={logo} alt='logo'/>
      <Link className='nav-li-right' style={{ cursor: "pointer"}} to="blog" spy={true} smooth={true}>Blog</Link>
      <Link className='nav-li-right' style={{ cursor: "pointer"}} to="contact" spy={true} smooth={true}>Contact</Link>
    </div>
  )
}

export default Nav;