import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import insta_icon from '../../assets/insta-icon.png'
import linkedin_icon from '../../assets/linkedin-icon.png'
import location_icon from '../../assets/location-icon.png'
import find_icon from '../../assets/find-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      // ------Enter your web3forms access key below-------
      
      formData.append("access_key", "a9c557d8-6208-40fa-8d92-e1bb56da5a45");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
        setResult(res.message);
        event.target.reset();
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
    };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our digital marketing agency.</p>
        <ul>
            <li><img src={mail_icon} alt="" />contact@assiremmedia.com</li>
            <li><img src={phone_icon} alt="" />+212 684848861</li>
        </ul>
        <h3>Find Us On <img src={find_icon} alt="" /></h3>
        <ul>
            <li><a href="https://www.instagram.com/assiremmedia/" target="_blank"><img src={insta_icon} alt=""/> instagram </a></li>
            <li><a href="https://www.linkedin.com/company/assirem-mediaa" target="_blank"><img src={linkedin_icon} alt="" />linkedin</a></li>
        </ul>

      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='submit-btn'>Submit now </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
