import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Amina Mallouk</h3>
                            <span>Computer Science Engineer, Morocco</span>
                        </div>
                    </div>
                    <p>As a Computer Science Engineer, I bring technical prowess to our digital marketing solutions. My expertise empowers Assirem Media to innovate and optimize strategies that propel our clients to the forefront of the beauty industry.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Yahya Gadi</h3>
                            <span>Telecom and Network Engineer ,Morocco</span>
                        </div>
                    </div>
                    <p>As a Telecommunications and Network Engineer, I bring a wealth of knowledge in network infrastructure and digital communications. My expertise ensures robust and secure digital platforms, and connectivity of Assirem Media’s services.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Aicha Attijji</h3>
                            <span>engineer, Morocco</span>
                        </div>
                    </div>
                    <p>As an engineer specializing in social media and advertising,I expertly blend technical acumen with digital creativity. My skills ensure our campaigns are both innovative and impactful, driving engagement and growth for Assirem Media's clients.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>James bridge</h3>
                            <span>Designer, USA</span>
                        </div>
                    </div>
                    <p>As a designer, I combine artistic vision with practical design solutions. My creative prowess is essential in crafting visually compelling and effective marketing materials for Assirem Media's clients.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
