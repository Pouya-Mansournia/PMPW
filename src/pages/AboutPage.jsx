import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Image, PlayCircle } from 'lucide-react';
import { aboutImage } from '../data.js';
import { navigateTo, routeHref } from '../navigation.js';

// Self-hosted in /public so the page has no external dependency.
const ABOUT_VIDEO = '/about-hero.mp4';

const chips = [
  'Robotics', 'Mechatronics', 'Precision Mechanisms', 'Piezo Systems', 'AGV / AMR',
  'Warehouse Automation', 'Embedded Control', 'Mechanical Design', 'Product Management', 'Founder Execution'
];

export default function AboutPage() {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    // The video never plays on its own. Desktop: scrubbed by horizontal mouse
    // movement. Touch / narrow screens: advanced by page scroll instead.
    if (!window.matchMedia('(min-width: 1024px)').matches) {
      const hero = video.closest('.about-hero');
      let dur = 0;
      let sraf = 0;
      const readDur = () => { dur = Number.isFinite(video.duration) ? video.duration : 0; };
      readDur();
      video.addEventListener('loadedmetadata', readDur);

      const onScroll = () => {
        if (sraf) return;
        sraf = requestAnimationFrame(() => {
          sraf = 0;
          if (!dur || !hero) return;
          const rect = hero.getBoundingClientRect();
          const span = rect.height + window.innerHeight;
          const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / span));
          try { video.currentTime = Math.min(dur - 0.05, Math.max(0, progress * dur)); } catch { /* not seekable yet */ }
        });
      };

      video.pause();
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      return () => {
        window.removeEventListener('scroll', onScroll);
        video.removeEventListener('loadedmetadata', readDur);
        if (sraf) cancelAnimationFrame(sraf);
      };
    }

    let duration = 0;
    let desired = 0;      // where the pointer wants the playhead
    let prevX = null;
    let raf = 0;

    const readDuration = () => { duration = Number.isFinite(video.duration) ? video.duration : 0; };
    readDuration();
    video.addEventListener('loadedmetadata', readDuration);

    // One seek in flight at a time. The next seek is only issued after the
    // previous one resolves (`seeked`), which keeps the decoder from choking.
    const pump = () => {
      raf = 0;
      if (!duration || video.seeking) return;
      const diff = desired - video.currentTime;
      if (Math.abs(diff) < 0.02) return;
      const step = Math.min(duration - 0.05, Math.max(0, video.currentTime + diff * 0.4));
      try {
        if (typeof video.fastSeek === 'function') video.fastSeek(step);
        else video.currentTime = step;
      } catch { /* seek not ready yet */ }
    };

    const queue = () => { if (!raf) raf = requestAnimationFrame(pump); };

    const onMove = (event) => {
      if (!duration) return;
      if (prevX === null) { prevX = event.clientX; return; }
      const delta = event.clientX - prevX;
      prevX = event.clientX;
      desired = Math.min(duration, Math.max(0, desired + (delta / window.innerWidth) * 0.8 * duration));
      queue();
    };

    video.pause();
    video.addEventListener('seeked', queue);
    window.addEventListener('mousemove', onMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      video.removeEventListener('seeked', queue);
      video.removeEventListener('loadedmetadata', readDuration);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-hero">
        <div className="about-hero-video" aria-hidden="true">
          {!reduceMotion && (
            <video ref={videoRef} src={ABOUT_VIDEO} muted playsInline preload="auto" />
          )}
          <div className="about-hero-video-mask" />
        </div>

        <div className="about-hero-inner">
          <motion.p
            className="eyebrow"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About
          </motion.p>

          <motion.h1
            className="about-hero-title"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="is-primary">Pouya Mansournia designs intelligent physical systems</span>{' '}
            <span className="is-muted">
              from simulation and embedded control to robotics, product, and real-world deployment.
            </span>
          </motion.h1>

          <motion.a
            className="about-capsule"
            href={routeHref('contact')}
            onClick={(event) => navigateTo('contact', event)}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span>Talk about robotics, automation, or product</span>
            <span className="about-capsule-btn" aria-hidden="true">
              <ArrowUpRight size={16} />
            </span>
          </motion.a>

        </div>

        <div className="about-hero-foot">
          <span>2026</span>
          <span>robotics · automation · precision motion</span>
        </div>
      </div>

      <div className="about-body">
        <aside className="about-photo">
          <div className="about-image-frame">
            <img
              src={`/portfolio-images/${aboutImage.fileName}`}
              alt={aboutImage.alt}
              width="200"
              height="200"
              decoding="async"
              onError={(event) => event.currentTarget.classList.add('is-missing')}
            />
            <div className="image-fallback">
              <Image size={34} />
              <strong>{aboutImage.title}</strong>
              <span>Image unavailable</span>
            </div>
          </div>
          <div className="about-photo-meta">
            <strong>Pouya Mansournia</strong>
            <span>Mechanical Engineer</span>
            <span>Robotics · Product · Precision Motion</span>
          </div>
        </aside>

        <div className="about-copy">
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

          <div className="about-cards">
            <div className="about-note">
              <small>Product building</small>
              <strong>Founder-minded engineering</strong>
              <span>Turning technical systems into products, reusable frameworks, and open-source decision systems.</span>
            </div>
            <a className="about-link-card" href="https://x-robotiics.com/" target="_blank" rel="noopener noreferrer">
              <span>
                <small>Company</small>
                <strong>X-Robotiics</strong>
                <em>IoT and robotics systems company</em>
              </span>
              <ExternalLink size={18} />
            </a>
            <a className="about-link-card is-video" href="https://www.youtube.com/@Pouyamansournia" target="_blank" rel="noopener noreferrer">
              <span>
                <small>Portfolio Video</small>
                <strong>Watch my portfolio</strong>
                <em>See selected engineering work on YouTube</em>
              </span>
              <PlayCircle size={19} />
            </a>
          </div>

          <div className="chip-list">
            {chips.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
