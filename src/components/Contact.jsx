import React, { useState } from 'react';
import { MessageSquare, Send, Mail, CheckCircle, Terminal } from 'lucide-react';

const Github = ({ size = 16, className = '' }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 16, className = '' }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    output: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        output: ['[ERROR] All fields are required! Please fill out Name, Email, and Message.']
      });
      return;
    }

    setStatus({
      submitting: true,
      submitted: false,
      error: false,
      output: [
        '$ curl -X POST https://api.jayantkaushik.dev/contact \\',
        `  -H "Content-Type: application/json" \\`,
        `  -d '{"name":"${formData.name}","email":"${formData.email}"}'`,
        'Connecting to server...',
        'Sending payload [78 bytes]...'
      ]
    });

    // Simulate sending progress
    setTimeout(() => {
      setStatus(prev => ({
        ...prev,
        output: [...prev.output, 'Server response: 202 Accepted. Queueing message send...']
      }));
    }, 800);

    setTimeout(() => {
      setStatus(prev => ({
        ...prev,
        submitting: false,
        submitted: true,
        output: [
          ...prev.output,
          'OK! Email sent successfully.',
          'Message logged. Thank you for reaching out, Jayant will get back to you shortly!'
        ]
      }));
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="section reveal-on-scroll">
      <h2 className="section-title">
        <MessageSquare className="section-icon" />
        Get In Touch
      </h2>
      <div className="contact-container">
        <p className="contact-intro">
          I am currently seeking Software Engineering and AI/ML opportunities. Whether you want to discuss a project, query about internships, or just say hello, my inbox is open!
        </p>

        <div className="contact-terminal">
          <div className="terminal-header">
            <div className="terminal-dots">
              <div className="terminal-dot close"></div>
              <div className="terminal-dot minimize"></div>
              <div className="terminal-dot maximize"></div>
            </div>
            <div className="terminal-title">contact_form.sh</div>
            <div style={{ width: '42px' }}></div> {/* spacer to center title */}
          </div>
          <div className="terminal-body">
            {!status.submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">visitor.name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input" 
                    placeholder="Enter your name"
                    disabled={status.submitting}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">visitor.email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input" 
                    placeholder="Enter your email address"
                    disabled={status.submitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">visitor.message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea" 
                    placeholder="Type your message here..."
                    disabled={status.submitting}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={status.submitting}
                >
                  <Send size={16} />
                  <span>{status.submitting ? 'Running Script...' : 'Execute Send'}</span>
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div style={{ color: 'var(--success)', marginBottom: '1rem' }}>
                  <CheckCircle size={48} style={{ margin: '0 auto' }} />
                </div>
                <h3 style={{ color: 'var(--text-white)', marginBottom: '0.5rem' }}>Message Transmitted!</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
                  Your details have been recorded. Terminal response is shown below.
                </p>
                <button 
                  onClick={() => setStatus(prev => ({ ...prev, submitted: false, output: [] }))} 
                  className="project-action-btn"
                  style={{ margin: '0 auto' }}
                >
                  Send another message
                </button>
              </div>
            )}

            {status.output.length > 0 && (
              <div 
                style={{ 
                  marginTop: '1.5rem', 
                  backgroundColor: 'var(--bg)', 
                  border: '1px solid var(--border)', 
                  borderRadius: '6px',
                  padding: '1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--muted)',
                  textAlign: 'left',
                  maxHeight: '180px',
                  overflowY: 'auto'
                }}
              >
                {status.output.map((line, lIdx) => (
                  <div 
                    key={lIdx} 
                    style={{ 
                      color: line.startsWith('$') 
                        ? 'var(--accent)' 
                        : line.startsWith('[ERROR]') 
                          ? 'var(--danger)' 
                          : line.includes('OK!') 
                            ? 'var(--success)' 
                            : 'var(--text)',
                      marginBottom: '0.25rem',
                      whiteSpace: 'pre-wrap'
                    }}
                  >
                    {line}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Mail size={16} className="section-icon" />
            <a href="mailto:kaushikjayant2004@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
              kaushikjayant2004@gmail.com
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Github size={16} className="section-icon" />
            <a href="https://github.com/kaushikjayant-cyber" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
              github.com/kaushikjayant-cyber
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Linkedin size={16} className="section-icon" />
            <a href="https://www.linkedin.com/in/jayant-kaushik-0217892b0" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
              linkedin.com/in/jayant-kaushik-0217892b0
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
