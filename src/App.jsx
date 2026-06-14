// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';

import './index.css';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="education">
          <Education />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="certifications">
          <Certifications />
        </div>

        <div id="achievements">
          <Achievements />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;