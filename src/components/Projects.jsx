import React, { useState } from 'react';
import { Code2 } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projectsData = [
    {
      name: 'SyncForge',
      category: 'fullstack',
      description: 'A real-time collaborative coding platform designed to help developers code together seamlessly. The platform supports shared workspaces, secure authentication, and code execution within the browser.',
      features: [
        'Live code synchronization using Socket.io',
        'Judge0-powered code execution',
        'Google OAuth and JWT authentication'
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.io'],
      githubUrl: 'https://github.com/kaushikjayant-cyber/syncforge',
      demoUrl: 'https://syncforge.vercel.app/'
    },
    {
      name: 'HireBlind',
      category: 'aiml',
      description: 'An AI-powered recruitment platform that anonymizes resumes and ranks candidates based on job requirements. The system helps reduce bias while improving hiring efficiency.',
      features: [
        'Resume anonymization using NLP',
        'AI-based candidate ranking',
        'Explainable screening insights'
      ],
      technologies: ['Node.js', 'MongoDB', 'Python', 'NLP'],
      githubUrl: 'https://github.com/kaushikjayant-cyber/hireblind',
      demoUrl: 'https://hireblind.vercel.app/'
    },
    {
      name: 'WhatsApp Chat & Sentiment Insight Engine',
      category: 'aiml',
      description: 'A data analytics platform that processes WhatsApp conversations and generates insights using NLP and transformer models. It helps users understand sentiment trends and communication patterns.',
      features: [
        'Sentiment and emotion analysis',
        'Interactive analytics dashboard',
        'Multilingual chat processing'
      ],
      technologies: ['Python', 'NLP', 'DistilBERT', 'Pandas'],
      githubUrl: 'https://github.com/kaushikjayant-cyber/whatsapp-sentiment-insight',
      demoUrl: 'https://whatsapp-sentiment.vercel.app/'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(proj => proj.category === activeFilter);

  return (
    <section id="projects" className="section reveal-on-scroll">
      <h2 className="section-title">
        <Code2 className="section-icon" />
        Featured Projects
      </h2>

      <div className="projects-filter-bar">
        <button 
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All Projects
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'fullstack' ? 'active' : ''}`}
          onClick={() => setActiveFilter('fullstack')}
        >
          Full-Stack
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'aiml' ? 'active' : ''}`}
          onClick={() => setActiveFilter('aiml')}
        >
          AI/ML & Python
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
