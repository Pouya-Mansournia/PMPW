import { ExternalLink, Image, PlayCircle } from 'lucide-react';
import { aboutImage } from '../data.js';

export default function AboutPage() {
  return (
    <section id="about" className="page-section about-section">
      <div className="section-title">
        <p className="eyebrow">About</p>
      </div>

      <div className="about-profile-card">
        <aside className="about-photo-panel">
          <div className="about-image-frame">
            <img src={`/portfolio-images/${aboutImage.fileName}`} alt={aboutImage.alt} width="200" height="200" decoding="async" onError={(event) => event.currentTarget.classList.add('is-missing')} />
            <div className="image-fallback">
              <Image size={34} />
              <strong>{aboutImage.title}</strong>
              <span>Image unavailable</span>
            </div>
          </div>
          <div className="about-photo-meta">
            <strong>Pouya Mansournia</strong>
            <span>Mechanical Engineer</span>
            <span>Robotics | Product | Precision Motion</span>
          </div>
        </aside>

        <div className="about-copy-panel">
          <h1 className="semantic-page-title">Engineering depth applied to robotics, product, and founder-led ventures.</h1>
          <p>
            My work started in mechanical design, mechatronics, embedded systems, and automation, and has since expanded into
            product management, innovation, and founder-level execution. I build real systems: mechanisms and platforms that
            move from concept to prototype, testing, and deployment, and products that move from a real problem to a validated,
            working business.
          </p>
          <p>
            My engineering experience covers robotic platforms, AGVs, delivery robots, warehouse automation, material handling
            systems, wheel sorters, conveyors, precision positioning, piezo-actuated systems, flexure mechanisms, and custom
            machinery, the technical foundation behind the product and founder work I do today.
          </p>
          <div className="about-product-row">
            <div className="about-product-note">
              <small>Product building</small>
              <strong>Founder-minded engineering</strong>
              <span>Turning technical systems into products, reusable frameworks, and open-source decision systems.</span>
            </div>
            <a className="company-link-card" href="https://x-robotiics.com/" target="_blank" rel="noopener noreferrer">
              <span>
                <small>Company</small>
                <strong>X-Robotiics</strong>
                <em>IoT and robotics systems company</em>
              </span>
              <ExternalLink size={18} />
            </a>
            <a className="company-link-card portfolio-video-card" href="https://www.youtube.com/@Pouyamansournia" target="_blank" rel="noopener noreferrer">
              <span>
                <small>Portfolio Video</small>
                <strong>Watch my portfolio</strong>
                <em>See selected engineering work on YouTube</em>
              </span>
              <PlayCircle size={19} />
            </a>
          </div>
          <div className="chip-list">
            {['Robotics', 'Mechatronics', 'Precision Mechanisms', 'Piezo Systems', 'AGV / AMR', 'Warehouse Automation', 'Embedded Control', 'Mechanical Design', 'Product Management', 'Founder Execution'].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
