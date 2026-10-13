import { useEffect, useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BriefcaseBusiness, CalendarDays,
  Check, Code2, Command, ExternalLink, FileText, FolderKanban, GraduationCap,
  Github, Globe2, House, Mail, MapPin, Moon, Palette, PanelsTopLeft, Search,
  Sparkles, Sun, Terminal, UserRound, Wifi, BatteryFull, Database,
} from 'lucide-react';

const GITHUB = 'https://github.com/amirullqayyumm';
const HRMS = `${GITHUB}/HR-Management-System`;
const EMAIL = 'amirullqayyumm@gmail.com';

const navItems = [
  { id: 'home', label: 'Welcome', Icon: House },
  { id: 'about', label: 'About me', Icon: UserRound },
  { id: 'experience', label: 'Experience', Icon: BriefcaseBusiness },
  { id: 'skills', label: 'My skills', Icon: Code2 },
  { id: 'projects', label: 'Projects', Icon: FolderKanban },
  { id: 'contact', label: 'Contact', Icon: Mail },
];

const skillGroups = [
  { title: 'Frontend & design', Icon: Palette, values: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Angular', 'Vue.js', 'Figma', 'UI/UX'] },
  { title: 'Backend & databases', Icon: Database, values: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'PHP', 'Java / Spring Boot', 'MySQL', 'REST APIs'] },
  { title: 'Tools & workflow', Icon: Terminal, values: ['Git & GitHub', 'Postman', 'Agile / Scrum', 'Flutter / Dart', 'SQL design', 'Power BI (training)'] },
];

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow"><span className="eyebrow-dot" /> {eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Home({ navigate }) {
  return (
    <div className="page home-page" key="home">
      <div className="home-copy">
        <span className="hello-pill"><span className="hello-light" /> Hello, welcome to my space</span>
        <h1>Hi, I'm <span>Amirul</span><br />Qayyum<span className="period">.</span></h1>
        <p className="home-role">Software Engineering <span className="role-star">✳</span> Web Development <span className="role-star">✳</span> UI/UX</p>
        <p className="home-description">I enjoy turning ideas into thoughtful digital experiences — combining software development, clean interfaces, and practical problem-solving.</p>
        <div className="home-actions">
          <button className="primary-btn" onClick={() => navigate('projects')}>Explore my work <ArrowUpRight size={17} /></button>
          <button className="ghost-btn" onClick={() => navigate('contact')}>Get in touch <ArrowRight size={17} /></button>
        </div>
        <div className="home-meta"><MapPin size={15} /> Setapak Jaya, Kuala Lumpur <span>·</span> Based in Malaysia</div>
      </div>
      <div className="home-art" aria-label="Decorative developer workspace illustration">
        <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
        <div className="art-glow" />
        <div className="terminal-card">
          <div className="terminal-head"><div className="traffic-lights small"><i /><i /><i /></div><span>amirul@portfolio ~ %</span></div>
          <div className="terminal-lines">
            <p><span className="terminal-green">➜</span> <span className="terminal-blue">~</span> whoami</p>
            <p className="terminal-output">Amirul Qayyum</p>
            <p><span className="terminal-green">➜</span> <span className="terminal-blue">~</span> cat interests.txt</p>
            <p className="terminal-output">software engineering</p>
            <p className="terminal-output">web development</p>
            <p className="terminal-output">beautiful interfaces <span className="terminal-cursor">▌</span></p>
          </div>
        </div>
        <div className="floating-symbol symbol-code"><Code2 size={23} /></div>
        <div className="floating-symbol symbol-sparkle"><Sparkles size={22} /></div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="page content-page" key="about">
      <SectionHeading eyebrow="01 / INTRODUCTION" title="A little about me." description="Curious about technology. Intentional about design." />
      <div className="about-grid">
        <div className="glass-panel about-story">
          <div className="panel-icon violet"><UserRound size={23} /></div>
          <h3>Hello, I'm Amirul Qayyum Bin Zaudin.</h3>
          <p>I studied Computer Science with a focus on Software Engineering at Universiti Teknologi Malaysia, Kuala Lumpur. I like building useful web applications and understanding the people who use them.</p>
          <p>My background combines software development and multimedia design. That mix shapes how I approach projects: a solid technical foundation, clear interfaces, and attention to detail.</p>
          <div className="inline-tags"><Tag>Software development</Tag><Tag>Problem-solving</Tag><Tag>UI/UX</Tag></div>
        </div>
        <div className="about-side">
          <div className="glass-panel compact-panel">
            <div className="panel-icon peach"><GraduationCap size={22} /></div>
            <span className="card-kicker">EDUCATION</span>
            <h3>Bachelor of Computer Science</h3>
            <p>Software Engineering · UTM Kuala Lumpur</p>
            <span className="muted-caption">2022 – 2026</span>
          </div>
          <div className="glass-panel compact-panel">
            <div className="panel-icon blue"><GraduationCap size={22} /></div>
            <span className="card-kicker">EDUCATION</span>
            <h3>Diploma in Computer Science</h3>
            <p>Multimedia · UTM Kuala Lumpur</p>
            <span className="muted-caption">2019 – 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="page content-page" key="experience">
      <SectionHeading eyebrow="02 / MY JOURNEY" title="Experience & learning." description="Hands-on work across software development, design, and data." />
      <div className="timeline">
        <div className="timeline-entry glass-panel"><div className="timeline-marker"><BriefcaseBusiness size={17} /></div>
          <div><span className="card-kicker">INTERNSHIP · SOFTWARE DEVELOPMENT</span><h3>Software Developer Intern</h3><p className="timeline-place">DevDuck Solutions</p><p>Helped build and improve a company web application, worked on secure login and access controls, and collaborated with developers to test and resolve issues.</p></div>
        </div>
        <div className="timeline-entry glass-panel"><div className="timeline-marker pink"><Palette size={17} /></div>
          <div><span className="card-kicker">INTERNSHIP · CREATIVE DESIGN</span><h3>Graphic Design Intern</h3><p className="timeline-place">RHJ Tijarah Resources</p><p>Created promotional videos and designed social media graphics, maintaining visual consistency across content.</p></div>
        </div>
        <div className="timeline-entry glass-panel"><div className="timeline-marker amber"><GraduationCap size={17} /></div>
          <div><span className="card-kicker">PROFESSIONAL TRAINING</span><h3>PRISM Business Intelligence Program</h3><p className="timeline-place">Universiti Teknologi Malaysia · Kuala Lumpur</p><p>Participated in a four-month program focused on business intelligence concepts and data visualization with Power BI.</p></div>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="page content-page" key="skills">
      <SectionHeading eyebrow="03 / TOOLBOX" title="Things I work with." description="Technologies and creative tools I've used through projects, study, and hands-on experience." />
      <div className="skills-grid">
        {skillGroups.map(({ title, Icon, values }) => (
          <div className="glass-panel skill-card" key={title}>
            <div className="panel-icon violet"><Icon size={22} /></div><h3>{title}</h3>
            <div className="skill-tags">{values.map((value) => <Tag key={value}>{value}</Tag>)}</div>
          </div>
        ))}
      </div>
      <div className="language-strip"><Globe2 size={19} /><span><strong>Languages</strong> · Bahasa Malaysia (excellent) · English (intermediate)</span></div>
    </div>
  );
}

