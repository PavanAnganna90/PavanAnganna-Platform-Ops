import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Terminal, 
  Cpu, 
  Cloud, 
  Server, 
  Code, 
  Database,
  Award,
  BookOpen,
  Briefcase,
  Quote
} from 'lucide-react';

const COLORS = {
  bg: '#FFF1F2',
  text: '#1F2937', // Dark grey/black for better readability
  primary: '#FF5252', // Red
  secondary: '#00E5FF', // Cyan
  accent: '#FFF500', // Yellow
  purple: '#B388FF',
  white: '#ffffff',
  black: '#000000',
  border: '#000000',
  cardBg: '#ffffff',
};

const STYLES = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  border: `4px solid ${COLORS.border}`,
  shadow: `8px 8px 0px ${COLORS.border}`,
  shadowSmall: `4px 4px 0px ${COLORS.border}`,
  h1: {
    fontFamily: '"Archivo Black", sans-serif',
    fontSize: 'clamp(3rem, 8vw, 6rem)',
    lineHeight: '1',
    textTransform: 'uppercase' as const,
    color: COLORS.white,
    textShadow: `
      -1px -1px 0 #000,  
       1px -1px 0 #000,
      -1px  1px 0 #000,
       1px  1px 0 #000,
       8px  8px 0 #000
    `,
    marginBottom: '20px',
  },
  h2: {
    fontFamily: '"Archivo Black", sans-serif',
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    textTransform: 'uppercase' as const,
    marginBottom: '40px',
    textAlign: 'center' as const,
    backgroundColor: COLORS.purple,
    display: 'inline-block' as const,
    padding: '10px 30px',
    border: `4px solid ${COLORS.border}`,
    boxShadow: `8px 8px 0px ${COLORS.border}`,
    color: COLORS.black,
  },
  h3: {
    fontFamily: '"Archivo Black", sans-serif',
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  text: {
    fontFamily: '"Space Mono", monospace',
    fontSize: '1rem',
    lineHeight: '1.6',
    color: COLORS.text,
  },
  button: {
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    gap: '10px',
    padding: '16px 32px',
    border: `4px solid ${COLORS.border}`,
    fontWeight: 'bold',
    fontSize: '1.1rem',
    cursor: 'pointer' as const,
    fontFamily: '"Space Mono", monospace',
    textTransform: 'uppercase' as const,
    transition: 'all 0.1s ease',
    textDecoration: 'none',
    outline: 'none',
  },
  card: {
    backgroundColor: COLORS.cardBg,
    border: `4px solid ${COLORS.border}`,
    padding: '30px',
    position: 'relative' as const,
    boxShadow: `12px 12px 0px ${COLORS.border}`,
  },
  skillPill: {
    display: 'flex' as const,
    alignItems: 'center' as const,
    gap: '8px',
    padding: '10px 20px',
    backgroundColor: COLORS.white,
    border: `3px solid ${COLORS.border}`,
    fontFamily: '"Space Mono", monospace',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    boxShadow: `4px 4px 0px ${COLORS.border}`,
  }
};

