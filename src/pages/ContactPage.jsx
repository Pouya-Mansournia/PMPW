import { Download, Mail, BookOpen, Wrench, PlayCircle } from 'lucide-react';
import BackgroundPaths from '../components/BackgroundPaths.jsx';
import { contacts, resumeFile } from '../data.js';
import MagneticDock from '../components/MagneticDock.jsx';

const LinkedInSvg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubSvg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const dockItems = [
  { label: 'LinkedIn',     href: 'https://www.linkedin.com/in/pouya-mansournia/', icon: <LinkedInSvg /> },
  { label: 'GitHub',       href: 'https://github.com/Pouya-Mansournia',           icon: <GitHubSvg /> },
  { label: 'Email',        href: 'mailto:p.mansournia@gmail.com',                  icon: <Mail size={22} /> },
  { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Pouya-Mansournia', icon: <BookOpen size={20} /> },
  { label: 'GrabCAD',      href: 'https://grabcad.com/pouya.mansournia-1',         icon: <Wrench size={20} /> },
  { label: 'YouTube',      href: 'https://www.youtube.com/@Pouyamansournia',        icon: <PlayCircle size={21} /> },
];

export default function ContactPage() {
  return (
    <section id="contact" className="page-section contact-section" style={{ position: 'relative' }}>
      <BackgroundPaths />
      <div className="contact-card" style={{ position: 'relative', zIndex: 1 }}>
        <p className="eyebrow">Contact</p>
        <h2>Let's connect.</h2>
        <p>
          For robotics, automation, mechatronics, precision motion, PhD collaboration or engineering opportunities,
          you can contact me directly.
        </p>
        <div className="contact-links">
          {contacts.map(({ label, value, href, icon: Icon }) => (
            <a
              href={href}
              key={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <Icon size={20} />
              <span>{label}</span>
              <strong>{value}</strong>
            </a>
          ))}
          <a href={resumeFile.href} download={resumeFile.fileName}>
            <Download size={20} />
            <span>Resume</span>
            <strong>{resumeFile.fileName}</strong>
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
          <MagneticDock items={dockItems} />
        </div>
      </div>
    </section>
  );
}
