import { useState, useRef, useContext, createContext, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const MouseContext = createContext({ x: 0, y: 0 });

function DockIcon({ icon, href, label }) {
  const ref = useRef(null);
  const mouse = useContext(MouseContext);
  const distance = useMotionValue(Infinity);

  useEffect(() => {
    if (!ref.current || mouse.x === 0) {
      distance.set(Infinity);
      return;
    }
    const iconRect = ref.current.getBoundingClientRect();
    const containerRect = ref.current.parentElement.getBoundingClientRect();
    const iconCenterX = iconRect.left + iconRect.width / 2;
    const mouseXAbsolute = containerRect.left + mouse.x;
    distance.set(Math.abs(mouseXAbsolute - iconCenterX));
  }, [mouse, distance]);

  const width = useTransform(distance, [0, 90], [62, 46]);
  const springW = useSpring(width, { mass: 0.1, stiffness: 160, damping: 13 });

  return (
    <motion.a
      ref={ref}
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noreferrer"
      aria-label={label}
      title={label}
      style={{
        width: springW,
        aspectRatio: '1 / 1',
        borderRadius: '50%',
        background: 'rgba(255,255,255,.07)',
        border: '1px solid rgba(255,255,255,.12)',
        display: 'grid',
        placeItems: 'center',
        color: 'var(--accent)',
        cursor: 'pointer',
        textDecoration: 'none',
        flexShrink: 0,
        transition: 'background .18s, border-color .18s',
      }}
      whileHover={{ background: 'rgba(123,224,181,.13)', borderColor: 'rgba(123,224,181,.40)' }}
    >
      {icon}
    </motion.a>
  );
}

export default function MagneticDock({ items }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <MouseContext.Provider value={pos}>
      <div
        onMouseMove={(e) => {
          const { left } = e.currentTarget.getBoundingClientRect();
          setPos({ x: e.clientX - left, y: 0 });
        }}
        onMouseLeave={() => setPos({ x: 0, y: 0 })}
        style={{
          display: 'inline-flex',
          alignItems: 'flex-end',
          gap: '10px',
          padding: '14px 20px',
          height: '78px',
          background: 'rgba(255,255,255,.04)',
          border: '1px solid rgba(255,255,255,.10)',
          borderRadius: '999px',
          backdropFilter: 'blur(12px)',
        }}
      >
        {items.map((item) => (
          <DockIcon key={item.label} {...item} />
        ))}
      </div>
    </MouseContext.Provider>
  );
}
