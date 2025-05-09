import React from 'react';
import '../styles/Contact.css';
import '../styles/sections.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <div className='content_section'>
      <div id="contact">
        <hr className='contact-divider' />
        <hr className='contact-divider' />
        <h3>Connect with me!</h3>
        
        <div className="contact-icons">
          <a href="mailto:palak.sharma845@gmail.com" target="_blank" rel="noopenner noreferrer">
              <FaEnvelope size={30} />
          </a>
          <a href="https://www.linkedin.com/in/palak-sharma-3920a4216/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/pal-sha" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </div>
        {/* <p>Or reach out via <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</a></p> */}
      </div>
    </div>
  );
}

export default Contact;
