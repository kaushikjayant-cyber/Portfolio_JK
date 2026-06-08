import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Kistechnosoftware',
      role: 'Software Developer Intern',
      duration: 'Jan 2025 - Present', // reasonable estimate for student timeline
      highlights: [
        'Built dynamic web applications using Flask web framework and Python backend scripting.',
        'Integrated Firebase for real-time database persistence, cloud storage, and hosting configurations.',
        'Implemented secure OAuth Authentication mechanisms to manage user logins and profile management.',
        'Designed and optimized frontend components with HTML, CSS, and JavaScript, ensuring responsive layouts across devices.'
      ],
      technologies: ['Flask', 'Python', 'Firebase', 'OAuth', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      company: 'Infoshore',
      role: 'Python Developer Intern',
      duration: 'Jun 2024 - Dec 2024',
      highlights: [
        'Designed and developed python automation frameworks to speed up system testing and environment configs.',
        'Created custom ETL (Extract, Transform, Load) pipelines to ingest, clean, and process structured and semi-structured datasets.',
        'Optimized data processing tasks using Pandas and NumPy, reducing query latencies and execution times.',
        'Automated reports delivery systems via cron jobs and Python mail modules, eliminating manual compiling tasks.'
      ],
      technologies: ['Python', 'ETL Pipelines', 'Pandas', 'NumPy', 'Automation Scripts', 'Git']
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
              <ul className="timeline-list">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx}>{highlight}</li>
                ))}
              </ul>
              <div style={{ marginTop: '1rem' }}>
                <span className="project-meta-lbl" style={{ display: 'block', marginBottom: '0.5rem' }}>Technologies Used</span>
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
