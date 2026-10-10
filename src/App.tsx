import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Copy,
  Database,
  Download,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  ServerCog,
  Trophy,
} from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import heroImage from './assets/portfolio-hero.png'

const profile = {
  name: 'Aantor Kar',
  role: 'Full-Stack Developer',
  location: 'NIT Agartala',
  email: 'aantor.kar10@gmail.com',
  phone: '+91-7003412366',
  linkedin: 'https://www.linkedin.com/in/aantor-kar-0a8696335/',
  github: 'https://github.com/Aantor-Kar/',
  leetcode: 'https://leetcode.com/u/Aantor/',
  resume: '/Aantor-Kar-Resume.pdf',
}

const stats = [
  { value: '8.91', label: 'Current CGPA' },
  { value: '200+', label: 'DSA Problems' },
  { value: 'Top 50', label: 'SIH Internal 2025' },
]

const skillGroups = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['C++', 'C', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frontend',
    icon: Layers3,
    skills: ['React.js', 'Next.js', 'HTML', 'CSS', 'TailwindCSS', 'Vite'],
  },
  {
    title: 'Backend',
    icon: ServerCog,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'Authorization', 'Webhooks'],
  },
  {
    title: 'Data & Tools',
    icon: Database,
    skills: ['MongoDB', 'PostgreSQL', 'Prisma ORM', 'Docker', 'GitHub', 'Vercel', 'Stripe API', 'Gemini AI APIs'],
  },
]

const projects = [
  {
    title: 'Full-Stack E-Commerce Website',
    category: 'Commerce platform',
    description:
      'A production-style store with authentication, catalog management, cart persistence, payments, role-based access, and an admin dashboard.',
    impact: ['Secure payment workflow', 'Inventory and order processing', 'Responsive React storefront'],
    stack: ['React', 'TailwindCSS', 'Express.js', 'MongoDB', 'Stripe API', 'Vercel'],
    links: [
      { label: 'Live Demo', href: 'https://forever-eta-six.vercel.app/' },
      { label: 'Admin Panel', href: 'https://forever-admin-six-lovat.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/Aantor-Kar/e-commerce' },
    ],
    tone: 'coral',
  },
  {
    title: 'AI Resume Builder',
    category: 'AI productivity app',
    description:
      'An AI resume generation system with template customization, live preview, dynamic content editing, and export-ready workflows.',
    impact: ['Gemini AI content generation', 'Live resume preview', 'Relational data models'],
    stack: ['Next.js', 'Prisma ORM', 'PostgreSQL', 'Gemini AI', 'API Routes'],
    links: [
      { label: 'Live Demo', href: 'https://ai-resume-builder-gamma-brown.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/Aantor-Kar/ai-resume-builder' },
    ],
    tone: 'teal',
  },
  {
    title: 'AI Website Builder',
    category: 'AI builder platform',
    description:
      'A prompt-to-website system that turns natural language ideas into functional web applications with workspaces and code visualization.',
    impact: ['Prompt-driven app generation', 'Project persistence', 'Community sharing features'],
    stack: ['React', 'AI APIs', 'Workspace UX', 'Project Management'],
    links: [
      { label: 'Live Demo', href: 'https://site-builder-woad.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/Aantor-Kar/site-builder' },
    ],
    tone: 'blue',
  },
]

const timeline = [
  {
    title: 'Full Stack Development Trainee',
    place: 'OutriX',
    date: 'Jun 2026 - Jul 2026',
    points: [
      'Completed a practical one-month full-stack development training program.',
      'Built small full-stack projects covering backend authentication, authorization, protected routes, and frontend integration.',
    ],
  },
  {
    title: 'B.Tech in Electronics and Communication Engineering',
    place: 'National Institute of Technology Agartala',
    date: '2024 - Present',
    points: ['Current CGPA: 8.91', 'Blending engineering fundamentals with modern web application development.'],
  },
]

const achievements = [
  'Solved 200+ Data Structures and Algorithms problems across LeetCode and GeeksforGeeks.',
  'Covered arrays, linked lists, trees, graphs, recursion, and dynamic programming through regular practice.',
  'Selected among the top 50 teams in SIH Internal Hackathon 2025.',
]

