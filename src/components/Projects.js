// ✅ src/components/Projects/Projects.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css';
import ecommerceImg from '../Images/E-Commerce Medicine.jpeg';
import hostelImg from '../Images/Hostel Management System.jpeg';
import dairyImg from '../Images/Dairy Management System.jpg';
import telimsImg from '../Images/Telims (Lab Management).jpeg';
import thealthImg from '../Images/Thealth (Hospital Management).jpeg';
import promolinkImg from '../Images/Promolink (Current).png';
const projects = [
  {
    title: 'E-Commerce Medicine',
    tech: ['ASP.NET', 'SQL Server'],
    description: 'Online pharmacy platform to browse, search, and order medicines with a smooth user experience.',
    image: ecommerceImg,
    demo: '#',
    github: '#',
  },
  {
    title: 'Hostel Management System',
    tech: ['ASP.NET', 'SQL Server'],
    description: 'Desktop application to manage hostel operations like room allocation, student data, and payments.',
    image: hostelImg,
    demo: '#',
    github: '#',
  },
  {
    title: 'Dairy Management System',
    tech: ['ASP.NET', 'SQL Server'],
    description: 'Web application to handle dairy product management, supply tracking, and customer billing.',
    image: dairyImg,
    demo: '#',
    github: '#',
  },
  {
    title: 'Telims (Lab Management)',
    tech: ['ASP.NET', 'Bootstrap', 'SQL Server'],
    description: 'A medical lab management system to handle test orders, lab staff, and report generation.',
    image: telimsImg,
    demo: 'unavailable',
    github: '#',
  },
  {
    title: 'Thealth (Hospital Management)',
    tech: ['ASP.NET', 'SQL Server'],
    description: 'Hospital management platform for tracking patient details, staff, appointments, and billing.',
    image: thealthImg,
    demo: 'unavailable',
    github: '#',
  },
  {
    title: 'Promolink (Current)',
    tech: ['React', 'JavaScript', 'Bootstrap'],
    description: 'Web application for task management and customer order processing, used internally at Binated Inc.',
    image: promolinkImg,
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
            className={`row align-items-center mb-5 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
            key={index}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
            <div className="col-md-6 mb-3 mb-md-0">
              <img
                src={proj.image}
                alt={proj.title}
                style={{width:'70%',height:'220px',display:'block', margin:'auto'}}
                className="img-fluid  rounded shadow project-thumb"
              />
            </div>
            <div className="col-md-6">
              <div className="glass-card p-4 rounded-4">
                <h3 className="fw-bold">{proj.title}</h3>
                <div className="mb-2">
                  {proj.tech.map((tech, i) => (
                    <span className="badge bg-primary me-2 mb-1" key={i}>{tech}</span>
                  ))}
                </div>
                <p  className="text-muted">{proj.description}</p>
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
