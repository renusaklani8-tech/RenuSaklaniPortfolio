// pages/Home.jsx
import React from "react";

const Home = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <h1>
          Hello, I'm <span>Renu Saklani</span>
          <br />
          Computer Science Engineering Student
        </h1>

        <p>
          Computer Science Engineering student with interests in DevOps,
          Database Management Systems, Software Testing, and Web Development.
          Passionate about learning modern technologies and building practical
          solutions while exploring cloud and automation tools.
        </p>

        <div>
          <a href="#projects" className="btn">
            View Projects
          </a>

          <a
            href="#contact"
            className="btn btn-outline"
            style={{ marginLeft: "16px" }}
          >
            Contact Me
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <h3>5+</h3>
            <p>Projects</p>
          </div>

          <div className="stat">
            <h3>8.02</h3>
            <p>CGPA</p>
          </div>

          <div className="stat">
            <h3>5+</h3>
            <p>Certifications</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;