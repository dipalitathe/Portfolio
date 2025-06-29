import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_j6wix83',
        'template_cwqsobp',
        form.current,
        'LCWzExb7oE5izamMB'
      )
      .then(
        () => {
          alert('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('❌ Failed to send message. Please try again.');
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="text-center text-primary fw-bold mb-3">Contact Me</h2>
        <p className="text-center text-muted mb-3">
          Whether you have a question, a project, or just want to say hi — I'm always open to connect!
        </p>
        <p className="text-center mb-3 freelance-note">
          ✅ Available for freelance & contract-based projects.
        </p>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="contact-card">
              <div className="row g-4">
                {/* Contact Info Block */}
                <div className="col-12 col-md-4 border-end">
                  <div className="h-100 d-flex flex-column justify-content-center">
                    <h5 className="fw-bold mb-3">📬 Contact Details</h5>
                    <p className="mb-2"><strong>Email:</strong><br /> dipalidinkartathe491@gmail.com</p>
                    <p className="mb-2"><strong>Phone:</strong><br /> +91 93222 53840</p>
                    <p className="mb-2"><strong>Location:</strong><br /> Parbhani, Maharashtra, India</p>
                    <p className="mb-2"><strong>Availability:</strong><br /> Remote / Onsite</p>
                    <div className="mt-3 d-flex gap-2">
                      <a href="https://github.com/dipalitathe/AboutME" style={{ height: '40px', width: '100px', padding: '7px' }} className="btn btn-sm btn-dark rounded-pill" target="_blank" rel="noreferrer">GitHub</a>
                      <a href="https://www.linkedin.com/in/dipali-tathe-373b69356/" style={{ height: '40px', width: '100px', padding: '7px' }} className="btn btn-sm btn-primary rounded-pill" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="col-12 col-md-8">
                  <form ref={form} onSubmit={sendEmail}>
                    <h5 className="fw-bold mb-4">📨 Send Me a Message</h5>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Your Name</label>
                      <input type="text" name="name" className="form-control" placeholder="Your full name" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Your Email</label>
                      <input type="email" name="email" className="form-control" placeholder="you@example.com" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Your Message</label>
                      <textarea name="message" rows="6" className="form-control" placeholder="Write your message here..." required></textarea>
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn-success px-4 rounded-pill">Send Message</button>
                    </div>
                  </form>
                </div>

              </div> {/* row */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
