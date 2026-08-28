import { ArrowUpRight, Code2 } from 'lucide-react';
import SystemMap from '../components/SystemMap.jsx';
import { systemsGroups } from '../data.js';
import { navigateTo, routeHref } from '../navigation.js';

const githubProfile = 'https://github.com/Pouya-Mansournia';

export default function SystemsPage() {
  return (
    <section id="systems" className="page-section systems-page">
      <div className="section-title wide">
        <p className="eyebrow">Systems</p>
        <h1 className="semantic-page-title">
          I design intelligent physical systems from simulation to real-world deployment.
        </h1>
        <p>
          The same work, organized by system layer instead of chronology: simulation validates
          decisions, an orchestration layer coordinates resources, autonomy and embedded control
          execute, and physical robots and machines do the work.
        </p>
      </div>

      <SystemMap variant="full" />

      <div className="systems-groups">
        {systemsGroups.map((group) => (
          <section className="systems-group" key={group.id}>
            <div className="section-title">
              <h2>{group.title}</h2>
              <p>{group.blurb}</p>
            </div>
            <div className="systems-group-list">
              {group.items.map((item) => {
                const isRoute = Boolean(item.route);
                return (
                  <a
                    className="systems-group-item"
                    key={`${group.id}-${item.label}`}
                    href={isRoute ? routeHref(item.route) : item.href}
                    target={isRoute ? undefined : '_blank'}
                    rel={isRoute ? undefined : 'noopener noreferrer'}
                    onClick={isRoute ? (event) => navigateTo(item.route, event) : undefined}
                  >
                    <span>
                      <strong>{item.label}</strong>
                      <small>{item.note}</small>
                    </span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <div className="hero-actions systems-page-cta">
        <a className="secondary-btn" href={routeHref('works')} onClick={(event) => navigateTo('works', event)}>
          Explore Work
        </a>
        <a className="secondary-btn" href={routeHref('publications')} onClick={(event) => navigateTo('publications', event)}>
          Research
        </a>
        <a className="secondary-btn" href={githubProfile} target="_blank" rel="noopener noreferrer">
          <Code2 size={18} />
          GitHub
        </a>
      </div>
    </section>
  );
}
