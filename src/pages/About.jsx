// pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <section>
      <div className="container">
        <h2>About Me</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            marginTop: '32px',
          }}
        >
          <div className="card">
            <h3>Who am I?</h3>

            <p style={{ marginTop: '16px', color: '#4a3b2c' }}>
              I am a Computer Science Engineering student with an interest
              in software development, database systems, software testing,
              and DevOps. I enjoy learning new technologies and applying
              them through projects to strengthen my technical skills.
            </p>

            <p style={{ marginTop: '16px', color: '#4a3b2c' }}>
              Through coursework, certifications, and personal projects,
              I continue to build my understanding of programming,
              databases, testing methodologies, and modern development
              practices.
            </p>


<p style={{ marginTop: '16px', color: '#4a3b2c' }}>
  Beyond academics, I enjoy public speaking and presentations. My
  experience as an event anchor has helped me develop confidence,
  communication skills, and the ability to engage with diverse audiences.
</p>
</div>
<div className="card">
<h3>Academic Focus</h3>
<p style={{ marginTop: '16px', color: '#4a3b2c' }}>
  My coursework and projects have helped me develop an understanding of
  programming, database systems, software testing, and web technologies.
  I am interested in gaining practical experience and expanding my
  knowledge through internships and hands-on projects.
</p>
<blockquote
              style={{
                marginTop: '24px',
                borderLeft: '4px solid #8b5a2b',
                padding: '12px 20px',
                background: '#fff7ef',
                borderRadius: '16px',
              }}
            >
              "Continuous learning and practical experience are the keys to
              becoming a better engineer."
            </blockquote>
          </div>
          <div className="card" style={{ marginTop: "12px", background: "#fffaf3", borderLeft: "4px solid #8b5a2b" }}>
  <h3 style={{ color: "#1e3a5f" }}>Minor in Fintech</h3>

  <p style={{ marginTop: "12px", color: "#4a3b2c" }}>
   Along with Computer Science Engineering, I have explored FinTech as a minor area,
    including fundamentals of investment management, e-commerce systems, and how
    financial institutions operate in digital environments.<br></br>
    
     This exposure has helped me understand how technology supports financial systems,
    online transactions, and modern digital business platforms.  </p>
</div>
        </div>
      </div>
    </section>
  );
};

export default About;