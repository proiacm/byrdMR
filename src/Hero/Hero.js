import React from 'react';
import './Hero.css';
import drone from '../Images/Drone.png';

const Hero = () => {

  return (
    <div className='Hero'>
      <img className='hero-img' src={drone}/>
    </div>
  )
}

export default Hero;