// pages/Skills.jsx
import React from "react";

const skillsData = {
  Programming: ["Python", "JavaScript", "C++"],
  Web: ["HTML", "CSS", "React", "jQuery"],
  Backend: ["Node.js", "Express.js"],
  Database: ["MySQL", "Mongodb"],
  Testing: ["Software Testing"],
  Tools: ["Git", "GitHub", "VS Code"]
};

const Skills = () => {
  return (
    <section>
      <div className="container">
        <h2>Skills</h2>

        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div className="card" key={category}>
              <h3>{category}</h3>

              <ul
                style={{
                  marginTop: "16px",
                  paddingLeft: "20px",
                  lineHeight: "2"
                }}
              >
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;