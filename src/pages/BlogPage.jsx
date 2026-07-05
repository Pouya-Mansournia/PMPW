import { Image } from 'lucide-react';
import { blogPosts } from '../data.js';
import { navigateTo, routeHref } from '../navigation.js';

export default function BlogPage() {
  return (
    <section id="blog" className="page-section soft-section">
      <div className="section-title">
        <p className="eyebrow">Engineering Notes</p>
        <h1 className="semantic-page-title">Engineering notes and technical topics.</h1>
        <p>Focused technical summaries around automation, sensing, controls and practical deployment.</p>
      </div>
      <div className="card-grid four">
        {blogPosts.map(({ id, title, text, cover }) => (
          <article id={id} className="feature-card clickable-card" key={id} onClick={(event) => navigateTo(id, event)}>
            <div className="feature-image-frame">
              <img src={`/portfolio-images/${cover.fileName}`} alt={cover.alt} loading="lazy" decoding="async" onError={(event) => event.currentTarget.classList.add('is-missing')} />
              <div className="image-fallback">
                <Image size={30} />
                <strong>{cover.title}</strong>
                <span>Image unavailable</span>
              </div>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            <a className="text-link" href={routeHref(id)} onClick={(event) => navigateTo(id, event)}>Read {title}</a>
          </article>
        ))}
      </div>
    </section>
  );
}
