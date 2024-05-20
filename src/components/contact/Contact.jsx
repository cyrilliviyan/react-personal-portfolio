import React from 'react'
import images from '../../assets/images.png';
import './contact.css';
function Contact() {
  return (
    <div className='contact' id="contact">
    <div className="contact-content">
      <p>CONNECT WITH ME</p>

     
      <div class="social-links">
             <img src={images} alt=""  className='image-1'/><img src="" alt="" /><img src="" alt="" /><img src="" alt="" />
      </div>
      <input type="text" placeholder='name' />
      <input type="email" placeholder='email'  />
      <textarea name="Message" id="message"></textarea>
    </div>
  </div>
  )
}

export default Contact
