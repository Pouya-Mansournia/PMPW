import { Image } from 'lucide-react';
import { OpenSourceTeaser } from '../components/OpenSourceSystems.jsx';
import { works, productCaseStudies } from '../data.js';
import { navigateTo, routeHref } from '../navigation.js';

export default function WorksPage() {
  return (
    <section id="works" className="page-section">
      <div className="section-title wide">
        <p className="eyebrow">Work</p>
        <h1 className="semantic-page-title">Engineering, robotics, and product work, from concept to deployment.</h1>
        <p>A structured view of what I've built: robotics and automation systems, precision mechanisms, embedded electronics, and the product and founder work built on top of that engineering foundation.</p>
      </div>

      <div className="section-title">
        <p className="eyebrow">Engineering &amp; Robotics</p>
        <h2>Robotics platforms, automation, precision motion, and industrial systems.</h2>
      </div>
      <div className="work-grid">
        {works.map(({ id, title, text, tags, cover }) => (
          <article id={id} className="work-card clickable-card" key={id} onClick={(event) => navigateTo(id, event)}>
            <div className="work-media">
              <img src={`/portfolio-images/${cover.fileName}`} alt={cover.alt} loading="lazy" decoding="async" onError={(event) => event.currentTarget.classList.add('is-missing')} />
              <div className="image-fallback">
                <Image size={34} />
                <strong>{cover.title}</strong>
                <span>Image unavailable</span>
              </div>
            </div>
            <div className="work-body">
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="chip-list small">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a className="text-link" href={routeHref(id)} onClick={(event) => navigateTo(id, event)}>View the {title} project</a>
            </div>
          </article>
        ))}
      </div>

      <div className="section-title" style={{ marginTop: 56 }}>
        <p className="eyebrow">Product &amp; Innovation</p>
        <h2>Turning engineering execution into products, ventures, and operating systems.</h2>
      </div>
      <div className="work-grid">
        {productCaseStudies.map(({ id, company, title, positioning, context, lesson, ctaLabel, ctaRoute }) => (
          <article className="work-card" key={id}>
            <div className="work-body">
              {company && <p className="eyebrow" style={{ marginBottom: 4 }}>{company}</p>}
              <h3>{title}</h3>
              <p>{positioning || context?.[0]}</p>
              {lesson && <p style={{ color: 'var(--muted)', fontSize: 14 }}>{lesson}</p>}
              <a className="text-link" href={routeHref(ctaRoute || 'product-journey')} onClick={(event) => navigateTo(ctaRoute || 'product-journey', event)}>
                {ctaLabel || `Read the ${title} story`}
              </a>
            </div>
          </article>
        ))}
      </div>

      <OpenSourceTeaser variant="projects" />
    </section>
  );
}
