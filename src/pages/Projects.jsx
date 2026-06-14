// pages/Projects.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projectsData = [
  {
    title: 'Quickbit',
    description:
      'A full-stack on-demand home services platform connecting users with verified service professionals. Features role-based authentication, booking management, OTP verification, SOS emergency alerts, location tracking, women safety measures, and an admin dashboard.',
    tech: ['Node.js', 'Express.js', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    icon: '🚀',
    github: "https://github.com/renusaklani8-tech/Quickbit.git"
  },

  {
    title: 'Facial Emotion Detector & Song Recommendation System',
    description:
      'An AI-based application that detects user emotions and recommends songs accordingly using machine learning concepts for emotion analysis and recommendation.',
    tech: ['Python', 'Machine Learning', 'AI'],
    icon: '🎵',
    github: "https://github.com/renusaklani8-tech/FacialEmotionDetector-SongRecommendator.git"
  },

  {
    title: 'E-Commerce Website',
    description:
      'Developed an online shopping platform with user authentication, product listing, shopping features, and order management functionality.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MySQL'],
    icon: '🛒',
    github: "https://github.com/renusaklani8-tech/blushberry-E-Commerce-website-.git"
  },

  {
    title: 'Cafe Ordering System',
    description:
      'A digital cafe ordering application designed to manage menu items and customer orders with a responsive and user-friendly interface.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: '☕',
    github: "https://github.com/renusaklani8-tech/cafe-ordering-system.git"
  },

  {
    title: 'To-Do List Application',
    description:
      'A task management application for organizing daily activities with features for adding, updating, and removing tasks.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: '✅',
    github: "https://github.com/renusaklani8-tech/ToDoList.git"
  },
];

const Projects = () => {
  return (
    <section>
      <div className="container">
        <h2>Academic Projects</h2>

        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;