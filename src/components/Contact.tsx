// src/components/Contact.tsx
import React from 'react';
import Navbar from './Navbar';
import Shape2 from '../images/shape2.png';

const Contact: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="contact-section">
        <h2>Contact Addison!</h2>
        <img src={Shape2} alt="Decorative Shape" className="skills-shape" />
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="message" placeholder="Your Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
