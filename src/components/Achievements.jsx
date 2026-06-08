import React from 'react';
import { Award, Code, Briefcase, FolderGit2, Star, GraduationCap } from 'lucide-react';

const Achievements = () => {
  const stats = [
    {
      value: '550+',
      label: 'DSA Problems Solved',
      icon: Code,
      description: 'Solved on LeetCode & GeeksForGeeks',
      color: '#58A6FF'
    },
    {
      value: '2',
      label: 'Internships Completed',
      icon: Briefcase,
      description: 'Python & Full-Stack experience',
      color: '#2EA043'
    },
    {
      value: '3+',
      label: 'Major Projects',
      icon: FolderGit2,
      description: 'Collaborative, NLP, & AI products',
      color: '#06B6D4'
    },
    {
      value: '26+',
      label: 'Coding Badges',
      icon: Star,
      description: 'LeetCode, GFG, & profiles badges',
      color: '#FF7B72'
    },
    {
      value: '8.33',
      label: 'Current CGPA',
      icon: GraduationCap,
      description: 'Academic performance at SKIT Jaipur',
      color: '#F1E05A'
    }
  ];

  return (
    <section id="achievements" className="section reveal-on-scroll">
      <h2 className="section-title">
        <Award className="section-icon" />
        Achievements
      </h2>
      <div className="hero-metrics" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="metric-card" style={{ borderLeft: `3px solid ${stat.color}` }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem', color: stat.color }}>
                <Icon size={24} />
              </div>
              <div className="metric-val">{stat.value}</div>
              <div className="metric-lbl" style={{ marginBottom: '0.25rem' }}>{stat.label}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.25rem' }}>
                {stat.description}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
