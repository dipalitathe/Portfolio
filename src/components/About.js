// ✅ src/components/About.js
import React from 'react';
import profileImage from '../Images/profile.jpg';

const About = () => (
  <section id="about" className="py-5 bg-white text-dark">
    <div className="container">
      <div className="row align-items-center">
        {/* Profile Picture */}
        <div className="col-md-5 mb-4 mb-md-0 text-center" data-aos="fade-right">
          <img
            src={profileImage}
            alt="Dipak Shelake"
            className="img-fluid rounded-circle shadow"
            style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover', width: '300px', maxHeight: '300px' }}
          />
        </div>

        {/* Bio Content */}
        <div className="col-md-7" data-aos="fade-left">
          <h2 className="mb-3">About Me</h2>
          <p className="lead fst-italic text-primary">“Code. Create. Grow.”</p>
          <p>
            I'm <strong>Dipak Shelake</strong>, a 22-year-old passionate Software Developer from Kolhapur, Maharashtra.
            I specialize in building full-stack applications using <strong>React, JavaScript, ASP.NET, SQL, and Bootstrap</strong>.
          </p>
          <p>
            Currently working at <strong>Binated Inc</strong> as a UI Designer, where I contribute to task and order management platforms.
            I also interned at <strong>Startlazaa Pvt Ltd</strong> as a Full Stack Developer using ASP.NET.
          </p>
          <p>
            I’m always excited to build user-friendly, scalable software — whether through freelancing or joining collaborative product teams.
          </p>

          <ul className="list-unstyled mt-4" style={{ lineHeight: '40px' }}>
            <li><strong>📍 Location:</strong> Kolhapur, Maharashtra</li>
            <li><strong>🎓 College:</strong> Rajarshi Chhatrapati Shahu College, Kolhapur</li>
            <li><strong>🎓 Degree:</strong> B.Sc. Computer Science (76.22%)</li>
            <li><strong>🎯 Career Goal:</strong> Full-time Software Developer, Freelancer</li>
            <li><strong>📅 Age / DOB:</strong> 22 years / 01 April 2003</li>
            <li><strong>📧 Email:</strong> dipakarnav1432@gmail.com</li>
            <li>
              <strong>🔗 LinkedIn:</strong>{' '}
              <a href="https://linkedin.com/in/dipak-shelake-7635692b9" target="_blank" rel="noreferrer">
                Dipak-Shelke
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
