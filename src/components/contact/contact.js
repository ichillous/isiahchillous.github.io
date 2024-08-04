import React from 'react';
import { Phone, Github, Linkedin, Mail } from 'lucide-react';
import './contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="text-center mb-5">Contact Me</h2>
        <div className="contact-icons">
          <a href="tel:+16145965899" target="_blank" rel="noopener noreferrer" className="contact-icon">
            <Phone size={40} />
          </a>
          <a href="https://github.com/ichillous/" target="_blank" rel="noopener noreferrer" className="contact-icon">
            <Github size={40} />
          </a>
          <a href="https://www.linkedin.com/in/isiah-chillous/" target="_blank" rel="noopener noreferrer" className="contact-icon">
            <Linkedin size={40} />
          </a>
          <a href="mailto:isiah.chillous@gmail.com" className="contact-icon">
            <Mail size={40} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;