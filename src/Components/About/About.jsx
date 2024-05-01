import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
      </div>
      <div className="about-right">
        {/* <h3>ABOUT OUR AGENCY</h3>
        <h2>Are you ready to elevate your beauty brand?</h2> */}
        <p>At Assirem Media, we are dedicated to transforming beauty brands into digital leaders. With deep industry knowledge and a passion for creativity, we pioneer marketing solutions that captivate and convert.</p>
        <p>Our mission is to empower beauty centers with cutting-edge digital marketing strategies that drive growth, enhance online presence, and build lasting relationships with their audiences.</p>
        <p>Our team at Assirem Media consists of engineers, creative designers, and technical experts, all united by a shared passion for beauty and innovation. Each member brings a wealth of experience and fresh perspectives to our projects, enriching our approach and driving superior outcomes. Founded to bridge the gap between technical innovation and aesthetic excellence, Assirem Media is committed to elevating the standards of digital marketing in the beauty industry.</p>
      </div>
    </div>
  )
}

export default About
