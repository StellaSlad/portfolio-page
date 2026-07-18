import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const projects = [
  {
    title: 'ChemGames',
    type: 'Interactive learning platform',
    description: 'A collection of browser-based chemistry games that make core concepts feel hands-on, fast, and rewarding.',
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    href: 'https://github.com/StellaSlad',
    highlights: ['Designed reusable game UI', 'Built responsive interaction flows'],
  },
/* add more here */
];

/* update skills and have skill categories */
const skills = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML & CSS', 'Git & GitHub', 'Responsive UI', 'REST APIs'];

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function App() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Stella Slad home">SS<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow"><span className="status-dot" /> Available for junior opportunities</p>
        <h1>Building thoughtful<br /><em>digital experiences.</em></h1>
        <div className="hero-bottom">
          <p>Hi, I’m Stella — a junior software developer focused on turning ideas into clean, useful, and enjoyable web experiences.</p>
          <a className="button button-dark" href="#work">Explore my work <ArrowUpRight /></a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="orb" />
          <span className="code-card">const idea =<br /><strong>makeItReal()</strong></span>
        </div>
      </section>

      <section className="section work" id="work">
        <div className="section-heading"><p className="eyebrow">Selected work</p><h2>Learning by <em>making.</em></h2></div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project" key={project.title}>
              <div className="project-number">0{index + 1}</div>
              <div><p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p></div>
              <div className="project-meta"><div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><a href={project.href} target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight /></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section about" id="about">
        <div className="about-intro"><p className="eyebrow">About me</p><h2>Curious, practical,<br />and <em>always improving.</em></h2></div>
        <div className="about-copy"><p>I’m an early-career developer who enjoys the full journey: understanding the problem, shaping a clear interface, and refining the details until the result feels right.</p><p>I’m looking for a team where I can contribute with care, learn from experienced people, and keep building software that genuinely helps its users.</p><a className="text-link" href="https://github.com/StellaSlad" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight /></a></div>
        <div className="skill-grid">{skills.map((skill, index) => <div key={skill}><span>0{index + 1}</span>{skill}</div>)}</div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Let’s connect</p>
        <h2>Have a role in mind?<br /><em>Let’s talk.</em></h2>
        <div className="contact-actions"><a className="button button-light" href="https://github.com/StellaSlad" target="_blank" rel="noreferrer">Visit my GitHub <ArrowUpRight /></a><span className="contact-note">Add your preferred email or LinkedIn link here before publishing.</span></div>
      </section>

      <footer><span>© {new Date().getFullYear()} Stella Slad</span><span>Designed & built with React</span></footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
