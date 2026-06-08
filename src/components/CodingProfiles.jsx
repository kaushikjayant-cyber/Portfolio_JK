import React from 'react';
import { ExternalLink, Code2, BookOpen, Terminal, Library } from 'lucide-react';

const Github = ({ size = 24 }) => (
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



const GeeksForGeeksLogo = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 14.7H8.5c-.83 0-1.5-.67-1.5-1.5V12c0-2.21 1.79-4 4-4h2.2c.83 0 1.5.67 1.5 1.5v.7c0 .41-.34.75-.75.75h-.7c-.41 0-.75-.34-.75-.75V9.5h-1.5c-1.1 0-2 .9-2 2v2.7h2.7v-.7c0-.41.34-.75.75-.75h.7c.41 0 .75.34.75.75v1.5c0 .83-.67 1.5-1.5 1.5h-2.2v-.7c0-.41-.34-.75-.75-.75h-.7c-.41 0-.75.34-.75.75v.7z" />
  </svg>
);

const CodolioLogo = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="12" y1="2" x2="12" y2="22" />
  </svg>
);

const CodingProfiles = () => {
  const profiles = [
    {
      name: 'GitHub',
      username: 'kaushikjayant-cyber',
      url: 'https://github.com/kaushikjayant-cyber',
      icon: Github,
      color: '#C9D1D9',
      details: 'Repositories, open-source work, and contributions'
    },

    {
      name: 'GeeksForGeeks',
      username: 'jayantkaushik',
      url: 'https://www.geeksforgeeks.org/user/jayantkaushik/',
      logo: GeeksForGeeksLogo,
      color: '#2F8D46',
      details: 'Technical articles, topic quizzes, and interview Prep'
    },
    {
      name: 'Codolio',
      username: 'csVHnFgM',
      url: 'https://codolio.com/profile/csVHnFgM',
      logo: CodolioLogo,
      color: '#06B6D4',
      details: 'Developer dashboard aggregating coding stats and history'
    }
  ];

  return (
    <section id="profiles" className="section reveal-on-scroll">
      <h2 className="section-title">
        <Library className="section-icon" />
        Coding Profiles
      </h2>
      <div className="profiles-grid">
        {profiles.map((profile, idx) => {
          const LogoComponent = profile.logo;
          const IconComponent = profile.icon;
          return (
            <a 
              key={idx}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-card"
            >
              <div className="profile-card-left">
                <div 
                  className="profile-card-icon"
                  style={{ color: profile.color }}
                >
                  {LogoComponent ? <LogoComponent /> : <IconComponent size={24} />}
                </div>
                <div>
                  <h3 className="profile-card-name">{profile.name}</h3>
                  <div className="profile-card-user">@{profile.username}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.25rem' }}>
                    {profile.details}
                  </div>
                </div>
              </div>
              <ExternalLink className="profile-card-link-icon" />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default CodingProfiles;
