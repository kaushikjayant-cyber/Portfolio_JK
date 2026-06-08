import React from 'react';
import { ExternalLink, GitFork, Star, FolderGit2 } from 'lucide-react';

const Github = ({ size = 14 }) => (
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

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card hover-lift">
      <div className="project-header">
        <div className="project-title-area">
          <FolderGit2 className="project-repo-icon" />
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-repo-name"
          >
            {project.name}
          </a>
          <span className="project-visibility-badge">Public</span>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--muted)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.15rem' }}>
            <Star size={12} fill="currentColor" />
            <span>12</span>
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.15rem' }}>
            <GitFork size={12} />
            <span>4</span>
          </span>
        </div>
      </div>

      <div className="project-body">
        <p className="project-description">{project.description}</p>
        
        <div className="project-meta-item">
          <ul className="timeline-list" style={{ marginTop: '0.25rem', marginBottom: '0.5rem' }}>
            {project.features.map((feature, fIdx) => (
              <li key={fIdx} style={{ fontSize: '0.8rem', paddingLeft: '1rem' }}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="project-meta-item" style={{ marginTop: '0.75rem' }}>
          <div className="project-meta-lbl">Tech Stack</div>
          <div className="project-tech-list">
            {project.technologies.map((tech, tIdx) => (
              <span key={tIdx} className="project-tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="project-actions">
        <a 
          href={project.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-action-btn"
        >
          <Github size={14} />
          <span>Repository</span>
        </a>
        <a 
          href={project.demoUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-action-btn"
          style={{ borderColor: 'rgba(88, 166, 255, 0.3)', color: 'var(--accent)' }}
        >
          <ExternalLink size={14} />
          <span>Live Demo</span>
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
