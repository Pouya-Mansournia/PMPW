import { Image } from 'lucide-react';
import { OpenSourceTeaser } from '../components/OpenSourceSystems.jsx';
import { works } from '../data.js';
import { navigateTo, routeHref } from '../navigation.js';

export default function WorksPage() {
  return (
    <section id="works" className="page-section">
      <div className="section-title wide">
        <p className="eyebrow">Projects</p>
        <h1 className="semantic-page-title">Selected engineering projects and system categories.</h1>
        <p>A structured view of robotics, automation, precision motion, embedded electronics, and industrial machinery work.</p>
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
      <OpenSourceTeaser variant="projects" />
    </section>
  );
}
