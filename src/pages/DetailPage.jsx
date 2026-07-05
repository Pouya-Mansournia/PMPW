import { ArrowLeft } from 'lucide-react';
import PortfolioGallery from '../components/PortfolioGallery.jsx';
import { navigateTo, routeHref } from '../navigation.js';

function hasDisplayableImage(image) {
  return Boolean(image?.fileName);
}

export default function DetailPage({ item, parentPath = 'home' }) {
  const Icon = item.icon;
  const galleryImages = item.images || (item.cover ? [item.cover] : []);
  const hasGalleryImages = galleryImages.some(hasDisplayableImage);
  const coverImage = item.cover || galleryImages[0];
  const hasMetaRow = item.role || item.technologies || item.impact;

  return (
    <section className="page-section detail-page">
      <a className="back-link" href={routeHref(parentPath)} onClick={(event) => navigateTo(parentPath, event)}>
        <ArrowLeft size={18} />
        Back to {parentPath === 'blog' ? 'engineering articles' : 'projects'}
      </a>

      <div className="detail-hero">
        <div>
          <p className="eyebrow">{item.eyebrow || 'Project Page'}</p>
          <h1>{item.title}</h1>
          <p className="lead">{item.text}</p>
          {item.tags && (
            <div className="chip-list">
              {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          )}
          {item.highlights && item.highlights.length > 0 && (
            <div className="highlight-chips detail-highlights">
              {item.highlights.map((h) => <span key={h}>{h}</span>)}
            </div>
          )}
        </div>
      </div>

      <div className="detail-media-content">
        {(coverImage || Icon) && (
          <div className="detail-icon">
            {coverImage ? (
              <img
                src={`/portfolio-images/${coverImage.fileName}`}
                alt={coverImage.alt || coverImage.title}
                decoding="async"
                onError={(event) => event.currentTarget.classList.add('is-missing')}
              />
            ) : (
              <Icon size={88} />
            )}
          </div>
        )}
        <div className="detail-content">
          {(item.detail || []).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>

      {hasMetaRow && (
        <div className="project-meta-row">
          {item.role && (
            <div className="project-meta-item">
              <span className="meta-label">Role</span>
              <p>{item.role}</p>
            </div>
          )}
          {item.technologies && (
            <div className="project-meta-item">
              <span className="meta-label">Technologies</span>
              <p>{item.technologies}</p>
            </div>
          )}
          {item.impact && (
            <div className="project-meta-item">
              <span className="meta-label">Impact</span>
              <p>{item.impact}</p>
            </div>
          )}
        </div>
      )}

      {hasGalleryImages && (
        <>
          <div className="section-title detail-gallery-title">
            <p className="eyebrow">Images</p>
          </div>
          <PortfolioGallery compact images={galleryImages} captionTitle={item.title} />
        </>
      )}
    </section>
  );
}
