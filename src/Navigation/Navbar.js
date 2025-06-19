import React, { useEffect, useState } from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileImage from '../Images/profile.jpg';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg custom-navbar sticky-top ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand fw-bold d-flex align-items-center" href="#home">
          <img src={profileImage} className="logo-img me-2" alt="Dipak Shelake" />
          Dipak Shelake
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((section, i) => (
              <li className="nav-item" key={i}>
                <a className="nav-link" href={`#${section.toLowerCase()}`}>{section}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        className="btn btn-sm btn-outline-light ms-3 rounded-pill"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? '☀ Light' : '🌙 Dark'}
      </button>
          </nav>
    
  
  );
};

export default Navbar;
