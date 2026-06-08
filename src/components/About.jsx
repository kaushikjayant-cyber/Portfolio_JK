import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section reveal-on-scroll">
      <h2 className="section-title">
        <User className="section-icon" />
        About Me
      </h2>
      <div className="about-card">
        <p>
          I am a <span className="highlight-text">B.Tech Computer Science and Engineering</span> student at{' '}
          <span className="highlight-text">Swami Keshvanand Institute of Technology (SKIT), Jaipur</span>. 
          My academic training combined with hands-on software development experience has prepared me to tackle complex engineering problems.
        </p>
        <p>
          I have a deep passion for <span className="highlight-text">Software Engineering</span>,{' '}
          <span className="highlight-text">Full-Stack Web Development</span>, and <span className="highlight-text">AI/ML</span>. 
          I love analyzing problem spaces, designing clean system architectures, and writing robust code that solves real-world challenges.
        </p>
        <p>
          A strong proponent of algorithmic thinking, I have solved <span className="highlight-text">550+ Data Structures & Algorithms (DSA) problems</span> across platforms like LeetCode and GeeksForGeeks. This foundation enables me to design highly optimized solutions with performance and efficiency in mind.
        </p>
        <p>
          Currently, I am actively seeking <span className="highlight-text">Software Engineering, Full-Stack Development, and AI/ML opportunities</span> where I can apply my experience in Python/JavaScript automation, web frameworks, database administration, and natural language processing to build impactful software systems.
        </p>
      </div>
    </section>
  );
};

export default About;
