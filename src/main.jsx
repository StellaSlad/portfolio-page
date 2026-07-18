import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const linkedin = 'https://www.linkedin.com/in/stella-slad/';
const github = 'https://github.com/StellaSlad';

const projects = [
  {
    title: 'chem-games',
    type: 'Interactive chemistry learning platform',
    description: 'A browser-based collection of chemistry games designed to make core concepts more hands-on, playful, and memorable.',
    stack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    href: 'https://github.com/StellaSlad/chem-games',
    highlights: ['Learning experience design', 'Responsive game UI'],
  },
  {
    title: 'HagenCopilot',
    type: 'University group project · 2024',
    description: 'A working study-support Q&A chatbot built with retrieval-augmented generation for the Language Technology practical course at the University of Hagen.',
    stack: ['RAG', 'LLMs', 'Agile project management'],
    href: `${github}/HagenCopilot`,
    highlights: ['Team of four', 'University VPN required for access'],
  },
  {
    title: 'Universal Rotation Pulse Analysis',
    type: 'NMR spectroscopy research tool',
    description: 'Python scripts and plots for analysing broadband Universal Rotation pulses and checking whether an RF-pulse is a Universal Rotation pulse.',
    stack: ['Python', 'NMR spectroscopy', 'Data visualisation'],
    href: `${github}/analysis_of_universal_rotation_pulses`,
    highlights: ['Research software', 'Frequency-offset plots'],
  },
];

const skillGroups = [
  {
    title: 'Technical',
    description: 'Tools and technologies I use to build, analyse, and automate.',
    skills: [
      ['Python', 90], ['SQL', 85], ['Appian', 85], ['Data pipelines & Databricks', 82],
      ['AI / LLM applications', 80], ['React & TypeScript', 68],
    ],
  },
  {
    title: 'Professional',
    description: 'The human skills that help projects move forward.',
    skills: [
      ['Problem solving', 92], ['Stakeholder collaboration', 85], ['Teaching & mentoring', 88],
      ['Agile delivery', 80], ['Communication', 85],
    ],
  },
];

const experience = [
  ['Associate Consultant', 'Appian · Full-time', 'Oct 2025 — Present', 'Melbourne, Australia · Hybrid', 'Helping Appian clients automate and improve their processes through low-code development and consulting.'],
  ['Coding & Robotics Instructor', 'STEM Birds · Contract', 'Jul 2025 — Sep 2025', 'Melbourne, Australia · On-site', 'Taught primary-school students coding and robotics with Scratch, LEGO SPIKE, LEGO WeDo 2.0, and Ozobot.'],
  ['I&T Intern', 'CSL · Internship', 'Nov 2024 — Feb 2025', 'Melbourne, Australia · Hybrid', 'Collaborated with technical stakeholders on data-pipeline architecture options and cost assessment.'],
  ['Research & Teaching Assistant', 'Karlsruhe Institute of Technology · Part-time', 'Jun 2019 — May 2024', 'Karlsruhe, Germany', 'Developed specialised software for the optimisation and characterisation of radiofrequency pulses used in NMR spectroscopy.'],
];

const education = [
  ['MSc, Applied Computer Science', 'FernUniversität in Hagen', 'Jan 2023 — Jun 2025', 'Specialisations: Data Science, AI, Language Technology'],
  ['MSc, Chemical Biology', 'Karlsruhe Institute of Technology (KIT)', '2016 — 2019', 'Grade: 1.1 (High Distinction) · Biophysical chemistry and NMR spectroscopy'],
  ['BSc, Chemical Biology', 'Karlsruhe Institute of Technology (KIT)', '2013 — 2016', 'Grade: 1.6 (Distinction) · German Academic National Foundation scholarship'],
];

function ArrowUpRight() { return <span aria-hidden="true" className="arrow">↗</span>; }

function Timeline({ items, kind }) {
  return <div className={`timeline ${kind}`}>{items.map((item) => (
    <article className="timeline-item" key={item[0]}><span className="timeline-mark" aria-hidden="true" />
      <div><h3>{item[0]}</h3><p className="timeline-org">{item[1]}</p><p className="timeline-date">{item[2]}</p>{kind === 'experience' && <p className="timeline-location">{item[3]}</p>}<p className="timeline-copy">{item[kind === 'experience' ? 4 : 3]}</p></div>
    </article>
  ))}</div>;
}

