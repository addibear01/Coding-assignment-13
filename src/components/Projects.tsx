// src/components/Projects.tsx
import React from 'react';
import Navbar from './Navbar';
import Shape2 from '../images/shape2.png';

const Projects: React.FC = () => {
  return (
    <>
      <Navbar />
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <img src={Shape2} alt="Decorative Shape" className="skills-shape" />
        <div className="project-item">
          <h3>Digital Recipe Book</h3>
          <p>(HTML, CSS, JavaScript, PHP)</p>
          <a href="WebsiteURL" target="_blank" rel="noopener noreferrer">WebsiteURL</a>
        </div>
        <div className="project-item">
          <h3>Pastaddi Website</h3>
          <p>(HTML, CSS)</p>
          <a href="WebsiteURL" target="_blank" rel="noopener noreferrer">WebsiteURL</a>
        </div>
        <div className="project-item">
          <h3>Portfolio Wireframe</h3>
          <a href="URL" target="_blank" rel="noopener noreferrer">URL</a>
        </div>
      </section>
    </>
  );
}

export default Projects;
