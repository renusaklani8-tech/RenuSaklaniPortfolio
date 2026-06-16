// pages/Achievements.jsx
import React from 'react';

const achievements = [
  {
    title: 'NPTEL Software Testing',
    desc: 'Earned Elite + Silver certification and secured a position in the Top 5% among 3707 certified candidates.',
    icon: '🏆',
  },

  {
    title: '2nd Prize - Tech Escape Room',
    desc: 'Secured 2nd place in the Tech Escape Room competition during Swayambhu 2026.',
    icon: '🥈',
  },

  {
    title: 'Event Anchor - Razzmatazz 2026',
    desc: 'Performed anchoring responsibilities and coordinated stage activities during the college event.',
    icon: '🎤',
  },


];

const Achievements = () => {
  return (
    <section>
      <div className="container">
        <h2>Achievements</h2>

        <div className="achievements-grid">
          {achievements.map((item, idx) => (
            <div className="card" key={idx}>
              <div
                style={{
                  fontSize: '2.8rem',
                  marginBottom: '12px',
                }}
              >
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p
                style={{
                  color: '#4a3b2c',
                  marginTop: '8px',
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
