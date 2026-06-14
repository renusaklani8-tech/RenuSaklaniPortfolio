// components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">

        <a href="#home" className="logo">
          Renu <span>Saklani</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;