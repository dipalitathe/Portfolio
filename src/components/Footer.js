import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="bg-dark text-light py-4 mt-5 footer">
    <div className="container text-center">
      <p className="mb-2">
        © {new Date().getFullYear()} <strong>Dipali Dinkar Tathe</strong>. All Rights Reserved.
      </p>
      <div>
        <a
          href="mailto:dipalidinkartathe491@gmail.com"
          className="text-decoration-none text-light mx-3 footer-link"
        >
          📧 Email
        </a>
        <a
          href="https://www.linkedin.com/in/dipali-tathe-373b69356/"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none text-light mx-3 footer-link"
        >
          🔗 LinkedIn
        </a><a
          href="https://github.com/dipalitathe/AboutME"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none text-light mx-3 footer-link"
        >
          🔗 Github
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
