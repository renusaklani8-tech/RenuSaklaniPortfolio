// pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section>
     <div className="contact-info">
  <h3>Get in Touch</h3>

  <div className="info-item">
  <span>📧</span>

  <a href="mailto:renusaklani101@gmail.com">
    renusaklani101@gmail.com
  </a>
</div>

  <div className="info-item">
    <span>📍 Chhatrapati Sambhajinagar, Maharashtra</span>
  </div>

<div className="info-item">
  <span>🔗 LinkedIn: 
    <a href="https://www.linkedin.com/in/renusaklani27" target="_blank" rel="noopener noreferrer">
      View Profile
    </a>
  </span>
</div>

<div className="info-item">
  <span>💻 GitHub: 
    <a href="https://github.com/renusaklani8-tech" target="_blank" rel="noopener noreferrer">
      View Repositories
    </a>
  </span></div>
  <div className="info-item">
    <span>🎓 Computer Science Engineering Student</span>
  </div>

  <div style={{ marginTop: '32px' }}>
    <p>
      Currently seeking internship opportunities and open to
      learning, collaboration, and new experiences in the
      field of software development and technology.
    </p>
  </div>
</div>
    </section>
  );
};

export default Contact;