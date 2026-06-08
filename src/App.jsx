import React, { useState, useEffect } from 'react';
import { 
  ArrowUp, 
  Menu, 
  X, 
  Terminal, 
  Mail, 
  ChevronRight,
  Code2,
  Briefcase,
  Award,
  BookOpen,
  MessageSquare,
  User,
  Download
} from 'lucide-react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';

const Github = ({ size = 18 }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 18 }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ display: 'block' }}>
    <path d="M16.102 17.93l-2.69 2.607c-.466.451-1.111.696-1.744.696s-1.278-.245-1.744-.696L4.04 14.729a2.4 2.4 0 0 1 0-3.417l5.96-5.776a2.4 2.4 0 0 1 3.488 0l2.614 2.532a.6.6 0 0 1 0 .854L14.73 10.3c-.23.224-.604.224-.834 0L11.72 8.188a1.2 1.2 0 0 0-1.744 0l-5.96 5.776a1.2 1.2 0 0 0 0 1.708l5.884 5.703a1.2 1.2 0 0 0 1.744 0l2.69-2.607a.6.6 0 0 1 .834 0 .614.614 0 0 1 0-.862z" />
    <path d="M5.102 9.771c.23-.224.604-.224.834 0l2.174 2.107c.23.224.23.587 0 .812l-2.174 2.107a.6.6 0 0 1-.834 0 .614.614 0 0 1 0-.862l1.758-1.703-1.758-1.702a.614.614 0 0 1 0-.863z" />
    <path d="M12 3a.6.6 0 0 1 .6.6v2a.6.6 0 0 1-1.2 0v-2A.6.6 0 0 1 12 3zm0 14a.6.6 0 0 1 .6.6v2a.6.6 0 0 1-1.2 0v-2A.6.6 0 0 1 12 17zm7.53-7.53l1.414-1.414a.6.6 0 1 1 .848.848l-1.414 1.414a.6.6 0 0 1-.848-.848zm-14.14 0l-1.414-1.414a.6.6 0 0 1 .848-.848l1.414 1.414a.6.6 0 1 1-.848.848zm14.14 7.07l1.414 1.414a.6.6 0 0 1-.848.848l-1.414-1.414a.6.6 0 0 1 .848-.848z" />
  </svg>
);

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll Progress and Back to Top tracking
  useEffect(() => {
    const handleScroll = () => {
      // Progress Bar
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }

      // Back to Top Button
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active Section highlighting via Intersection Observer
  useEffect(() => {
    const sections = document.querySelectorAll('section[id], header[id]');
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // activates when element occupies middle screen
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Reveal animations on scroll
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    });

    revealElements.forEach((el) => revealObserver.observe(el));
    return () => revealElements.forEach((el) => revealObserver.unobserve(el));
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = id === 'hero' ? 0 : 70; // offset for sticky mobile header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const menuItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code2 },
    { id: 'skills', label: 'Skills', icon: Terminal },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'profiles', label: 'Coding Profiles', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: MessageSquare }
  ];

  return (
    <div className="app-container">
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress-container">
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky Mobile Header */}
      <header className="mobile-header">
        <div className="mobile-profile">
          <div className="mobile-avatar">
            <img 
              src="/avatar.png" 
              alt="Jayant Kaushik" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
              }}
            />
          </div>
          <div className="mobile-name-title">
            <span className="mobile-name">Jayant Kaushik</span>
            <span className="mobile-title">Software Developer</span>
          </div>
        </div>
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile Nav Dropdown */}
      <div className={`mobile-nav-dropdown ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-menu">
          <li>
            <a 
              onClick={() => handleNavClick('hero')} 
              className={`mobile-nav-item ${activeSection === 'hero' ? 'active' : ''}`}
            >
              <Terminal size={16} />
              <span>Dashboard Home</span>
            </a>
          </li>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <a
                  onClick={() => handleNavClick(item.id)}
                  className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
          <li style={{ marginTop: '0.5rem', borderTop: '1px solid var(--border)', paddingTop: '0.75rem' }}>
            <a 
              href="/resume.pdf" 
              download="Jayant_Kaushik_Resume.pdf"
              className="resume-btn"
              style={{ width: 'auto', justifyContent: 'center' }}
            >
              <Download size={14} />
              <span>Download Resume</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Desktop Left Sidebar */}
      <Sidebar activeSection={activeSection} />

      {/* Right Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <header id="hero" className="section" style={{ borderBottom: '1px solid var(--border)', paddingBottom: '3.5rem' }}>
          <div className="hero-container">
            <span className="hero-subtitle">SYSTEM STATUS: ONLINE</span>
            <h1 className="hero-name">Jayant Kaushik</h1>
            <p className="hero-title-tagline">Software Developer</p>
            <p className="hero-intro">
              Building scalable web applications, developer tools, and AI-powered systems. Specialized in Full-Stack structures and data pipeline processing.
            </p>
            <div className="hero-actions">
              <button 
                onClick={() => handleNavClick('projects')} 
                className="hero-btn primary"
              >
                <Code2 size={16} />
                <span>View Projects</span>
              </button>
              <button 
                onClick={() => handleNavClick('contact')} 
                className="hero-btn secondary"
              >
                <MessageSquare size={16} />
                <span>Contact Me</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="hero-metrics" style={{ marginTop: '2rem' }}>
            <div className="metric-card">
              <div className="metric-val">550+</div>
              <div className="metric-lbl">DSA Solved</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">2</div>
              <div className="metric-lbl">Internships</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">3+</div>
              <div className="metric-lbl">Major Projects</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">8.33</div>
              <div className="metric-lbl">CGPA</div>
            </div>
          </div>
        </header>

        {/* Section Compositions */}
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <CodingProfiles />
        <Contact />

        {/* Footer info */}
        <footer style={{ marginTop: '4rem', padding: '2rem 0 0 0', borderTop: '1px solid var(--border)', fontSize: '0.8rem', color: 'var(--muted)', display: 'flex', justifyContent: 'between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>© {new Date().getFullYear()} Jayant Kaushik. All rights reserved.</div>
          <div style={{ marginLeft: 'auto' }}>Designed & Engineered with React & CSS3</div>
        </footer>
      </main>

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={handleBackToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}

export default App;
