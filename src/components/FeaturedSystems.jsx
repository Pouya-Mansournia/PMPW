import { Image } from 'lucide-react';
import { featuredSystems } from '../data.js';
import { navigateTo, routeHref } from '../navigation.js';

// Homepage section: four flagship system-level stories. Deliberately even weighting,
// no single project is treated as a hero.
export default function FeaturedSystems() {
  return (
    <section className="featured-systems">
      <div className="section-title wide">
        <p className="eyebrow">Featured Systems</p>
        <h2>Complete systems, from simulation to real-world deployment.</h2>
        <p>Four projects that connect simulation, orchestration, autonomy, embedded control, and physical execution.</p>
      </div>
      <div className="work-grid featured-systems-grid">
        {featuredSystems.map((system) => (
          <article
            className="work-card clickable-card featured-system-card"
            key={system.id}
            onClick={(event) => navigateTo(system.route, event)}
          >
            <div className="work-media">
              <img
                src={system.image}
                alt={system.imageAlt}
                loading="lazy"
                decoding="async"
                onError={(event) => event.currentTarget.classList.add('is-missing')}
              />
              <div className="image-fallback">
                <Image size={34} />
                <strong>{system.title}</strong>
                <span>Image unavailable</span>
              </div>
            </div>
            <div className="work-body">
              <h3>{system.title}</h3>
              <p>{system.subtitle}</p>
              <div className="featured-system-kpis">
                {system.kpis.map((kpi) => (
                  <span key={kpi.label}>
                    <strong>{kpi.value}</strong>
                    <small>{kpi.label}</small>
                  </span>
                ))}
              </div>
              <div className="chip-list small">
                {system.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className="featured-system-actions">
                <a
                  className="text-link"
                  href={routeHref(system.route)}
                  onClick={(event) => navigateTo(system.route, event)}
                >
                  {system.route === 'case-warehouse-digital-twin' ? 'Read case study' : `View ${system.title}`}
                </a>
                {system.repo && (
                  <a
                    className="text-link"
                    href={system.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                  >
                    Open GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
