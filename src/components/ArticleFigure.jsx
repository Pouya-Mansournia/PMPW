export default function ArticleFigure({ block }) {
  const isComparison = block.type === 'comparison';

  return (
    <figure className={`article-figure ${isComparison ? 'is-comparison' : ''}`}>
      <div className="article-figure-frame">
        <img
          src={block.image}
          alt={block.caption}
          loading="lazy"
          decoding="async"
          onError={(event) => event.currentTarget.classList.add('is-missing')}
        />
      </div>
      <figcaption>{block.caption}</figcaption>
    </figure>
  );
}
