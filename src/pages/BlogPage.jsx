import { Image } from 'lucide-react';
import { blogPosts } from '../data.js';

function goToPage(path) {
  window.location.hash = `/${path}`;
}

export default function BlogPage() {
  return (
    <section id="blog" className="page-section soft-section">
      <div className="section-title">
        <p className="eyebrow">Engineering Notes</p>
        <h2>Engineering notes and technical topics.</h2>
        <p>Focused technical summaries around automation, sensing, controls and practical deployment.</p>
      </div>
      <div className="card-grid four">
        {blogPosts.map(({ id, title, text, cover }) => (
          <article id={id} className="feature-card clickable-card" key={id} onClick={() => goToPage(id)}>
            <div className="feature-image-frame">
              <img src={`/portfolio-images/${cover.fileName}`} alt={cover.alt} onError={(event) => event.currentTarget.classList.add('is-missing')} />
              <div className="image-fallback">
                <Image size={30} />
                <strong>{cover.title}</strong>
                <span>Image unavailable</span>
              </div>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            <button className="text-link">Read page</button>
          </article>
        ))}
      </div>
    </section>
  );
}