function Projects() {
  return (
    <div className="page content-page" key="projects">
      <SectionHeading eyebrow="04 / SELECTED WORK" title="Things I've built." description="One featured full-stack project — built to put what I've learned into practice." />
      <div className="project-card glass-panel">
        <div className="project-preview" aria-label="Illustration of an HR management dashboard">
          <div className="mini-window"><div className="mini-top"><div className="traffic-lights small"><i /><i /><i /></div><span>HRMS Dashboard</span></div>
            <div className="mini-app"><aside className="mini-sidebar"><div className="mini-logo">HRMS</div><div className="mini-nav selected" /><div className="mini-nav" /><div className="mini-nav short" /><div className="mini-nav" /></aside>
              <section className="mini-main"><div className="mini-title" /><div className="mini-stats"><div /><div /><div /></div><div className="mini-table"><div /><div /><div /><div /></div></section>
            </div>
          </div>
        </div>
        <div className="project-details">
          <span className="eyebrow"><span className="eyebrow-dot" /> FEATURED PROJECT</span>
          <h3>HR Management System <span>↗</span></h3>
          <p>A full-stack HR platform for managing employees, organizational reporting, leave requests, approvals, attendance, and role-based access.</p>
          <div className="feature-grid"><span><Check size={15} /> Role-based dashboards</span><span><Check size={15} /> Leave management</span><span><Check size={15} /> Employee records</span><span><Check size={15} /> Attendance tracking</span></div>
          <div className="skill-tags project-tags"><Tag>React</Tag><Tag>Node.js</Tag><Tag>Express</Tag><Tag>Prisma</Tag><Tag>PostgreSQL</Tag></div>
          <div className="project-actions"><a href={HRMS} target="_blank" rel="noopener noreferrer" className="primary-btn">GitHub repository <Github size={16} /></a><span className="muted-caption">Repository currently private</span></div>
        </div>

        
<div className="applyflow-project-card">
  <div className="applyflow-project-top">
    <div className="applyflow-project-icon">AF</div>
    <span className="applyflow-project-status">
      Live Project
    </span>
  </div>

  <h3>ApplyFlow — Job Application Tracker</h3>

  <p>
    A modern React application for managing job applications,
    tracking interview progress, organizing opportunities,
    and viewing career analytics through an interactive
    dashboard and Kanban board.
  </p>

  <div className="applyflow-project-tech">
    <span>React</span>
    <span>JavaScript</span>
    <span>Vite</span>
    <span>CSS</span>
    <span>LocalStorage</span>
  </div>

  <div className="applyflow-project-links">
    <a
      href="https://amirullqayyumm.github.io/ApplyFlow-Job-Tracker/"
      target="_blank"
      rel="noopener noreferrer"
      className="applyflow-live-btn"
    >
      ↗ Live Demo
    </a>

    <a
      href="https://github.com/amirullqayyumm/ApplyFlow-Job-Tracker"
      target="_blank"
      rel="noopener noreferrer"
      className="applyflow-github-btn"
    >
      GitHub Repo ↗
    </a>
  </div>
</div>

      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="page content-page contact-page" key="contact">
      <SectionHeading eyebrow="05 / SAY HELLO" title="Let's make something great." description="Interested in working together or just want to connect? My inbox is open." />
      <div className="contact-banner glass-panel">
        <div className="contact-orb"><Mail size={34} /></div>
        <div className="contact-banner-copy"><span className="card-kicker">LET'S CONNECT</span><h3>Have an idea? Let's talk.</h3><p>I'm interested in software development, web experiences, and thoughtful digital products.</p>
          <a className="primary-btn" href={`mailto:${EMAIL}?subject=Hello%20Amirul`}>Send me an email <ArrowUpRight size={17} /></a>
        </div>
      </div>
      <div className="contact-links"><a className="contact-link glass-panel" href={`mailto:${EMAIL}`}><Mail size={20} /><div><span>Email</span><strong>{EMAIL}</strong></div><ArrowUpRight size={17} /></a><a className="contact-link glass-panel" href={GITHUB} target="_blank" rel="noopener noreferrer"><Github size={20}/><div><span>GitHub</span><strong>github.com/amirullqayyumm</strong></div><ArrowUpRight size={17}/></a></div>
      <p className="resume-note"><FileText size={15} /> Résumé available on request.</p>
    </div>
  );
}

