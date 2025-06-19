// ✅ src/components/Experience.js
import React from 'react';
import './Experience.css';

const experienceData = [
  {
    type: 'Experience',
    title: 'Full Stack Developer Intern',
    company: 'Startlazaa Pvt Ltd',
    date: 'May 2024 – Sept 2024',
    location: 'Onsite',
    points: [
      'Developed "Telims" and "Thealth" using ASP.NET, Bootstrap, and SQL Server.',
      'Worked on front-end UIs, backend logic, and database integration.',
      'Wrote clean, scalable code in a real-time collaborative team.',
    ],
  },
  {
    type: 'Freelance',
    title: 'Web UI Designer',
    company: 'Binated Inc.',
    date: 'Sept 2024 – Present',
    location: 'Onsite',
    points: [
      'Built "Promolink" — task & order dashboard for internal use.',
      'Designed UIs using HTML, CSS, Bootstrap, JavaScript, React JS, and Photoshop.',
      'Collaborated with developers to match client requirements.',
    ],
  },
];

const educationData = [
  {
    type: 'Education',
    title: 'B.Sc. Computer Science',
    institution: 'Rajarshi Chhatrapati Shahu College, Kolhapur (Shivaji University)',
    date: '2021 – 2024',
    result: 'Aggregate: 76.22%',
  },
  {
    type: 'Education',
    title: 'HSC – Science',
    institution: 'Rajarshi Chhatrapati Shahu College, Kolhapur',
    date: '2020 – 2021',
    result: '61.50%',
  },
  {
    type: 'Education',
    title: 'SSC',
    institution: 'Shrimant Karanshing Gaikwad Madhyamik Vidyalay, Sonurle',
    date: '2018 – 2019',
    result: '73%',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section py-5 bg-white">
      <div className="container">
        <h2 className="text-center text-primary fw-bold mb-5">Experience & Education</h2>

        {/* Experience Timeline */}
        <h4 className="fw-semibold mb-4">💼 Professional Experience</h4>
        <div className="timeline">
          {experienceData.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-icon">💼</div>
              <div className="timeline-content shadow-sm rounded-3">
                <h5 className="fw-bold">{exp.title}</h5>
                <p className="mb-1"><strong>{exp.company}</strong> — {exp.location}</p>
                <small className="text-muted">{exp.date}</small>
                <ul className="mt-2">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education Timeline */}
        <h4 className="fw-semibold mt-5 mb-4">🎓 Education</h4>
        <div className="timeline">
          {educationData.map((edu, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-icon">🎓</div>
              <div className="timeline-content shadow-sm rounded-3">
                <h5 className="fw-bold">{edu.title}</h5>
                <p className="mb-1"><strong>{edu.institution}</strong></p>
                <small className="text-muted">{edu.date}</small>
                <p className="mt-2">{edu.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
