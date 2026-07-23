import { ExternalLink } from 'lucide-react';
import { publications, professionalLinks } from '../data.js';

const researchGate = professionalLinks.find((link) => link.label === 'ResearchGate');

export default function PublicationsPage() {
  return (
    <section id="publications" className="page-section publications-section">
      <div className="publications-header">
        <div>
          <p className="eyebrow">Publications</p>
          <h1 className="semantic-page-title">Research and publications.</h1>
          <p className="lead">Selected papers, team description papers and submitted peer-reviewed manuscripts.</p>
        </div>

        {researchGate && (
          <a className="publication-profile-link" href={researchGate.href} target="_blank" rel="noopener noreferrer">
            ResearchGate
            <ExternalLink size={16} />
          </a>
        )}
      </div>

      <div className="publications-list">
        {publications.map(({ title, venue, year, href, text, highlights }) => (
          <article className="publication-card" key={title}>
            <div className="publication-meta">
              <span>{year}</span>
              <strong>{venue}</strong>
            </div>
            <h3>
              {href ? (
                <a className="publication-title-link" href={href} target="_blank" rel="noopener noreferrer">
                  {title}
                  <ExternalLink size={18} />
                </a>
              ) : (
                title
              )}
            </h3>
            <p>{text}</p>
            <div className="publication-tags" aria-label="Publication topics">
              {highlights.slice(0, 3).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
