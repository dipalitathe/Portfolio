// ✅ src/components/Footer.js
import React from 'react';
import './Footer.css'
const Footer = () => (
  <footer className="bg-dark text-light py-4 mt-5 footer">
    <div className="container text-center">
      <p className="mb-2">
        © {new Date().getFullYear()} <strong>Dipak Shelake</strong>. All Rights Reserved.
      </p>
      <div>
        <a
          href="mailto:dipakarnav1432@gmail.com"
          className="text-decoration-none text-light mx-3 footer-link"
        >
          📧 Email
        </a>
        <a
          href="https://linkedin.com/in/dipak-shelake-7635692b9"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none text-light mx-3 footer-link"
        >
          🔗 LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
