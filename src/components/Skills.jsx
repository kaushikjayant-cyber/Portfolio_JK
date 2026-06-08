import React from 'react';
import { 
  Terminal, 
  Code, 
  Cpu, 
  Database, 
  BarChart3, 
  Wrench 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['C++', 'Python', 'JavaScript', 'SQL']
    },
    {
      title: 'Frontend Development',
      icon: Cpu,
      skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      title: 'Backend Systems',
      icon: Terminal,
      skills: ['Node.js', 'Express.js', 'Flask']
    },
    {
      title: 'Databases & Infrastructure',
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'Firebase']
    },
    {
      title: 'AI & Data Engineering',
      icon: BarChart3,
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'NLP', 'Transformers']
    },
    {
      title: 'Developer Tools',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'Postman', 'Jupyter Notebook', 'Vercel', 'Netlify']
    }
  ];

  return (
    <section id="skills" className="section reveal-on-scroll">
      <h2 className="section-title">
        <Terminal className="section-icon" />
        Technical Skills
      </h2>
      <div className="skills-container">
        {skillCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <div key={idx} className="skills-category">
              <h3 className="skills-category-title">
                <Icon className="skills-category-icon" />
                {category.title}
              </h3>
              <div className="skills-grid">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="skill-pill"
                    style={{ animationDelay: `${sIdx * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
