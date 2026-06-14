// pages/Certifications.jsx
import React from 'react';

const certificates = [
  {
    name: 'Software Testing',
    issuer: 'NPTEL',
    year: '2026',
    icon: '🏆',
    details:
      'Elite + Silver Certification | Score: 75% | Top 5% among 3707 certified candidates',
  },

  {
    name: 'HTML Training',
    issuer: 'Spoken Tutorial',
    year: '2025',
    icon: '🌐',
    details: 'Successfully completed HTML training and assessment.',
  },

  {
    name: 'Python Training',
    issuer: 'Spoken Tutorial',
    year: '2025',
    icon: '🐍',
    details: 'Successfully completed Python training and assessment.',
  },

  {
    name: 'AI Python Training',
    issuer: 'Spoken Tutorial',
    year: '2025',
    icon: '🤖',
    details: 'Completed AI Python training and assessment.',
  },

  {
    name: 'Introduction to Computers',
    issuer: 'spoken tutorial',
    year: '2025',
    icon: '💻',
    details: 'Certificate of Completion for Introduction to Computers Training.',
  },
  {
    name: 'Hashgraph Developer Course',
    issuer: 'hedera',
    year: '2025',
    icon: '💻',
    details: ' completed the Hashgraph Developer Course on 12-SEP-2025',
  },
];

const Certifications = () => {
  return (
    <section>
      <div className="container">
        <h2>Certifications</h2>

        <div className="certs-grid">
          {certificates.map((cert, idx) => (
            <div className="card" key={idx}>
              <div
                style={{
                  fontSize: '2.8rem',
                  marginBottom: '12px',
                }}
              >
                {cert.icon}
              </div>

              <h3>{cert.name}</h3>

              <p
                style={{
                  color: '#8b5a2b',
                  marginTop: '8px',
                }}
              >
                {cert.issuer} • {cert.year}
              </p>

              <p
                style={{
                  marginTop: '10px',
                }}
              >
                {cert.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;