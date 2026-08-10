import { ArrowUpRight } from 'lucide-react';
import { readingTimeMinutes } from '../data/writing.js';
import { navigateTo, routeHref } from '../navigation.js';

export default function WritingCard({ article, featured = false }) {
  return (
    <article className={`writing-card ${featured ? 'is-featured' : ''}`}>
      <div className="writing-card-media">
        <img
          src={article.heroImage}
          alt={article.heroImageAlt || article.title}
          loading="lazy"
          decoding="async"
          onError={(event) => event.currentTarget.classList.add('is-missing')}
        />
      </div>
      <div className="writing-card-body">
        <span className="writing-card-category">{article.category}</span>
        <h3>{article.title}</h3>
        <p>{article.deck}</p>
        <div className="writing-card-meta">
          <span>{article.publishDate}</span>
          <span>{readingTimeMinutes(article)} min read</span>
        </div>
        <a className="text-link" href={routeHref(article.id)} onClick={(event) => navigateTo(article.id, event)}>
          Read the case study
          <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}