const pages = { home: Home, about: About, experience: Experience, skills: Skills, projects: Projects, contact: Contact };

export default function App() {
  const [active, setActive] = useState('home');
  const [dark, setDark] = useState(() => localStorage.getItem('portfolio-dark') !== 'false');
  const [time, setTime] = useState(new Date());

  useEffect(() => { localStorage.setItem('portfolio-dark', String(dark)); }, [dark]);
  useEffect(() => { const clock = setInterval(() => setTime(new Date()), 30_000); return () => clearInterval(clock); }, []);

  const ActivePage = pages[active];
  const current = navItems.find((item) => item.id === active);
  const timeLabel = new Intl.DateTimeFormat('en-MY', { weekday: 'short', hour: 'numeric', minute: '2-digit' }).format(time);

  return (
    <div className={`desktop ${dark ? 'dark-theme' : 'light-theme'}`}>
      <div className="wallpaper-curve curve-a"/><div className="wallpaper-curve curve-b"/><div className="wallpaper-curve curve-c"/>
      <header className="menu-bar">
        <div className="menu-left"><Command size={19} strokeWidth={2.6}/><strong>Amirul's Portfolio</strong><span className="menu-label">File</span><span className="menu-label">View</span><span className="menu-label">Window</span></div>
        <div className="menu-right"><span className="menu-label status-text">Software Developer</span><Wifi size={16}/><BatteryFull size={19}/><span className="menu-clock">{timeLabel}</span></div>
      </header>

      <main className="desktop-main">
        <section className="mac-window" aria-label="Portfolio window">
          <div className="window-toolbar"><div className="traffic-lights"><i/><i/><i/></div><div className="window-title"><PanelsTopLeft size={15}/><span>{current.label} — Amirul Qayyum</span></div><div className="toolbar-icons"><button type="button" onClick={() => setDark((previous) => !previous)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} title="Change appearance">{dark ? <Sun size={18}/> : <Moon size={18}/>}</button><a href={GITHUB} target="_blank" rel="noopener noreferrer" title="GitHub profile" aria-label="GitHub profile"><Github size={18}/></a></div></div>
          <div className="window-body">
            <aside className="finder-sidebar"><div className="finder-heading">FAVORITES</div><div className="finder-nav">{navItems.map(({ id, label, Icon }) => <button type="button" key={id} className={active === id ? 'is-active' : ''} onClick={() => setActive(id)}><Icon size={17}/><span>{label}</span></button>)}</div><div className="sidebar-bottom"><div className="avatar">AQ</div><div><strong>Amirul Qayyum</strong><span>Software & design</span></div></div></aside>
            <div className="window-content" key={active}><ActivePage navigate={setActive}/></div>
          </div>
          <div className="window-status"><span><span className="status-dot"/> Portfolio workspace</span><span>Made with React <span className="status-heart">♥</span></span></div>
        </section>
      </main>

      <nav className="dock" aria-label="Portfolio navigation">{navItems.map(({ id, label, Icon }) => <button key={id} type="button" onClick={() => setActive(id)} className={`dock-item ${active === id ? 'dock-active' : ''}`} title={label} aria-label={label} aria-current={active === id ? 'page' : undefined}><span className={`dock-icon dock-${id}`}><Icon size={23} strokeWidth={1.8}/></span><span className="dock-dot"/></button>)}<span className="dock-separator"/><a className="dock-item" href={GITHUB} target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="Open GitHub"><span className="dock-icon dock-github"><Github size={23}/></span></a></nav>
    </div>
  );
}
