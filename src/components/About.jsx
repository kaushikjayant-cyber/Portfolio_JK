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
          I am a Computer Science student at SKIT Jaipur with a strong interest in Software Development, Full-Stack Engineering, and Artificial Intelligence. I enjoy building scalable applications that solve real-world problems and improve user experiences. Through internships and personal projects, I have gained hands-on experience with React, Node.js, MongoDB, Python, and modern development practices. I have solved 550+ DSA problems, which has strengthened my problem-solving and analytical skills. I am constantly learning new technologies and actively seeking opportunities to contribute to impactful software products while growing as an engineer.
        </p>
      </div>
    </section>
  );
};

export default About;
