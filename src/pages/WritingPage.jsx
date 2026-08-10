import { writingArticles, writingCategories } from '../data/writing.js';
import WritingCard from '../components/WritingCard.jsx';

export default function WritingPage() {
  const categoriesWithArticles = writingCategories.filter((category) =>
    writingArticles.some((article) => article.category === category)
  );

  return (
    <section id="writing" className="page-section writing-page">
      <div className="section-title wide">
        <p className="eyebrow">Writing</p>
        <h1 className="semantic-page-title">Long-form essays and case studies on engineering, product, innovation, AI, research, and building real systems.</h1>
      </div>

      {categoriesWithArticles.map((category) => (
        <div key={category} className="writing-category-group">
          <div className="section-title">
            <p className="eyebrow">{category}</p>
          </div>
          <div className="writing-grid">
            {writingArticles
              .filter((article) => article.category === category)
              .map((article) => (
                <WritingCard article={article} key={article.id} />
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}
