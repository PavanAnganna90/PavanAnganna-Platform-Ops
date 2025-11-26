import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const COLORS = {
  white: '#ffffff',
  black: '#000000',
  text: '#000000',
  border: '#1a1a1a',
  yellow: '#fff500',
  red: '#ff5252',
};

const STYLES = {
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '12px 24px',
    border: '3px solid #000',
    boxShadow: '4px 4px 0px #000',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
    fontFamily: '"Space Mono", monospace',
    transition: 'transform 0.1s ease',
  },
};

const Footer = () => (
  <footer style={{
    marginTop: '0px',
    backgroundColor: COLORS.border,
    color: COLORS.white,
    padding: '60px 20px',
    textAlign: 'center',
    fontFamily: '"Space Mono", monospace',
    borderTop: `5px solid ${COLORS.text}`
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: '3rem', marginBottom: '30px', color: COLORS.yellow, textTransform: 'uppercase' }}>Let's Connect</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '40px', flexWrap: 'wrap' }}>
        <a href="https://www.linkedin.com/in/pavan90/" style={{ textDecoration: 'none' }}>
             <button style={{ ...STYLES.button, backgroundColor: '#0077B5', color: COLORS.white }}>
                <Linkedin size={24} /> LINKEDIN
             </button>
        </a>
         <a href="https://github.com/PavanAnganna90" style={{ textDecoration: 'none' }}>
             <button style={{ ...STYLES.button, backgroundColor: COLORS.red, color: COLORS.white }}>
                <Github size={24} /> GITHUB
             </button>
        </a>
      </div>
      <p style={{ opacity: 0.6 }}>© {new Date().getFullYear()} Pavan Anganna. Built with React & Neo-Brutalism.</p>
    </div>
  </footer>
);

export default Footer;