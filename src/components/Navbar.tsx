// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed

const Navbar: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/#about">About Me</Link></li>
          <li><Link to="/#skills">My Skills</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
