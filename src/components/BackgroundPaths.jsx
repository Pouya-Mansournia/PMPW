import { motion } from 'framer-motion';

function FloatingPaths({ position }) {
  const paths = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 1 + i * 0.1,
    duration: 4 + (i % 5) * 1.5,
    delay: -(i * 0.6),
  }));

  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      viewBox="0 0 696 316"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          stroke="rgba(123,224,181,0.7)"
          strokeWidth={path.width}
          initial={{ opacity: 0.05 }}
          animate={{ opacity: [0.04, 0.2 + (path.id % 5) * 0.03, 0.04] }}
          transition={{
            duration: path.duration,
            delay: path.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </svg>
  );
}

export default function BackgroundPaths() {
  // Centre stays fully visible; only a soft band at each edge fades out, so the
  // container's hard clip never reads as a line.
  const edgeFade = [
    'linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)',
    'linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%)',
  ].join(', ');

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.7,
        WebkitMaskImage: edgeFade,
        maskImage: edgeFade,
        WebkitMaskComposite: 'source-in',
        maskComposite: 'intersect',
      }}
    >
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
}
