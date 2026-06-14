import React from 'react';

const ProjectCard = ({ title, description, tech, icon, github }) => {
  return (
    <div className="card project-card">
      <div
        className="project-img"
        style={{
          fontSize: '3rem',
          textAlign: 'center',
          padding: '30px'
        }}
      >
       
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginTop: '16px'
        }}
      >
        {tech.map((t, i) => (
          <span
            key={i}
            style={{
              background: '#f0e7db',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.75rem',
              color: '#5c3a1a'
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
        style={{
          marginTop: '20px',
          display: 'inline-block'
        }}
      >
         Open Repository
      </a>
    </div>
  );
};

export default ProjectCard;