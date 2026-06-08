import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Kistechnosoftware',
      role: 'Software Developer Intern',
      duration: 'Jan 2025 - Present',
      overview: 'Kistechnosoftware is a technology firm specializing in web applications and cloud integrations. As an intern, I focus on full-stack development, building backend systems, and optimizing web interfaces.',
      highlights: [
        'Developed dynamic web applications using Flask and Python backend scripting.',
        'Integrated Firebase for real-time data persistence and cloud hosting.',
        'Implemented secure OAuth authentication to manage user sessions and profiles.'
      ],
      technologies: ['Flask', 'Python', 'Firebase', 'OAuth', 'JavaScript']
    },
    {
      company: 'Infoshore',
      role: 'Python Developer Intern',
      duration: 'Jun 2024 - Dec 2024',
      overview: 'Infoshore provides software and data processing solutions. During my tenure, I focused on designing automated workflows and building robust data ingestion pipelines.',
      highlights: [
        'Created custom ETL pipelines to clean and process diverse datasets.',
        'Optimized data processing tasks using Pandas and NumPy to reduce query latency.',
        'Automated report delivery systems using cron jobs and Python mail modules.'
      ],
      technologies: ['Python', 'ETL', 'Pandas', 'NumPy', 'Automation']
    }
  ];

  return (
    <section id="experience" className="section reveal-on-scroll">
      <h2 className="section-title">
        <Briefcase className="section-icon" />
        Professional Experience
      </h2>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="role-title">{exp.role}</h3>
                  <div className="company-name">{exp.company}</div>
                </div>
                <div className="duration-tag">
                  <Calendar size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                  <span style={{ verticalAlign: 'middle' }}>{exp.duration}</span>
                </div>
              </div>
              
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.5' }}>
                {exp.overview}
              </p>

              <ul className="timeline-list">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx}>{highlight}</li>
                ))}
              </ul>
              <div style={{ marginTop: '1rem' }}>
                <div className="project-tech-list">
                  {exp.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="project-tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
