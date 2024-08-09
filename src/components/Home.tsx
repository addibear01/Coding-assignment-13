// src/components/Home.tsx
import React from 'react';
import Navbar from './Navbar';
import Contact from './Contact';
import MyButton from './MyButton/MyButton';
import MyHeroImage from './MyHeroImage/MyHeroImage';
import Image from '../images/Image.png';
import Shape1 from '../images/shape1.png';
import Shape3 from '../images/shape3.png';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <section id="about" className="about-section">
      <img src={Shape1} alt="Decorative Shape" className="about-shape" />
        <div className="about-content">
          <div className="about-image-container">
            <MyHeroImage src={Image}></MyHeroImage>
          </div>
          <div className="intro">
            <h1>Addison Janzen-Winter</h1>
            <h2>Frontend Developer</h2>
            <MyButton label='Contact Me!' onClick={() => window.location.href = "/contact"}></MyButton>
          </div>
        </div>
        
        <div className="about-text">
          <h2>About Me</h2>
          <p className="p1">Hello, my name is Addison, and I am enthusiastic and motivated individual. </p><p className="p5">Although I am just starting out, I am eager to apply the knowledge and skills I have gained through my education and personal projects.</p>
          <p className="p2">I am currently taking the Full Stack Web Development program at Red River College Polytechnic, which has provided me with a solid foundation in programming, databases, and designing interfaces. </p>
          <p className="p3">I am passionate about frontend development, and I am committed to continuous learning and professional development. I thrive in dynamic environment and am always looking for opportunities to grow and contribute.</p>
          <p className="p4">I enjoy baking, cooking and spending time with my family which help me maintain a balanced and creative approach to my work.</p>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2>My Skills</h2>
        <img src={Shape3} alt="Decorative Shape" className="projects-shape" />
        <div className="skills-container">
          <div className="skill-category">
            <h3>Soft Skills</h3>
            <ul>
              <li>Communication - verbal and written</li>
              <li>Teamwork</li>
              <li>Problem Solving</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Coding Skills</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Other Skills</h3>
            <ul>
              <li>Figma - Wireframing</li>
              <li>Eye for Design</li>
              <li>Attention to Detail</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tech Skills</h3>
            <ul>
              <li>VS Code</li>
              <li>Docker</li>
              <li>MS Suite</li>
            </ul>
          </div>
        </div>
      </section>

      
    </>
  );
}

export default Home;
