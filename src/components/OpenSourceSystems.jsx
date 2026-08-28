import { ArrowUpRight, BookOpen, Code2 } from 'lucide-react';
import { openSourceSystems } from '../data.js';
import { navigateTo, routeHref } from '../navigation.js';

function SystemCard({ system, compact = false }) {
  const Icon = system.icon;

  return (
    <article className={`open-source-card ${compact ? 'compact' : ''}`}>
      <div className="open-source-card-top">
        <div className="open-source-icon">
          <Icon size={compact ? 22 : 26} />
        </div>
        <span>{system.category}</span>
      </div>
      <h3>{system.title}</h3>
      <p>{system.description}</p>
      <div className="chip-list small">
        {system.themes.slice(0, compact ? 3 : 6).map((theme) => (
          <span key={theme}>{theme}</span>
        ))}
      </div>
      <div className="open-source-actions">
        <a href={system.github} target="_blank" rel="noopener noreferrer">
          <Code2 size={16} />
          {system.primaryLabel || 'View GitHub'}
        </a>
        {!compact && system.documentation && (
            <a href={system.documentation} target="_blank" rel="noopener noreferrer">
              <BookOpen size={16} />
              Read Documentation
            </a>
        )}
      </div>
    </article>
  );
}

const compactExcludedIds = ['grabcad-library', 'ros2-zero-to-robot', 'delivery-robot-ros'];

// Preserve first-seen order of groups as they appear in the data.
const groupOrder = [...new Set(openSourceSystems.map((system) => system.group || 'Systems'))];

export function OpenSourceSystemsGrid({ compact = false }) {
  if (compact) {
    const systems = openSourceSystems.filter((system) => !compactExcludedIds.includes(system.id));
    return (
      <div className="open-source-grid compact">
        {systems.map((system) => (
          <SystemCard key={system.id} system={system} compact />
        ))}
      </div>
    );
  }

  return (
    <div className="open-source-groups">
      {groupOrder.map((group) => {
        const systems = openSourceSystems.filter((system) => (system.group || 'Systems') === group);
        if (systems.length === 0) return null;
        return (
          <div className="open-source-group" key={group}>
            <p className="eyebrow">{group}</p>
            <div className="open-source-grid">
              {systems.map((system) => (
                <SystemCard key={system.id} system={system} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function OpenSourceTeaser({ variant = 'home' }) {
  const isProjects = variant === 'projects';

  return (
    <section className={`open-source-teaser ${isProjects ? 'projects' : ''}`}>
      <div className="section-title wide">
        <p className="eyebrow">{isProjects ? 'Featured Open Source Systems' : 'Open Source Systems'}</p>
        <h2>{isProjects ? 'Frameworks for repeatable engineering execution.' : 'Operating systems for how I build.'}</h2>
        <p>
          {isProjects
            ? 'A collection of open-source frameworks built to make complex engineering, robotics, AI, and product execution more structured, repeatable, and scalable.'
            : 'I build open-source operating systems for robotics engineering, AI-agent workflows, and product execution.'}
        </p>
      </div>
      <OpenSourceSystemsGrid compact />
      <a className="secondary-btn open-source-teaser-cta" href={routeHref('open-source')} onClick={(event) => navigateTo('open-source', event)}>
        Explore Open Source Work
        <ArrowUpRight size={17} />
      </a>
    </section>
  );
}
