import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { systemLayers } from '../data.js';
import { navigateTo, routeHref } from '../navigation.js';

// Pseudo-3D layered map of how the work connects, top (business) to bottom (physical).
// Every layer is a real link; an adjacent list gives the same paths as plain text.
export default function SystemMap({ variant = 'full' }) {
  const reduceMotion = useReducedMotion();
  const compact = variant === 'home';

  return (
    <div className={`system-map ${compact ? 'is-compact' : ''}`}>
      <ol className="system-map-stack">
        {systemLayers.map((layer, index) => {
          const primary = layer.links[0];
          return (
            <motion.li
              key={layer.id}
              className="system-map-layer"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
            >
              <a
                className="system-map-layer-face"
                href={routeHref(primary.route)}
                onClick={(event) => navigateTo(primary.route, event)}
              >
                <span className="system-map-layer-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="system-map-layer-copy">
                  <strong>{layer.title}</strong>
                  <span>{layer.blurb}</span>
                  {!compact && (
                    <span className="chip-list small">
                      {layer.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </span>
                  )}
                </span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </motion.li>
          );
        })}
      </ol>

      {!compact && (
        <div className="system-map-links">
          {systemLayers.map((layer, index) => (
            <motion.div
              className="sml-card"
              key={layer.id}
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <div className="sml-card-head">
                <span className="sml-card-index">{String(index + 1).padStart(2, '0')}</span>
                <p className="eyebrow">{layer.title}</p>
              </div>
              <ul>
                {layer.links.map((link) => (
                  <li key={link.route}>
                    <a
                      href={routeHref(link.route)}
                      onClick={(event) => navigateTo(link.route, event)}
                    >
                      <span>{link.label}</span>
                      <ArrowRight size={14} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
