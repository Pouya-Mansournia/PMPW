import { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Languages } from 'lucide-react';
import { readingTimeMinutes } from '../data/writing.js';
import ArticleFigure from '../components/ArticleFigure.jsx';
import ReadingProgress from '../components/ReadingProgress.jsx';
import { navigateTo, routeHref } from '../navigation.js';

const NUMBERED_HEADING = /^([0-9۰-۹]+)\.\s*(.+)$/;

function SectionHeading({ text }) {
  const match = text.match(NUMBERED_HEADING);
  if (!match) return <h2 className="article-h2-framed">{text}</h2>;
  const [, number, rest] = match;
  return (
    <h2 className="article-h2-framed">
      <span className="article-h2-number">{number}</span>
      <span>{rest}</span>
    </h2>
  );
}

export default function ArticlePage({ article }) {
  const [lang, setLang] = useState('en');
  const hasFarsi = Boolean(article.contentFa);
  const isFarsi = hasFarsi && lang === 'fa';
  const content = isFarsi ? article.contentFa : article.content;

  return (
    <section className="page-section article-page">
      <ReadingProgress />

      <a className="back-link" href={routeHref('writing')} onClick={(event) => navigateTo('writing', event)}>
        <ArrowLeft size={18} />
        Back to writing
      </a>

      <header className="article-hero">
        <span className="writing-card-category">{article.category}</span>
        <h1>{article.title}</h1>
        {article.deck && <p className="lead article-deck">{article.deck}</p>}
        <div className="article-meta-row">
          <span>{article.author}{article.authorRole ? `, ${article.authorRole}` : ''}</span>
          <span>{article.publishDate}</span>
          <span>{readingTimeMinutes(article)} min read</span>
        </div>
      </header>

      {article.heroImage && (
        <div className="article-hero-image">
          <img
            src={article.heroImage}
            alt={article.heroImageAlt || article.title}
            decoding="async"
            onError={(event) => event.currentTarget.classList.add('is-missing')}
          />
        </div>
      )}

      {hasFarsi && (
        <div className="article-lang-toggle">
          <button type="button" className={!isFarsi ? 'is-active' : ''} onClick={() => setLang('en')}>English</button>
          <button type="button" className={isFarsi ? 'is-active' : ''} onClick={() => setLang('fa')}>
            <Languages size={14} />
            فارسی
          </button>
        </div>
      )}

      <div className={`article-body ${isFarsi ? 'is-farsi' : ''}`} lang={isFarsi ? 'fa' : 'en'} dir={isFarsi ? 'rtl' : 'ltr'}>
        {content.map((block, index) => {
          if (block.type === 'h2') return <SectionHeading text={block.text} key={index} />;
          if (block.type === 'figure' || block.type === 'comparison') return <ArticleFigure block={block} key={index} />;
          if (block.type === 'link') {
            return (
              <a className="article-reference-link" href={block.href} target="_blank" rel="noopener noreferrer" key={index}>
                {block.label}
                <ArrowUpRight size={16} />
              </a>
            );
          }
          return <p key={index}>{block.text}</p>;
        })}
      </div>

      <div className="article-footer">
        <a className="secondary-btn" href={routeHref('writing')} onClick={(event) => navigateTo('writing', event)}>
          <ArrowLeft size={18} />
          Back to all writing
        </a>
      </div>
    </section>
  );
}
