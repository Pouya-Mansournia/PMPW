import { BriefcaseBusiness, Cpu, Download, Gauge, Lightbulb, MapPin, Rocket, Settings } from 'lucide-react';
import { expertiseAreas, portfolioImages, profileImage, resumeFile, resumeHighlights, stats } from '../data.js';
import PortfolioGallery from '../components/PortfolioGallery.jsx';
import { useTypewriter } from '../hooks/useTypewriter.js';
import { useInView } from '../hooks/useInView.js';
import HeroVideoBackground from '../components/HeroVideoBackground.jsx';
import { OpenSourceTeaser } from '../components/OpenSourceSystems.jsx';
import { FeaturedWriting } from '../components/FeaturedWriting.jsx';
import { navigateTo, routeHref } from '../navigation.js';

const pillars = [
  {
    icon: Settings,
    title: 'Engineering & Robotics',
    text: 'Real-world robotics, mechatronics, automation, embedded systems, and precision engineering.',
    cta: 'Explore Work',
    route: 'works'
  },
  {
    icon: Rocket,
    title: 'Product & Founder Journey',
    text: 'Turning real operational pain into validated products, systems, and scalable businesses.',
    cta: 'Explore Product Journey',
    route: 'product-journey'
  },
  {
    icon: Lightbulb,
    title: 'Ideas & Decision Systems',
    text: 'Research, writing, FoundryOS, ARCHON, and open systems for how I build and make decisions.',
    cta: 'Explore Writing',
    route: 'writing'
  }
];

const homeGalleryTitles = [
  'Last-Mile Autonomous Delivery Robot Prototype',
  'Nano-Precision Motion Control Systems',
  'High-Speed Wheel Sortation System'
];
const homeGalleryImages = portfolioImages.filter((image) => homeGalleryTitles.includes(image.title));

export default function HomePage() {
  const typed = useTypewriter(['Robotics & Automation', 'Warehouse Automation', 'Precision Motion', 'Mechatronics'], 120, 2200);
  const [pillarRef, pillarVisible] = useInView(0.2);

  return (
    <section id="home" className="hero-section page-section">
      <HeroVideoBackground />
      <div className="hero-copy">
        <div className="availability-pill">
          <span />
          Engineering, Robotics &amp; Product · Istanbul
        </div>
        <p className="eyebrow">Robotics Systems Architect | Mechatronics Engineer | Founder &amp; Product Leader</p>
        <h1 className="hero-title">Pouya Mansournia<br /><span className="hero-typed">{typed || 'Robotics & Automation'}</span></h1>
        <p className="lead">
          Building intelligent machines that bridge research and industry, and turning that engineering depth into products, ventures, and decision systems.
          Autonomous robots, warehouse automation, embedded electronics, precision motion, and founder-led product execution.
        </p>
        <div className="hero-actions">
          <a className="secondary-btn" href={routeHref('contact')} onClick={(event) => navigateTo('contact', event)}>Contact Me</a>
          <a className="secondary-btn" href={resumeFile.href} download={resumeFile.fileName}>
            <Download size={18} />
            {resumeFile.label}
          </a>
          <a className="icon-btn" href={routeHref('about')} onClick={(event) => navigateTo('about', event)} aria-label="View Pouya Mansournia’s full profile">
            <BriefcaseBusiness size={19} />
          </a>
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
          <h2>Engineering depth. Product thinking. Founder execution.</h2>
          <p className="lead">Over a decade building autonomous robots, embedded systems, and precision motion platforms, and turning that engineering depth into products, ventures, and decision systems.</p>
          <div className="resume-highlight-row showcase-highlights">
            {resumeHighlights.map((item) => (
              <article key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
          <a className="secondary-btn" href={routeHref('about')} onClick={(event) => navigateTo('about', event)}>
            <BriefcaseBusiness size={18} />
            View Pouya Mansournia’s full profile
          </a>
        </div>
        <div className="hero-visual" aria-label="Robotics portfolio hero visual, last-mile autonomous delivery robot">
          <div className="profile-card">
            <div className="profile-image-frame">
              <img
                src={`/portfolio-images/${profileImage.fileName}`}
                alt={profileImage.alt}
                width="853"
                height="1280"
                loading="lazy"
                decoding="async"
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
          <p className="eyebrow">Selected Work</p>
          <h2>Robots, systems, and products built and deployed in the real world.</h2>
        </div>
        <PortfolioGallery images={homeGalleryImages} />
      </div>

      <div className={`pillar-section reveal ${pillarVisible ? 'is-visible' : ''}`} ref={pillarRef}>
        <div className="section-title wide">
          <p className="eyebrow">How It Connects</p>
          <h2 className="pillar-heading">Engineering <span>×</span> Product <span>×</span> Innovation</h2>
          <p>Three connected layers of the same way of working: build the system, turn it into a product, and extract the reusable decision behind it.</p>
        </div>
        <div className="pillar-grid">
          {pillars.map(({ icon: Icon, title, text, cta, route }, index) => (
            <article className={`pillar-card reveal ${pillarVisible ? 'is-visible' : ''}`} style={{ animationDelay: `${index * 110}ms` }} key={title}>
              <div className="icon-box">
                <Icon size={26} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a className="text-link" href={routeHref(route)} onClick={(event) => navigateTo(route, event)}>{cta}</a>
            </article>
          ))}
        </div>
      </div>

      <FeaturedWriting />

      <OpenSourceTeaser />
    </section>
  );
}