// Component for interactive buttons with press effect
const InteractiveButton = ({ children, style, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const dynamicStyle = {
    ...STYLES.button,
    ...style,
    transform: isActive 
      ? 'translate(6px, 6px)' 
      : (isHovered ? 'translate(2px, 2px)' : 'translate(0, 0)'),
    boxShadow: isActive 
      ? '0px 0px 0px black' 
      : (isHovered ? '4px 4px 0px black' : '6px 6px 0px black'),
  };

  return (
    <button
      style={dynamicStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      {...props}
    >
      {children}
    </button>
  );
};

const Ticker = ({ text, color }) => (
  <div style={{
    backgroundColor: color,
    borderTop: STYLES.border,
    borderBottom: STYLES.border,
    padding: '15px 0',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontFamily: '"Archivo Black", sans-serif',
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    position: 'relative',
    zIndex: 10
  }}>
    <div style={{ display: 'inline-block', animation: 'marquee 20s linear infinite' }}>
      {Array(10).fill(text).map((t, i) => (
        <span key={i} style={{ margin: '0 40px' }}>{t}</span>
      ))}
    </div>
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  </div>
);

const TerminalWindow = () => (
  <div style={{
    backgroundColor: COLORS.white,
    border: STYLES.border,
    boxShadow: STYLES.shadow,
    marginBottom: '40px',
    maxWidth: '800px',
    margin: '0 auto 40px auto',
  }}>
    <div style={{
      backgroundColor: COLORS.black,
      padding: '10px 20px',
      color: COLORS.white,
      fontFamily: '"Space Mono", monospace',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>
      <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: COLORS.primary }}></div>
      <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: COLORS.accent }}></div>
      <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: COLORS.secondary }}></div>
      <span style={{ marginLeft: '10px' }}>SUMMARY.TXT</span>
    </div>
    <div style={{ padding: '30px' }}>
      <p style={{ ...STYLES.text, marginBottom: '20px' }}>
        <span style={{ backgroundColor: COLORS.black, color: COLORS.white, padding: '2px 8px' }}>root@pavan:~$</span> cat summary.txt
      </p>
      <p style={STYLES.text}>
        Seasoned <strong>Platform & Cloud Engineer</strong> with 8+ years of experience delivering highly available, scalable systems across cloud platforms. Proven ability to architect and automate Kubernetes-based infrastructures, manage microservices lifecycles, and enforce SLO/SLI metrics to ensure 99.99% uptime. Skilled in IaC (Terraform, Ansible), GitOps, observability (Datadog, Prometheus), and event-driven architectures (Kafka).
      </p>
      <p style={{ ...STYLES.text, marginTop: '20px', color: COLORS.purple, fontWeight: 'bold' }}>
        Let's explore the transformative power of Cloud & DevOps together.
      </p>
      <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '10px', ...STYLES.text, opacity: 0.7 }}>
        <Briefcase size={16} /> Austin, Texas (Remote/Hybrid)
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <div style={{ padding: '100px 0 60px 0', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={STYLES.container}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px' }}>
          
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ 
              display: 'inline-block', 
              backgroundColor: COLORS.purple, 
              border: STYLES.border,
              padding: '10px 20px',
              fontFamily: '"Space Mono", monospace',
              fontWeight: 'bold',
              marginBottom: '20px',
              transform: 'rotate(-2deg)',
              boxShadow: '4px 4px 0px #000'
            }}>
              Hello World! I'm Pavan
            </div>
            
            <h1 style={STYLES.h1}>
              PLATFORM /<br/>
              <span style={{ color: COLORS.accent, textShadow: '6px 6px 0px #000', WebkitTextStroke: '4px black' }}>CLOUD</span><br/>
              ENGINEER
            </h1>

            <TerminalWindow />

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href="https://www.linkedin.com/in/pavan90/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <InteractiveButton style={{ backgroundColor: '#0077B5', color: COLORS.white }}>
                  <Linkedin size={24} /> LINKEDIN
                </InteractiveButton>
              </a>
              <a href="https://github.com/PavanAnganna90" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <InteractiveButton style={{ backgroundColor: COLORS.black, color: COLORS.white }}>
                  <Github size={24} /> GITHUB
                </InteractiveButton>
              </a>
            </div>
          </div>

          <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '120px',
                height: '120px',
                backgroundColor: COLORS.accent,
                borderRadius: '50%',
                border: STYLES.border,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2,
                transform: 'rotate(15deg)',
                boxShadow: '4px 4px 0px rgba(0,0,0,0.5)'
              }}>
                <span style={{ fontFamily: '"Archivo Black", sans-serif', textAlign: 'center', lineHeight: 1.2 }}>8+ YRS<br/>EXP</span>
              </div>
              
              <div style={{
                backgroundColor: COLORS.white,
                padding: '20px 20px 60px 20px',
                border: STYLES.border,
                transform: 'rotate(3deg)',
                boxShadow: `16px 16px 0px ${COLORS.border}`,
                width: '320px',
              }}>
                <div style={{
                  width: '100%',
                  height: '320px',
                  backgroundColor: '#ddd',
                  border: '2px solid #000',
                  marginBottom: '20px',
                  overflow: 'hidden'
                }}>
                  <img 
                    src="./pavan.jpg"
                    alt="Pavan Profile"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ textAlign: 'center', fontFamily: '"Archivo Black", sans-serif', fontSize: '1.5rem' }}>
                  @PAVAN90
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({ role, company, duration, location, details, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        ...STYLES.card, 
        marginBottom: '40px',
        backgroundColor: COLORS.white,
        transform: isHovered ? 'translate(-6px, -6px)' : 'none',
        boxShadow: isHovered ? `16px 16px 0px ${COLORS.border}` : `12px 12px 0px ${COLORS.border}`,
        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
    >
      <div style={{ 
        position: 'absolute', 
        top: '-20px', 
        left: '-10px', 
        backgroundColor: color, 
        border: STYLES.border, 
        padding: '10px',
        boxShadow: '4px 4px 0px #000'
      }}>
        <Briefcase size={24} color="black" />
      </div>

      <div style={{ 
        position: 'absolute', 
        top: '-20px', 
        right: '20px', 
        backgroundColor: COLORS.black, 
        color: COLORS.white, 
        padding: '5px 15px', 
        fontFamily: '"Space Mono", monospace',
        fontWeight: 'bold',
        boxShadow: '4px 4px 0px #888'
      }}>
        {duration}
      </div>

      <div style={{ marginTop: '20px', marginBottom: '20px', borderBottom: `2px solid ${COLORS.border}`, paddingBottom: '20px' }}>
        <h3 style={{ ...STYLES.h3, fontSize: '1.8rem' }}>{company}</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: '"Space Mono", monospace', color: COLORS.purple, fontWeight: 'bold', fontSize: '1.2rem' }}>
            {role}
          </span>
          <span style={{ fontFamily: '"Space Mono", monospace', opacity: 0.7 }}>
            {location}
          </span>
        </div>
      </div>
      
      <div style={STYLES.text}>
        {Array.isArray(details) ? (
          <ul style={{ paddingLeft: '20px', margin: 0 }}>
            {details.map((item, i) => (
              <li key={i} style={{ marginBottom: '10px' }}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Ford Motor Company',
      role: 'Site Reliability Engineer',
      duration: 'Apr 2024 - Aug 2024',
      location: 'Austin, TX (Remote)',
      color: COLORS.secondary,
      details: 'At Ford’s Connected Vehicle division, I focused on bringing clarity and reliability to how services shipped across teams. I rebuilt the release foundation using GitOps-based pipelines (GitHub Actions → ArgoCD → Helm) and reusable Terraform modules aligned with platform standards, while introducing SLO-driven dashboards that gave teams a shared understanding of system health. This improved release predictability, reduced rollout inconsistencies, and helped teams make more informed decisions around shipping and incident triage.'
    },
    {
      company: 'New York Life Insurance',
      role: 'Platform Engineer',
      duration: 'Feb 2019 - Jan 2022',
      location: 'Lebanon, NJ (Hybrid)',
      color: COLORS.accent,
      details: 'At New York Life, I helped modernize how regulated systems were delivered by re-architecting CI/CD and infrastructure workflows around modular Jenkins + Terraform patterns. This shift standardized how environments were provisioned, improved configuration consistency across hybrid/on-prem/cloud systems, and reduced deployment risk for SOX-bound applications. I also unified observability across Prometheus, ELK, and Sumo Logic, giving incident teams a clearer picture of system health and enabling faster, more predictable RCA during major events.'
    },
    {
      company: 'Walgreens',
      role: 'DevOps Engineer',
      duration: 'Apr 2017 - Feb 2019',
      location: 'Deerfield, IL',
      color: COLORS.primary,
      details: 'At Walgreens, I helped bring consistency to a hybrid delivery environment by building CI/CD patterns that worked seamlessly across both AWS and on-prem store systems. I implemented dual-mode pipelines using AWS CodeDeploy and Jenkins, introduced Terraform modules to standardize provisioning, and paired them with Ansible automation to eliminate config drift. To support reliability at scale, I rolled out Datadog metrics/tracing and centralized logging with Splunk, enabling earlier detection of issues and shifting teams from reactive support toward proactive monitoring and incident reduction.'
    },
     {
      company: 'Merck',
      role: 'DevOps Engineer',
      duration: 'Apr 2017 - Nov 2017',
      location: 'Charlotte, NC',
      color: COLORS.purple,
      details: [
        'Automated OS patching and provisioning across regulated VMware clusters using Ansible.',
        'Maintained Jenkins pipelines with ServiceNow workflows for audit-ready release cycles.',
        'Standardized VM templates via vRealize Automation to reduce configuration drift.'
      ]
    },
    {
      company: 'Kia Motors',
      role: 'Operations Engineer',
      duration: 'Sep 2015 - Apr 2017',
      location: 'Irvine, CA',
      color: COLORS.secondary,
      details: [
        'Supported Linux-based infrastructure for dealership telematics platforms.',
        'Automated nightly health checks using Bash and Cron.',
        'Monitored internal services via Nagios/Splunk to detect latency spikes.'
      ]
    }
  ];

  return (
    <div style={{ padding: '80px 0', backgroundColor: '#FFF0F5' }}>
      <div style={STYLES.container}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={STYLES.h2}>EXPERIENCE</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skills = [
    { name: 'AWS', slug: 'amazonwebservices' },
    { name: 'Kubernetes', slug: 'kubernetes' },
    { name: 'Docker', slug: 'docker' },
    { name: 'Terraform', slug: 'terraform' },
    { name: 'Ansible', slug: 'ansible' },
    { name: 'Python', slug: 'python' },
    { name: 'Jenkins', slug: 'jenkins' },
    { name: 'ArgoCD', slug: 'argo' },
    { name: 'Datadog', slug: 'datadog' },
    { name: 'Prometheus', slug: 'prometheus' },
    { name: 'Grafana', slug: 'grafana' },
    { name: 'Linux', slug: 'linux' },
    { name: 'Git', slug: 'git' },
    { name: 'Azure', slug: 'microsoftazure' },
    { name: 'Helm', slug: 'helm' },
    { name: 'Splunk', slug: 'splunk' },
    { name: 'Kafka', slug: 'apachekafka' }
  ];

  return (
    <div style={{ padding: '80px 0', backgroundColor: COLORS.white, borderTop: STYLES.border, borderBottom: STYLES.border }}>
      <div style={STYLES.container}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ ...STYLES.h2, backgroundColor: COLORS.secondary }}>TECH STACK</h2>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
          {skills.map((skill, i) => (
            <div key={i} style={{
              ...STYLES.skillPill,
              borderColor: [COLORS.primary, COLORS.secondary, COLORS.accent, COLORS.purple][i % 4],
              boxShadow: `4px 4px 0px ${[COLORS.primary, COLORS.secondary, COLORS.accent, COLORS.purple][i % 4]}`
            }}>
              <img 
                src={`https://cdn.simpleicons.org/${skill.slug}`} 
                height="16" 
                width="16" 
                alt="" 
                style={{ display: 'block' }}
              />
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Inmate Tracking System',
      org: 'University of Maryland Baltimore County',
      description: 'Analyzed each phase of SDLC and developed a system which will minimize human errors and improve efficiency in tracking.',
      color: COLORS.primary
    },
    {
      title: 'Movie Booking System',
      org: 'University of Maryland Baltimore County',
      description: 'Implemented a Movie Booking and Searching System on MySQL using PHP, HTML and CSS.',
      color: COLORS.secondary
    }
  ];

  return (
    <div style={{ padding: '80px 0' }}>
      <div style={STYLES.container}>
        <div style={{ textAlign: 'center' }}>
           <h2 style={{ ...STYLES.h2, backgroundColor: COLORS.purple, color: COLORS.white }}>PROJECTS</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {projects.map((proj, i) => (
             <div key={i} style={{ 
                position: 'relative', 
                border: '4px solid black', 
                backgroundColor: 'white',
                padding: '40px 30px', 
                boxShadow: '10px 10px 0px black'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-10px',
                  backgroundColor: COLORS.secondary,
                  border: '3px solid black',
                  padding: '5px 15px',
                  fontFamily: '"Archivo Black", sans-serif',
                  color: 'white',
                  fontSize: '0.8rem',
                  boxShadow: '3px 3px 0px black'
                }}>
                  PROJECT
                </div>
                
                <h3 style={{ ...STYLES.h3, borderBottom: '3px solid black', paddingBottom: '15px', marginBottom: '15px' }}>{proj.title}</h3>
                <p style={{ fontFamily: '"Space Mono", monospace', fontWeight: 'bold', marginBottom: '10px' }}>{proj.org}</p>
                <p style={STYLES.text}>{proj.description}</p>
                
                <a href="https://github.com/PavanAnganna90" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <div style={{
                    marginTop: '20px',
                    border: '3px solid black',
                    padding: '10px',
                    textAlign: 'center',
                    fontFamily: '"Space Mono", monospace',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: '5px 5px 0px black'
                  }}>
                    VIEW PROJECT <ExternalLink size={16}/>
                  </div>
                </a>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const EducationSection = () => (
   <div style={{ padding: '80px 0', backgroundColor: COLORS.bg }}>
      <div style={STYLES.container}>
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            
            {/* Education Column */}
            <div>
               <div style={{ 
                  backgroundColor: COLORS.primary, 
                  border: '4px solid black', 
                  padding: '15px', 
                  textAlign: 'center',
                  marginBottom: '20px',
                  boxShadow: '6px 6px 0px black'
               }}>
                  <h2 style={{ fontFamily: '"Archivo Black", sans-serif', margin: 0, fontSize: '2rem' }}>EDUCATION</h2>
               </div>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                     {
                        school: 'University of Maryland Baltimore County',
                        degree: 'Masters, Management Information Systems',
                        year: '2013 - 2015',
                        color: COLORS.accent
                     },
                     {
                        school: 'JNTUH College of Engineering Hyderabad',
                        degree: 'Bachelor of Technology - Electronics & Comm.',
                        year: '2008 - 2012',
                        color: COLORS.secondary
                     }
                  ].map((edu, i) => (
                     <div key={i} style={{ 
                        backgroundColor: 'white', 
                        border: '4px solid black', 
                        padding: '20px', 
                        display: 'flex', 
                        boxShadow: '8px 8px 0px black',
                        position: 'relative'
                     }}>
                        <div style={{ 
                           width: '20px', 
                           backgroundColor: edu.color, 
                           borderRight: '3px solid black',
                           marginRight: '20px',
                           marginTop: '-20px',
                           marginBottom: '-20px',
                           marginLeft: '-20px'
                        }}></div>
                        <div style={{ flex: 1 }}>
                           <div style={{ 
                              width: '50px', 
                              height: '50px', 
                              backgroundColor: edu.color, 
                              border: '3px solid black', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center',
                              marginBottom: '15px'
                           }}>
                              <BookOpen size={24} color="black"/>
                           </div>
                           <h4 style={{ fontFamily: '"Space Mono", monospace', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '5px' }}>{edu.school}</h4>
                           <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '0.9rem', marginBottom: '10px' }}>{edu.degree}</p>
                           <p style={{ fontFamily: '"Space Mono", monospace', color: '#666', fontSize: '0.9rem' }}>{edu.year}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Certifications Column */}
             <div>
               <div style={{ 
                  backgroundColor: COLORS.secondary, 
                  border: '4px solid black', 
                  padding: '15px', 
                  textAlign: 'center',
                  marginBottom: '20px',
                  boxShadow: '6px 6px 0px black'
               }}>
                  <h2 style={{ fontFamily: '"Archivo Black", sans-serif', margin: 0, fontSize: '2rem' }}>CERTIFICATIONS</h2>
               </div>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                     {
                        name: 'Certified Kubernetes Administrator (CKA)',
                        issuer: 'The Linux Foundation',
                        date: '2022 - 2025',
                        color: COLORS.purple
                     },
                     {
                        name: 'AWS Certified Solutions Architect',
                        issuer: 'Amazon Web Services',
                        date: 'Expired',
                        color: COLORS.purple
                     },
                      {
                        name: 'Sumo Pro User',
                        issuer: 'Sumo Logic',
                        date: 'Issued Jan 2019',
                        color: '#0033a0' // Sumo logic blueish
                     }
                  ].map((cert, i) => (
                     <div key={i} style={{ 
                        backgroundColor: 'white', 
                        border: '4px solid black', 
                        padding: '20px', 
                        display: 'flex', 
                        boxShadow: '8px 8px 0px black',
                        position: 'relative'
                     }}>
                        <div style={{ flex: 1, paddingLeft: '10px' }}>
                           <div style={{ 
                              display: 'flex',
                              alignItems: 'center',
                              gap: '15px',
                              marginBottom: '10px'
                           }}>
                              <div style={{ 
                                 width: '40px', 
                                 height: '40px', 
                                 borderRadius: '50%',
                                 backgroundColor: cert.color, 
                                 border: '3px solid black', 
                                 display: 'flex', 
                                 alignItems: 'center', 
                                 justifyContent: 'center'
                              }}>
                                 <Award size={20} color="white"/>
                              </div>
                              <h4 style={{ fontFamily: '"Space Mono", monospace', fontWeight: 'bold', fontSize: '1rem', margin: 0 }}>{cert.name}</h4>
                           </div>
                           <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '0.9rem', marginBottom: '5px', paddingLeft: '55px' }}>{cert.issuer}</p>
                           <p style={{ fontFamily: '"Space Mono", monospace', color: '#666', fontSize: '0.8rem', paddingLeft: '55px' }}>{cert.date}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

         </div>
      </div>
   </div>
);

const RecommendationsSection = () => (
  <div style={{ padding: '80px 0', backgroundColor: COLORS.white }}>
    <div style={STYLES.container}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={STYLES.h2}>TESTIMONIALS</h2>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto', ...STYLES.card, transform: 'rotate(-1deg)' }}>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <Quote size={40} color={COLORS.primary} />
          <div>
            <p style={{ ...STYLES.text, fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '20px' }}>
              "Pavan's work ethic and his priorities are always the client first. He always goes out of his way to find the right solution for his clients issues and make sure everything is going well. He is very responsive and run projects with high professionalism and high quality. I recommend to Pavan because I know he will take care of any new challenge."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: COLORS.border, borderRadius: '50%' }}></div>
              <div>
                <p style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: '1.2rem', margin: 0 }}>Marco Coronel</p>
                <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '0.9rem', opacity: 0.7, margin: 0 }}>System Engineer / Project Coord</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer 
      ref={footerRef}
      style={{
        marginTop: '0px',
        backgroundColor: COLORS.border,
        color: COLORS.white,
        padding: '60px 20px',
        textAlign: 'center',
        fontFamily: '"Space Mono", monospace',
        borderTop: `5px solid ${COLORS.text}`
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          fontFamily: '"Archivo Black", sans-serif', 
          fontSize: '3rem', 
          marginBottom: '30px', 
          color: COLORS.accent, 
          textTransform: 'uppercase',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}>
          Let's Connect
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <a href="https://www.linkedin.com/in/pavan90/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
             <InteractiveButton style={{ backgroundColor: '#0077B5', color: COLORS.white }}>
                <Linkedin size={24} /> LINKEDIN
             </InteractiveButton>
          </a>
           <a href="https://github.com/PavanAnganna90" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
             <InteractiveButton style={{ backgroundColor: '#d12e2e', color: COLORS.white }}>
                <Github size={24} /> GITHUB
             </InteractiveButton>
          </a>
        </div>
        <p style={{ opacity: 0.6 }}>© {new Date().getFullYear()} Pavan Anganna. Built with React & Neo-Brutalism.</p>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div style={{ 
      backgroundColor: COLORS.bg, 
      minHeight: '100vh', 
      backgroundImage: 'radial-gradient(#ffb6c1 2px, transparent 2px)',
      backgroundSize: '30px 30px',
      color: COLORS.text // Force text color inheritance
    }}>
      <nav style={{ 
        padding: '20px', 
        borderBottom: STYLES.border, 
        backgroundColor: COLORS.white, 
        position: 'sticky',
        top: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ 
          fontFamily: '"Archivo Black", sans-serif', 
          fontSize: '1.5rem', 
          border: '3px solid black', 
          padding: '5px 10px',
          boxShadow: '4px 4px 0px black'
        }}>
          PAVAN.exe
        </div>
        <a href="mailto:pavan.nag90@gmail.com" style={{ textDecoration: 'none' }}>
          <button style={{ 
            fontFamily: '"Space Mono", monospace', 
            fontWeight: 'bold', 
            backgroundColor: COLORS.secondary, 
            border: '3px solid black', 
            padding: '8px 20px',
            boxShadow: '4px 4px 0px black',
            cursor: 'pointer'
          }}>
            CONTACT ME
          </button>
        </a>
      </nav>

      <Hero />
      <Ticker text="DEVOPS • SRE • KUBERNETES • CLOUD • AUTOMATION • " color={COLORS.accent} />
      <ExperienceSection />
      <Ticker text="INFRASTRUCTURE AS CODE • CI/CD • OBSERVABILITY • SECURITY • " color={COLORS.primary} />
      <ProjectsSection />
      <EducationSection />
      <SkillsSection />
      <RecommendationsSection />
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);