function App() {
  return <main>
    <nav className="nav" aria-label="Primary navigation"><a className="brand" href="#top" aria-label="Stella Slad home">SS<span>.</span></a><div className="nav-links"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#contact">Contact</a></div></nav>

    <section className="hero" id="top"><p className="eyebrow"><span className="status-dot" /> Associate Consultant & full-stack developer</p><h1>Building thoughtful<br /><em>digital experiences.</em></h1><div className="hero-bottom"><p>Hi, I’m Stella — an Appian-certified developer who brings together AI, data, chemistry, and user-centred software to solve practical problems.</p><a className="button button-dark" href="#work">Explore my work <ArrowUpRight /></a></div><div className="hero-art" aria-hidden="true"><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="orb" /><span className="code-card">const idea =<br /><strong>makeItReal()</strong></span></div></section>

    <section className="section work" id="work"><div className="section-heading"><p className="eyebrow">Selected work</p><h2>Learning by <em>making.</em></h2></div><div className="project-list">{projects.map((project, index) => <article className="project" key={project.title}><div className="project-number">0{index + 1}</div><div><p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="project-highlights">{project.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}</div></div><div className="project-meta"><div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><a href={project.href} target="_blank" rel="noreferrer">View project <ArrowUpRight /></a></div></article>)}</div></section>

    <section className="section about" id="about"><div className="about-intro"><p className="eyebrow">About me</p><h2>Curious, practical,<br />and <em>always improving.</em></h2></div><div className="about-copy"><p>I’m a certified Appian Developer with a passion for AI. My background spans NMR spectroscopy, Python and SQL data pipelines, and full-stack development.</p><p>Outside work, I enjoy board games, puzzles, playing keyboard, and table tennis. I also love meeting people interested in data, AI, physics, chemistry, or biotechnology.</p><a className="text-link" href={linkedin} target="_blank" rel="noreferrer">View LinkedIn profile <ArrowUpRight /></a></div></section>

    <section className="section skills-section" id="skills"><div className="section-heading"><p className="eyebrow">Capabilities</p><h2>Skills with<br /><em>real-world context.</em></h2></div><div className="skill-groups">{skillGroups.map((group) => <section className="skill-group" key={group.title}><div><p className="skill-group-number">{group.title === 'Technical' ? '01' : '02'}</p><h3>{group.title} skills</h3><p>{group.description}</p></div><div className="skill-list">{group.skills.map(([skill, level]) => <div className="skill-row" key={skill}><div className="skill-label"><span>{skill}</span><span>{level}%</span></div><div className="meter" role="meter" aria-label={`${skill} proficiency`} aria-valuenow={level} aria-valuemin="0" aria-valuemax="100"><span style={{ width: `${level}%` }} /></div></div>)}</div></section>)}</div></section>

    <section className="section background" id="experience"><div className="section-heading"><p className="eyebrow">Career path</p><h2>Experience shaped<br />by <em>curiosity.</em></h2></div><Timeline items={experience} kind="experience" /><div className="education-heading"><p className="eyebrow">Education</p><h2>Strong academic<br /><em>foundations.</em></h2></div><Timeline items={education} kind="education" /></section>

    <section className="section credentials"><div className="credentials-grid"><div><p className="eyebrow">Credentials</p><h2>Always<br /><em>learning.</em></h2></div><div className="credential-list"><article><h3>Appian Certified Associate Developer</h3><p>Appian · Issued Nov 2025 · Expires May 2027</p></article><article><h3>FREE PyTorch Bootcamp</h3><p>OpenCV University · Issued Jul 2025</p></article><article><h3>Anaconda Python for Data Science Professional Certificate</h3><p>Anaconda · Issued Feb 2025</p></article><article><h3>Build Data Pipelines with Delta Live Tables</h3><p>Databricks Academy · Issued Jan 2025</p></article></div></div><div className="extras"><div><p className="eyebrow">Community</p><h3>STEM mentor & coach</h3><p>Mentored girls interested in STEM with CyberMentor, and coached with she.codes by TEC.</p></div><div><p className="eyebrow">Academic recognition</p><h3>Scholarships & problem solving</h3><p>Recipient of multiple academic scholarships, including support from the German Academic Scholarship Foundation. Former Mathematics Olympiad enthusiast.</p></div><div><p className="eyebrow">Languages</p><h3>English · German · Russian</h3><p>Native-level proficiency in all three languages.</p></div></div></section>

    <section className="contact" id="contact"><p className="eyebrow">Contact</p><h2>Open to junior<br /><em>developer roles.</em></h2><div className="contact-actions"><a className="button button-light" href={linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight /></a><span className="contact-note">Interested in software, data, AI, or science? Find me on LinkedIn.</span></div></section>
    <footer><span>© {new Date().getFullYear()} Stella Slad</span><span>Designed & built with React</span></footer>
  </main>;
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
