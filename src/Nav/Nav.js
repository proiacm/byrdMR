import React from 'react';
import './Nav.css';
import {Link} from 'react-scroll';

const Nav = () => {

  return (
    <div className='Nav'>
      <Link className='nav-li-left' style={{ cursor: "pointer"}} to="store" spy={true} smooth={true}><u>Store</u></Link>
      <Link className='nav-li-left' style={{ cursor: "pointer"}} to="tutorials" spy={true} smooth={true}><u>Tutorials</u></Link>
      <Link className='nav-li-right' style={{ cursor: "pointer"}} to="blog" spy={true} smooth={true}><u>Blog</u></Link>
      <Link className='nav-li-right' style={{ cursor: "pointer"}} to="contact" spy={true} smooth={true}><u>Contact</u></Link>
    </div>
  )
}

export default Nav;