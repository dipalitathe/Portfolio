// ✅ src/App.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navigation/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      if (cursor) {
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <section
        id="home"
        className="hero-section d-flex flex-column justify-content-center align-items-center text-center"
      >
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Dipak Shelake</span>
        </h1>
        <p className="hero-subtitle">
          Software Developer | Full Stack Engineer | UI Designer
        </p>
        <div className="hero-buttons mt-4">
          <a href="#projects" className="btn btn-primary me-3">
            View Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1bTqShviKD9EtBZXvNEQOMWkf3pXirktV/view?usp=sharing"
            className="btn btn-outline-light"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
        <div className="custom-cursor" id="cursor"></div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
