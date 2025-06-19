// ✅ src/components/Skills/Skills.js
import React from 'react';
import './Skills.css';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaDatabase,
} from 'react-icons/fa';
import { SiMysql, SiDotnet } from 'react-icons/si';

const skills = [
  { name: 'React.js', icon: <FaReact />, category: 'Frontend' },
  { name: 'JavaScript', icon: <FaJsSquare />, category: 'Frontend' },
  { name: 'HTML5', icon: <FaHtml5 />, category: 'Frontend' },
  { name: 'CSS3', icon: <FaCss3Alt />, category: 'Frontend' },
  { name: 'Bootstrap', icon: <FaBootstrap />, category: 'Frontend' },
  { name: 'ASP.NET', icon: <SiDotnet />, category: 'Backend' },
  { name: 'SQL Server', icon: <FaDatabase />, category: 'Database' },
  { name: 'MySQL', icon: <SiMysql />, category: 'Database' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-white">
      <div className="container-fluid px-4 px-md-5">
        <h2 className="text-center mb-5 fw-bold text-primary">Skills</h2>
        <div className="row gy-4">
          {skills.map((skill, i) => (
            <div className="col-6 col-md-3" key={i}>
              <div className="skill-card text-center p-4 shadow-sm rounded-3 h-100">
                <div className="skill-icon mb-3 text-primary">{skill.icon}</div>
                <h6 className="fw-semibold">{skill.name}</h6>
                <p className="text-muted small mb-0">{skill.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
