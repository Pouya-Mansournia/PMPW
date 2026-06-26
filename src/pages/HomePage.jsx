import { BriefcaseBusiness, Cpu, Download, Gauge, MapPin, Settings } from 'lucide-react';
import { expertiseAreas, profileImage, resumeFile, resumeHighlights, stats } from '../data.js';
import PortfolioGallery from '../components/PortfolioGallery.jsx';
import { useTypewriter } from '../hooks/useTypewriter.js';
import HeroVideoBackground from '../components/HeroVideoBackground.jsx';
import { OpenSourceTeaser } from '../components/OpenSourceSystems.jsx';

function goToPage(path) {
  window.location.hash = `/${path}`;
}

export default function HomePage() {
  const typed = useTypewriter(['Robotics & Automation', 'Warehouse Automation', 'Precision Motion', 'Mechatronics'], 120, 2200);

  return (
    <section id="home" className="hero-section page-section">
      <HeroVideoBackground />
      <div className="hero-copy">
        <div className="availability-pill">
          <span />
          Robotics Systems Architect · Istanbul
        </div>
        <p className="eyebrow">Robotics Systems Architect | Mechatronics Engineer | Technical Product Leader</p>
        <h1 className="hero-title">Pouya Mansournia<br /><span className="hero-typed">{typed || 'Robotics & Automation'}</span></h1>
        <p className="lead">
          Building intelligent machines that bridge research and industry.
          Specializing in autonomous robots, warehouse automation, embedded electronics, and precision motion systems.
        </p>
        <div className="hero-actions">
          <button className="secondary-btn" onClick={() => goToPage('contact')}>Contact Me</button>
          <a className="secondary-btn" href={resumeFile.href} download={resumeFile.fileName}>
            <Download size={18} />
            {resumeFile.label}
          </a>
          <button className="icon-btn" onClick={() => goToPage('about')} aria-label="Open resume profile">
            <BriefcaseBusiness size={19} />
          </button>
        </div>

        <div className="resume-highlight-row">
          {resumeHighlights.map((item) => (
            <article key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>

      <div className="hero-stats-panel">
        {stats.map(([value, label]) => (
          <article className="hero-stat-item" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </div>

      <div className="expertise-strip">
        {expertiseAreas.map(({ icon: Icon, title, text }) => (
          <article key={title}>
            <Icon size={24} />
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="profile-showcase">
        <div className="profile-showcase-intro">
          <p className="eyebrow">About</p>
          <h2>The engineer behind the work.</h2>
          <p className="lead">Over a decade building autonomous robots, embedded systems, and precision motion platforms — from concept to production.</p>
          <div className="resume-highlight-row showcase-highlights">
            {resumeHighlights.map((item) => (
              <article key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
          <button className="secondary-btn" onClick={() => goToPage('about')}>
            <BriefcaseBusiness size={18} />
            Full Profile
          </button>
        </div>
        <div className="hero-visual" aria-label="Robotics portfolio hero visual — last-mile autonomous delivery robot">
          <div className="profile-card">
            <div className="profile-image-frame">
              <img
                src={`/portfolio-images/${profileImage.fileName}`}
                alt={profileImage.alt}
                onError={(event) => event.currentTarget.classList.add('is-missing')}
              />
              <div className="profile-image-fallback">
                <Settings size={64} />
                <strong>{profileImage.title}</strong>
                <span>Image unavailable</span>
              </div>
            </div>
            <div className="profile-card-body">
              <div>
                <p className="eyebrow">Portfolio Resume</p>
                <h2>Autonomous robots, warehouse systems & precision motion.</h2>
              </div>
              <div className="profile-meta">
                <span><MapPin size={16} /> Istanbul, Turkiye</span>
                <span><Gauge size={16} /> Robotics / Mechatronics</span>
                <span><Cpu size={16} /> Embedded + Control</span>
              </div>
            </div>
            <div className="floating-resume-card top">
              <strong>20+</strong>
              <span>Robotic Platforms Built</span>
            </div>
          </div>
        </div>
      </div>

      <div className="home-gallery">
        <div className="section-title">
          <p className="eyebrow">Selected Visuals</p>
          <h2>Engineering builds, prototypes and platforms.</h2>
        </div>
        <PortfolioGallery />
      </div>

      <OpenSourceTeaser />
    </section>
  );
}
