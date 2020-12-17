import React from 'react';
import './Hero.css';
import drone from '../Images/Drone.png';
import shadow from '../Images/Shadow.png';

const Hero = () => {

  return (
    <div className='Hero'>
      <img className='hero-img' src={drone}/>
      <img className='img-shadow' src={shadow}/>
    </div>
  )
}

export default Hero;