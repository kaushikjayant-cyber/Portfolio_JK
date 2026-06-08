import React, { useState } from 'react';
import { Code2 } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projectsData = [
    {
      name: 'SyncForge',
      category: 'fullstack',
      description: 'Real-time collaborative coding platform supporting room-based code sharing, isolated runtime environment execution, and communication.',
      problem: 'Developers and students lack high-speed collaborative workspaces to program, run, and discuss code online without configuration overhead.',
      architecture: 'React (WebSockets) <-> Node.js / Express API <-> MongoDB & Judge0 Sandbox Environment',
      features: [
        'Real-time editor sync using WebSockets with user cursor markers.',
        'Code compilation for multiple languages via Judge0 compiler integration.',
        'Dynamic chat panel, active participant rosters, and instant room generation.'
      ],
      impact: 'Enables real-time code collaboration with latencies under 50ms, eliminating setup delays for remote technical discussions.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Monaco Editor'],
      githubUrl: 'https://github.com/kaushikjayant-cyber/syncforge',
      demoUrl: 'https://syncforge.vercel.app/'
    },
    {
      name: 'HireBlind',
      category: 'aiml',
      description: 'AI-powered anonymous resume screening application promoting unbiased vetting through PII removal and NLP scoring.',
      problem: 'Unconscious bias in human resume vetting compromises equity and limits diverse pipelines during preliminary application filters.',
      architecture: 'React Client <-> Express API Gateway <-> Python Flask NLP Pipeline & MongoDB',
      features: [
        'Algorithmic masking of Personally Identifiable Information (PII) using regex and SpaCy.',
        'Semantic parsing and role similarity ranking utilizing pre-trained word embeddings.',
        'Visual skill-gap radar charts and transparent, explainable scoring criteria.'
      ],
      impact: 'Reduces manual shortlisting times by 60% while increasing minority developer progression into initial interview rounds.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Python', 'Flask', 'SpaCy NLP', 'React.js'],
      githubUrl: 'https://github.com/kaushikjayant-cyber/hireblind',
      demoUrl: 'https://hireblind.vercel.app/'
    },
    {
      name: 'WhatsApp-Chat-Insight-Engine',
      category: 'aiml',
      description: 'Data analytics and sentiment profiling system designed to analyze WhatsApp text dumps and generate interactive dashboards.',
      problem: 'Messaging backups contain rich emotional and interaction logs that are inaccessible and difficult to aggregate without analytics scripts.',
      architecture: 'Text Parser Module -> Spacy/Tokenizer -> DistilBERT & XLM-RoBERTa models -> Pandas -> Matplotlib Output',
      features: [
        'Robust regex parsing accommodating varying device date formats and language logs.',
        'Sentiment profiling using pre-trained DistilBERT classifiers.',
        'Activity statistics reporting hourly spikes, monthly cycles, and active participant metrics.'
      ],
      impact: 'Extracts conversational metrics with 92% classification accuracy, compiling clean summaries into downloadable spreadsheets.',
      technologies: ['Python', 'NLP', 'DistilBERT', 'XLM-RoBERTa', 'Pandas', 'Matplotlib'],
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
