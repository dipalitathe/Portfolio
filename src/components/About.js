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
            alt="Dipali Dinkar Tathe"
            className="img-fluid rounded-circle shadow"
            style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover', width: '300px', maxHeight: '300px' }}
          />
        </div>

        {/* Bio Content */}
        <div className="col-md-7" data-aos="fade-left">
          <h2 className="mb-3">About Me</h2>
          <p className="lead fst-italic text-primary">“Code. Create. Grow.”</p>
          <p>
            I'm <strong>Dipali Dinkar Tathe</strong>, a passionate Front-End Developer from Parbhani, Maharashtra.
            I specialize in building responsive and dynamic web applications using <strong>HTML, CSS, JavaScript, Bootstrap, React JS</strong>, with additional knowledge in <strong>Core Java</strong>.
          </p>
          <p>
            With hands-on experience in projects like <strong>Smart Agri, Hostel Management System, and Magic Tea</strong>, I focus on user-centric design and clean coding practices.
          </p>
          <p>
            I’m always excited to bring ideas to life through intuitive web interfaces and well-structured frontend solutions.
          </p>

          <ul className="list-unstyled mt-4" style={{ lineHeight: '40px' }}>
            <li><strong>📍 Location:</strong> A/p Warkhed, Tal- Pathri, Dist-Parbhani, Maharashtra, 431506</li>
            <li><strong>🎓 College:</strong> Willingdon College, Sangli</li>
            <li><strong>🎓 Degree:</strong> B.Sc. Computer Science (72.36%)</li>
            <li><strong>🌟 Career Goal:</strong> Front-End Developer & Freelancer</li>
            <li><strong>🗓 Age / DOB:</strong> 22 years / 20 Jan 2002</li>
            <li><strong>📧 Email:</strong> dipalidinkartathe491@gmail.com</li>
            <li>
              <strong>🔗 LinkedIn:</strong>{' '}
              <a href="https://linkedin.com/in/dipali-tathe" target="_blank" rel="noreferrer">
                dipali-tathe
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;