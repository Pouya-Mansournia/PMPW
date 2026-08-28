import { Fragment } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { buildProcess, buildProcessLoop } from '../data.js';

// "How I Build Systems": five-step operating loop rendered as a flow plus detail cards.
export default function BuildProcess() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="build-process">
      <div className="section-title wide">
        <p className="eyebrow">How I Build Systems</p>
        <h2>Model the system. Separate responsibilities. Measure the whole.</h2>
        <p>The same loop runs at every layer, from a mechanism to a warehouse.</p>
      </div>

      <div className="build-process-loop" aria-label="Observe, Understand, Decide, Execute, Measure">
        {buildProcessLoop.map((step, index) => (
          <Fragment key={step}>
            <span className="build-process-loop-node">{step}</span>
            {index < buildProcessLoop.length - 1 && (
              <motion.span
                className="build-process-loop-arrow"
                aria-hidden="true"
                animate={reduceMotion ? undefined : { x: [0, 4, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.1 }}
              >
                <ArrowRight size={14} />
              </motion.span>
            )}
          </Fragment>
        ))}
      </div>

      <div className="build-process-steps">
        {buildProcess.map((step, index) => (
          <motion.article
            className="build-process-step"
            key={step.n}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
          >
            <span className="build-process-step-number">{step.n}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
