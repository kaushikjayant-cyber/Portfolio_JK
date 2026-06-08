import React from 'react';
import { 
  Mail, 
  MapPin, 
  Download,
  User, 
  Briefcase, 
  Code2, 
  Award, 
  BookOpen, 
  MessageSquare,
  Terminal
} from 'lucide-react';

import avatarUrl from '../assets/avatar.jpg';
import resumeUrl from '../assets/resume.pdf';

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

const CodolioIcon = ({ size = 18 }) => (
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
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const Sidebar = ({ activeSection }) => {
  const menuItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code2 },
    { id: 'skills', label: 'Skills', icon: Terminal },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'profiles', label: 'Coding Profiles', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: MessageSquare }
  ];

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 0; // standard offset
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

  return (
    <aside className="sidebar">
      <div className="sidebar-profile">
        <div className="profile-container">
          <div className="profile-frame">
            <div className="profile-avatar">
              <img 
                src={avatarUrl} 
                alt="Jayant Kaushik" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
                }}
              />
            </div>
          </div>
        </div>
        <h1 className="profile-name">Jayant Kaushik</h1>
        <p className="profile-title">Software Developer</p>
        
        <div className="profile-location">
          <MapPin size={14} />
          <span>Jaipur, India</span>
        </div>

        <a 
          href={resumeUrl} 
          download="Jayant_Kaushik_Resume.pdf" 
          className="resume-btn"
          title="Download Resume"
        >
          <Download size={16} />
          <span>Download Resume</span>
        </a>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-menu">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <a
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="social-links">
          <a 
            href="https://github.com/kaushikjayant-cyber" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-btn"
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/in/jayant-kaushik-0217892b0" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-btn"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="mailto:kaushikjayant2004@gmail.com" 
            className="social-btn"
            title="Email"
          >
            <Mail size={18} />
          </a>
          <a 
            href="https://codolio.com/profile/csVHnFgM" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-btn"
            title="Codolio"
          >
            <CodolioIcon />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
