import { Image } from 'lucide-react';
import { portfolioImages } from '../data.js';

function getImagePath(item) {
  return `/portfolio-images/${item.fileName}`;
}

function getImageClassName(item) {
  const slug = (item.fileName || item.title)
    .replace(/^.*\//, '')
    .replace(/\.[^.]+$/, '')
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();

  return `portfolio-image-card image-card-${slug}`;
}

function hasDisplayableImage(item) {
  return Boolean(item.fileName);
}

export default function PortfolioGallery({ compact = false, images = portfolioImages, captionTitle }) {
  const visibleImages = images.filter(hasDisplayableImage);

  return (
    <div className={`portfolio-gallery ${compact ? 'compact' : ''}`}>
      {visibleImages.map((item) => (
        <article className={getImageClassName(item)} key={getImagePath(item)}>
          <div className="portfolio-image-frame">
            <img
              src={getImagePath(item)}
              alt={item.alt || item.title}
              onError={(event) => event.currentTarget.classList.add('is-missing')}
            />
            <div className="image-fallback">
              <Image size={34} />
              <strong>{captionTitle || item.title}</strong>
              <span>Image unavailable</span>
            </div>
          </div>
          <div className="portfolio-image-caption">
            {item.category && <span className="caption-category">{item.category}</span>}
            <strong>{item.title}</strong>
            {item.description && (
              <p className="caption-description">{item.description}</p>
            )}
            {item.highlights && item.highlights.length > 0 && (
              <div className="highlight-chips">
                {item.highlights.map((h) => <span key={h}>{h}</span>)}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
