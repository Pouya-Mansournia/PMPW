import { ArrowLeft, ArrowUpRight, Image } from 'lucide-react';
import { caseWarehouseDigitalTwin as study } from '../data.js';
import { navigateTo, routeHref } from '../navigation.js';

export default function WarehouseDigitalTwinCaseStudy() {
  return (
    <div className="case-study-page">
      <section className="page-section case-study-hero">
        <a className="back-link" href={routeHref('works')} onClick={(event) => navigateTo('works', event)}>
          <ArrowLeft size={18} />
          Back to work
        </a>
        <p className="eyebrow">Work · Case Study</p>
        <h1 className="semantic-page-title">{study.title}</h1>
        <p className="lead">{study.subtitle}</p>
        <div className="case-study-meta">
          <span>{study.role}</span>
          <span>{study.timeframe}</span>
          <span>Intelligent Warehouse Digital Twin</span>
        </div>
        <div className="chip-list small">
          {study.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>

        <div className="case-study-hero-grid">
          <figure className="case-study-figure">
            <img
              src={study.image}
              alt={study.imageAlt}
              decoding="async"
              onError={(event) => event.currentTarget.classList.add('is-missing')}
            />
            <div className="image-fallback">
              <Image size={34} />
              <strong>Intelligent Warehouse Digital Twin</strong>
              <span>Image unavailable</span>
            </div>
            <figcaption>{study.imageAlt}</figcaption>
          </figure>

          <div className="case-study-hero-side">
            <p className="eyebrow">Architecture, at a glance</p>
            <ol className="case-pipeline-vertical" aria-label="Architecture pipeline, simulation to physical robots">
              {study.pipeline.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="case-concept">{study.concept}</p>
          </div>
        </div>
      </section>

      {study.sections.map((section, index) => (
        <section className={`page-section case-study-section ${index % 2 === 1 ? 'soft-section' : ''}`} key={section.n}>
          <div className="section-title">
            <div className="case-section-heading">
              <span className="case-section-number">{section.n}</span>
              <h2>{section.title}</h2>
            </div>
          </div>
          <div className="case-study-prose">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      ))}

      <section className="page-section case-study-section">
        <div className="hero-actions">
          <a className="secondary-btn" href={study.repo} target="_blank" rel="noopener noreferrer">
            View the source on GitHub
            <ArrowUpRight size={16} />
          </a>
          <a className="secondary-btn" href={routeHref('systems')} onClick={(event) => navigateTo('systems', event)}>
            See the systems view
          </a>
          <a className="secondary-btn" href={routeHref('works')} onClick={(event) => navigateTo('works', event)}>
            <ArrowLeft size={18} />
            Back to all work
          </a>
        </div>
      </section>
    </div>
  );
}