function App() {
  const [copyMessage, setCopyMessage] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const copyValue = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopyMessage(`${label} copied`)
    } catch {
      setCopyMessage(`${label}: ${value}`)
    }

    window.setTimeout(() => setCopyMessage(''), 2200)
  }

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '').trim()
    const message = String(data.get('message') || '').trim()
    const senderEmail = String(data.get('email') || '').trim()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'a recruiter'}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${senderEmail}`)

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    event.currentTarget.reset()
  }

  return (
    <div className="site-shell">
      <header className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Aantor Kar home">
          <span>AK</span>
          <strong>Aantor Kar</strong>
        </a>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="icon-button" href={profile.resume} download aria-label="Download resume">
          <Download size={18} />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label="Navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <Menu size={19} />
        </button>
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>
            Skills
          </a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)}>
            Experience
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">ECE student at NIT Agartala</p>
            <h1>{profile.name}</h1>
            <p className="hero-lede">
              Full-stack developer building recruiter-ready products with React, Next.js, Node.js,
              databases, payments, and AI-assisted workflows.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href="#projects">
                View Projects
                <ArrowUpRight size={18} />
              </a>
              <a className="button secondary" href="#contact">
                Contact Me
                <Mail size={18} />
              </a>
              <a className="button ghost" href={profile.resume} download>
                Resume
                <Download size={18} />
              </a>
            </div>
            <div className="profile-links" aria-label="Profile links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <BriefcaseBusiness size={18} />
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Code2 size={18} />
                GitHub
              </a>
              <a href={profile.leetcode} target="_blank" rel="noreferrer">
                <BookOpen size={18} />
                LeetCode
              </a>
            </div>
          </div>
        </section>

        <section className="stat-band" aria-label="Career highlights">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="section intro-section">
          <div className="section-heading">
            <p className="eyebrow">Profile Snapshot</p>
            <h2>Developer with product instincts and strong fundamentals.</h2>
          </div>
          <div className="intro-grid">
            <p>
              I build full-stack web applications with clear user flows, reliable server-side
              logic, and polished interfaces. My strongest work sits at the intersection of product
              engineering, AI workflows, and practical backend systems.
            </p>
            <ul className="quick-list">
              <li>
                <CheckCircle2 size={18} />
                Authentication, protected routes, and role-based access control
              </li>
              <li>
                <CheckCircle2 size={18} />
                REST APIs with Express.js, MongoDB, PostgreSQL, and Prisma
              </li>
              <li>
                <CheckCircle2 size={18} />
                Responsive React and Next.js interfaces deployed on Vercel
              </li>
            </ul>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading wide">
            <p className="eyebrow">Selected Work</p>
            <h2>Projects that show end-to-end ownership.</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.tone}`} key={project.title}>
                <div className="project-visual" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="project-body">
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul>
                    {project.impact.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={17} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="stack-list">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                        {link.label}
                        <ArrowUpRight size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Technical Toolkit</p>
            <h2>Comfortable across frontend, backend, data, and deployment.</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map(({ title, icon: Icon, skills }) => (
              <article className="skill-card" key={title}>
                <div className="skill-title">
                  <Icon size={20} />
                  <h3>{title}</h3>
                </div>
                <div className="stack-list">
                  {skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">Experience & Education</p>
            <h2>Training, academics, and consistent practice.</h2>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-icon" aria-hidden="true">
                  {item.title.includes('B.Tech') ? <GraduationCap size={20} /> : <BriefcaseBusiness size={20} />}
                </div>
                <div>
                  <p className="timeline-date">{item.date}</p>
                  <h3>{item.title}</h3>
                  <p className="timeline-place">{item.place}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className="achievement-panel">
            <div>
              <p className="eyebrow">Achievements</p>
              <h3>Competitive practice and hackathon recognition.</h3>
            </div>
            <ul>
              {achievements.map((achievement, index) => (
                <li key={achievement}>
                  {index === 2 ? <Trophy size={18} /> : <Award size={18} />}
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>Ready to talk about internships, projects, and full-stack roles.</h2>
            <p>
              Recruiters can use the quick actions below, download the resume, or send a message
              directly from the form.
            </p>
            <div className="contact-actions">
              <a href={`mailto:${profile.email}`}>
                <Mail size={18} />
                {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/-/g, '')}`}>
                <Phone size={18} />
                {profile.phone}
              </a>
              <span>
                <MapPin size={18} />
                {profile.location}
              </span>
            </div>
            <div className="copy-actions" aria-live="polite">
              <button type="button" onClick={() => copyValue(profile.email, 'Email')}>
                <Copy size={17} />
                Copy Email
              </button>
              <button type="button" onClick={() => copyValue(profile.phone, 'Phone')}>
                <Copy size={17} />
                Copy Phone
              </button>
              {copyMessage && <strong>{copyMessage}</strong>}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <label>
              Name
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Message
              <textarea name="message" rows={5} required />
            </label>
            <button className="button primary" type="submit">
              Send Message
              <Send size={18} />
            </button>
          </form>
        </section>
      </main>

      <footer>
        <span>{profile.name}</span>
        <span>Full-stack developer focused on clean, useful web products.</span>
        <a href="#top">
          Back to top
          <ArrowUpRight size={16} />
        </a>
      </footer>
    </div>
  )
}

export default App
