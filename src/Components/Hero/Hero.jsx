import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Join the Revolution in Beauty Marketing</h1>
        <p>Collaborate with our team of experts and revolutionize your approach to beauty marketing. Contact us to find out how our customized strategies can help you conquer the market.</p>
        <Link to='about' smooth={true} offset={-150} duration={500} className='btn'>Explore more <img src={dark_arrow} alt="" /></Link>
      </div>
    </div>
  )
}

export default Hero
