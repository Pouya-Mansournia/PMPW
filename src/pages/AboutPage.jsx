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
            <span>Robotics | Automation | Precision Motion</span>
          </div>
        </aside>

        <div className="about-copy-panel">
          <h1 className="semantic-page-title">Engineer with a system-level view of robotics and automation.</h1>
          <p>
            My work combines mechanical design, mechatronics, embedded systems, automation and practical product development.
            I am interested in building real engineering systems that move from idea to prototype, testing and deployment.
          </p>
          <p>
            My experience covers robotic platforms, AGVs, delivery robots, warehouse automation, material handling systems,
            wheel sorters, conveyors, precision positioning, piezo-actuated systems, flexure mechanisms and custom machinery.
          </p>
          <div className="about-product-row">
            <div className="about-product-note">
              <small>Product building</small>
              <strong>Founder-minded engineering</strong>
              <span>Turning technical systems into reusable frameworks, open-source projects, and practical products.</span>
            </div>
            <a className="company-link-card" href="https://x-robotiics.com/" target="_blank" rel="noreferrer">
              <span>
                <small>Company</small>
                <strong>X-Robotiics</strong>
                <em>IoT and robotics systems company</em>
              </span>
              <ExternalLink size={18} />
            </a>
            <a className="company-link-card portfolio-video-card" href="https://www.youtube.com/@Pouyamansournia" target="_blank" rel="noreferrer">
              <span>
                <small>Portfolio Video</small>
                <strong>Watch my portfolio</strong>
                <em>See selected engineering work on YouTube</em>
              </span>
              <PlayCircle size={19} />
            </a>
          </div>
          <div className="chip-list">
            {['Robotics', 'Mechatronics', 'Precision Mechanisms', 'Piezo Systems', 'AGV / AMR', 'Warehouse Automation', 'Embedded Control', 'Mechanical Design'].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
