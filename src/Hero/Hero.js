import React from 'react';
import './Hero.css';
import drone from '../Images/Drone.png';
import shadow from '../Images/Shadow.png';

const Hero = () => {

  return (
    <div className='Hero'>
      <img className='hero-img' src={drone}/>
      <img className='img-shadow' src={shadow}/>
      <h1 className='hero-title'>F-210</h1>
      <p className='hero-text'>"THE FASTEST DRONE ON THE PLANET"</p>
      <p className='hero-text2'>"The - The Wirecutter</p>
    </div>
  )
}

export default Hero;