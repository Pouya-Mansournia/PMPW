import { ArrowUpRight } from 'lucide-react';
import { writingArticles, readingTimeMinutes } from '../data/writing.js';
import { navigateTo, routeHref } from '../navigation.js';

export function FeaturedWriting() {
  const [featured] = writingArticles;
  if (!featured) return null;

  return (
    <div className="featured-writing">
      <div className="section-title wide">
        <p className="eyebrow">Featured Writing</p>
        <h2>Long-form thinking on engineering, product, and building real systems.</h2>
        <p>Essays and case studies on turning technical depth into products, ventures, and reusable decision systems.</p>
      </div>
      <article className="featured-writing-card clickable-card" onClick={(event) => navigateTo(featured.id, event)}>
        <div className="featured-writing-media">
          <img
            src={featured.heroImage}
            alt={featured.heroImageAlt || featured.title}
            loading="lazy"
            decoding="async"
            onError={(event) => event.currentTarget.classList.add('is-missing')}
          />
        </div>
        <div className="featured-writing-body">
          <span className="writing-card-category">{featured.category}</span>
          <h3>{featured.title}</h3>
          <p>{featured.deck}</p>
          <div className="writing-card-meta">
            <span>{featured.publishDate}</span>
            <span>{readingTimeMinutes(featured)} min read</span>
          </div>
          <a className="secondary-btn" href={routeHref(featured.id)} onClick={(event) => navigateTo(featured.id, event)}>
            Read the case study
            <ArrowUpRight size={17} />
          </a>
        </div>
      </article>
    </div>
  );
}
