import hassaanImg from './assets/hassaan.jpg';
import './App.css';
import { useRef, useEffect, useState } from 'react';

function App() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [activeSection, setActiveSection] = useState('intro');
  const collapseRef = useRef();
  const [showBubble, setShowBubble] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'services', 'skills', 'projects', 'contact'];
      let closestSection = 'intro';
      let minDistance = Number.POSITIVE_INFINITY;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top - 120);
          if (rect.top - 120 <= 0 && distance < minDistance) {
            minDistance = distance;
            closestSection = section;
          }
        }
      }
      setActiveSection(closestSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(false), 3000); // Show for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  // Function to close navbar collapse on link click
  const handleNavLinkClick = () => {
    if (collapseRef.current && window.innerWidth < 992) {
      const bsCollapse = window.bootstrap?.Collapse || window.bootstrap?.collapse;
      if (bsCollapse) {
        const collapseInstance = window.bootstrap.Collapse.getOrCreateInstance(collapseRef.current);
        collapseInstance.hide();
      } else {
        // fallback for Bootstrap 5
        collapseRef.current.classList.remove('show');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    const subject = encodeURIComponent('Portfolio Contact from ' + name);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    window.location.href = `mailto:hassaanatif5@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div  id="home" className="min-vh-100 d-flex flex-column">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm fixed-top" style={{ backgroundColor: '#1a2631' }}>
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-white" href="#intro">Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span>
              <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="2" width="30" height="3" rx="1.5" fill="white"/>
                <rect y="9.5" width="30" height="3" rx="1.5" fill="white"/>
                <rect y="17" width="30" height="3" rx="1.5" fill="white"/>
              </svg>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link text-white${activeSection === 'intro' ? ' active' : ''}`} href="#intro" onClick={handleNavLinkClick}>Introduction</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link text-white${activeSection === 'services' ? ' active' : ''}`} href="#services" onClick={handleNavLinkClick}>Services</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link text-white${activeSection === 'skills' ? ' active' : ''}`} href="#skills" onClick={handleNavLinkClick}>Skills</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link text-white${activeSection === 'projects' ? ' active' : ''}`} href="#projects" onClick={handleNavLinkClick}>Projects</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link text-white${activeSection === 'contact' ? ' active' : ''}`} href="#contact" onClick={handleNavLinkClick}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ height: '70px' }}></div> {/* Spacer for fixed navbar */}

      {/* Introduction Section */}
      <section id="intro" className="py-5 text-center d-flex flex-column align-items-center">
        <div className="profile-animate position-relative">
          <img
            src={hassaanImg}
            alt="Profile"
            className="rounded-circle mb-3 shadow"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          {showBubble && (
            <div className="greeting-bubble">
              Hi! <span role="img" aria-label="wave">👋</span>
            </div>
          )}
        </div>
        <div className="intro-text-animate">
          <h1 className="display-4 fw-bold mb-2" style={{ color: '#B35340' }}>Muhammad Hassaan</h1>
          <p className="lead text-white mx-auto" style={{ maxWidth: 600 }}>
            Results-driven Mobile and Web Developer with experience building responsive, user-friendly apps using Flutter and Dart for cross-platform development. Skilled in React.js for fast, scalable web applications and strong in problem-solving and UI/UX implementation
            <span className="twinkle-dot dot1">.</span><span className="twinkle-dot dot2">.</span><span className="twinkle-dot dot3">.</span><span className="twinkle-dot dot4">.</span>
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-5 d-flex justify-content-center align-items-center"
        style={{ minHeight: '60vh' }}
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="services-glass-card p-4 w-100">
          <h2 className="text-center mb-5 fw-semibold" style={{ color: '#B35340' }}>Services</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="service-modern-card text-center p-4 h-100">
                <div className="service-icon mb-3">
                  <i className="fas fa-code fa-3x text-primary"></i>
                </div>
                <h5 className="fw-bold mb-2">Web Development</h5>
                <p>Building responsive and modern web applications tailored to your needs.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="service-modern-card text-center p-4 h-100">
                <div className="service-icon mb-3">
                  <i className="fas fa-paint-brush fa-3x text-success"></i>
                </div>
                <h5 className="fw-bold mb-2">UI/UX Design</h5>
                <p>Designing intuitive and minimalistic user interfaces for a seamless experience.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="service-modern-card text-center p-4 h-100">
                <div className="service-icon mb-3">
                  <i className="fas fa-mobile-alt fa-3x text-warning"></i>
                </div>
                <h5 className="fw-bold mb-2">Mobile App Development</h5>
                <p>Creating high-quality, cross-platform mobile applications to bring your ideas to users' fingertips.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5 d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1200">
        <div className="skills-glass-card p-4 w-100">
          <h2 className="text-center mb-5 fw-semibold" style={{ color: '#B35340' }}>Skills</h2>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 mb-4">
              <div className="skills-modern-card p-4 h-100">
                <h4 className="fw-bold mb-4 text-start">
                  <i className="fas fa-laptop-code me-2 text-primary"></i>Front-end Frameworks & Languages
                </h4>
                <ul className="list-unstyled mb-0">
                  <li className="mb-3 skill-item"><i className="fab fa-react me-2 text-info"></i>React</li>
                  <li className="mb-3 skill-item"><i className="fab fa-js-square me-2 text-warning"></i>JavaScript</li>
                  <li className="mb-3 skill-item"><i className="fab fa-css3-alt me-2 text-primary"></i>CSS</li>
                  <li className="mb-3 skill-item"><i className="fab fa-bootstrap me-2" style={{ color: '#7952b3' }}></i>Bootstrap</li>
                  <li className="mb-3 skill-item"><i className="fab fa-flutter me-2" style={{ color: '#02569B' }}></i>Flutter</li>
                  <li className="mb-3 skill-item"><i className="fas fa-code me-2 text-secondary"></i>Dart</li>
                  <li className="mb-3 skill-item"><i className="fab fa-html5 me-2 text-danger"></i>HTML</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="skills-modern-card p-4 h-100">
                <h4 className="fw-bold mb-4 text-start">
                  <i className="fas fa-server me-2 text-success"></i>Backend & Services
                </h4>
                <ul className="list-unstyled mb-0">
                  <li className="mb-3 skill-item"><i className="fab fa-node-js me-2 text-success"></i>Node.js</li>
                  <li className="mb-3 skill-item"><i className="fas fa-server me-2 text-dark"></i>Express.js</li>
                  <li className="mb-3 skill-item"><i className="fas fa-database me-2" style={{ color: '#4DB33D' }}></i>MongoDB</li>
                  <li className="mb-3 skill-item"><i className="fas fa-fire me-2 text-warning"></i>Firebase</li>
                  <li className="mb-3 skill-item"><i className="fas fa-database me-2 text-primary"></i>SQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Projects Section */}
      <section id="projects" className="py-5 d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1200">
        <div className="skills-glass-card p-4">
          <h2 className="text-center mb-5 fw-semibold" style={{ color: '#B35340' }}>Personal Projects</h2>
          <div className="mb-4">
            <h5 className="fw-bold mb-1">Feasto-Crave.Click.Eat <span className="fw-normal">(React.js, Node.js, MongoDB)</span></h5>
            <div className="mb-1" style={{ color: '#aaa', fontSize: '0.95rem' }}>(03/2025 - 06/2025)</div>
            <ul className="ps-3 mb-3">
              <li style={{ color: '#fff' }}>
                <span className="fw-bold">Feasto</span> is an innovative online food restaurant platform designed to simplify and enhance the process of ordering fast food. The platform offers an easy-to-use interface, making the entire ordering process seamless for users.
              </li>
            </ul>
          </div>
          <div>
            <h5 className="fw-bold mb-1">Sneaker-Store <span className="fw-normal">(Flutter and Dart)</span></h5>
            <div className="mb-1" style={{ color: '#aaa', fontSize: '0.95rem' }}>(07/2024 - 09/2024)</div>
            <ul className="ps-3 mb-0">
              <li style={{ color: '#fff' }}>
                <span className="fw-bold">Sneaker-Store</span> is an online e-commerce platform to buy sneakers from your favorite brands. Offers variety of designs and comfort for daily use.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1200">
        <div className="contact-card p-4">
          <h2 className="text-center mb-4 fw-semibold" style={{ color: '#B35340' }}>Contact Me!</h2>
          <form className="mx-auto" style={{ maxWidth: 400 }} onSubmit={handleSubmit}>
            <div className="mb-3 input-group">
              <span className="input-group-text bg-transparent border-0"><i className="fas fa-user text-white"></i></span>
              <input ref={nameRef} type="text" className="form-control modern-input" placeholder="Your Name" required />
            </div>
            <div className="mb-3 input-group">
              <span className="input-group-text bg-transparent border-0"><i className="fas fa-envelope text-white"></i></span>
              <input ref={emailRef} type="email" className="form-control modern-input" placeholder="Your Email" required />
            </div>
            <div className="mb-3 input-group">
              <span className="input-group-text bg-transparent border-0"><i className="fas fa-comment text-white"></i></span>
              <textarea ref={messageRef} className="form-control modern-input" rows={4} placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-modern w-100">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-3 text-white text-center" style={{ backgroundColor: '#1a2631' }}>
        <div>© {new Date().getFullYear()} Hassaan's Solutions. All rights reserved.</div>
      </footer>
      </div>
  );
}

export default App;


