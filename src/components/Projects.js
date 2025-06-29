// ✅ src/components/Projects/Projects.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css';
import smartAgriImg from '../Images/SmartAgri.jpeg';
import hostelImg from '../Images/HostelManagementSystem.jpeg';
import magicTeaImg from '../Images/MagicTea.jpeg';

const projects = [
  {
    title: 'Smart Agri',
    tech: ['React JS', 'Bootstrap', 'JavaScript'],
    description:
      'Built a responsive agricultural web app for real-time crop tracking and data visualization.',
    image: smartAgriImg,
    demo: 'unavailable',
    github: '#',
  },
  {
    title: 'Hostel Management System',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    description:
      'Created a web-based system to manage hostel rooms, forms, dashboards, and student data.',
    image: hostelImg,
    demo: 'unavailable',
    github: '#',
  },
  {
    title: 'Magic Tea',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Designed a visually engaging site for a tea brand to enhance customer experience.',
    image: magicTeaImg,
    demo: 'unavailable',
    github: '#',
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleDemoClick = (url) => {
    if (url === 'unavailable') {
      alert('❌ Demo currently unavailable.');
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 text-primary fw-bold">Projects</h2>
        {projects.map((proj, index) => (
          <div
            className={`row align-items-center mb-5 ${
              index % 2 !== 0 ? 'flex-row-reverse' : ''
            }`}
            key={index}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
            <div className="col-md-6 mb-3 mb-md-0">
              <img
                src={proj.image}
                alt={proj.title}
                style={{
                  width: '70%',
                  height: '220px',
                  display: 'block',
                  margin: 'auto',
                }}
                className="img-fluid rounded shadow project-thumb"
              />
            </div>
            <div className="col-md-6">
              <div className="glass-card p-4 rounded-4">
                <h3 className="fw-bold">{proj.title}</h3>
                <div className="mb-2">
                  {proj.tech.map((tech, i) => (
                    <span className="badge bg-primary me-2 mb-1" key={i}>
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-muted">{proj.description}</p>
                <div className="d-flex gap-3 mt-3 flex-wrap">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => handleDemoClick(proj.demo)}
                  >
                    🌐 Live Demo
                  </button>
                  <a
                    href={proj.github}
                    className="btn btn-outline-dark btn-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    🐙 GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
