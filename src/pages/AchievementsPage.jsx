import { achievements } from '../data.js';
import BackgroundPaths from '../components/BackgroundPaths.jsx';

export default function AchievementsPage() {
  return (
    <section id="achievements" className="page-section soft-section" style={{ position: 'relative' }}>
      <BackgroundPaths />
      <div className="section-title" style={{ position: 'relative', zIndex: 1 }}>
        <p className="eyebrow">Achievements</p>
        <h1 className="semantic-page-title">Signals of ownership, execution and technical depth.</h1>
      </div>
      <div className="achievements-layout" style={{ position: 'relative', zIndex: 1 }}>
        <div className="achievement-image-frame">
          <img src="/portfolio-images/Achievements.png" alt="Collage of Pouya Mansournia’s robotics, automation, and engineering work" loading="lazy" decoding="async" onError={(event) => event.currentTarget.classList.add('is-missing')} />
        </div>
        <div className="achievement-list">
          {achievements.map(({ title, text, icon: Icon }) => (
            <article className="achievement-card" key={title}>
              <Icon size={28} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
