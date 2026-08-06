import { Fragment, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  journeyStages,
  productProcessSteps,
  productCapabilityGroups,
  productCaseStudies,
  productPrinciples,
  productIntersectionColumns,
  productToolkitGroups
} from '../data.js';
import { navigateTo, routeHref } from '../navigation.js';

export default function ProductJourneyPage() {
  const prefersReducedMotion = useReducedMotion();
  const [isCompactDevice, setIsCompactDevice] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 900px)');
    const update = () => setIsCompactDevice(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  const vennLite = prefersReducedMotion || isCompactDevice;

  return (
    <div className="product-journey-page">
      {!prefersReducedMotion && (
        <div className="pj-page-video" aria-hidden="true">
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          <div className="pj-page-video-overlay" />
        </div>
      )}
      <section className="page-section pj-hero">
        <p className="eyebrow">Product Journey</p>
        <p className="pj-role-tag">Technical Entrepreneur & Product Leader</p>
        <h1 className="semantic-page-title">From Building Systems to Building Products</h1>
        <p className="lead">
          My career started in engineering, where the main question was how to make complex systems work reliably.
        </p>
        <p>
          Over time, that question expanded. I became increasingly interested in what should be built, which problems
          were worth solving, who we were solving them for, and how technical decisions translated into measurable
          outcomes.
        </p>
        <p>
          That progression took me from engineering execution to product engineering, product ownership, and
          eventually broader business thinking.
        </p>
        <blockquote className="pj-quote">
          My move from Engineering to Product was not a career switch. It was an expansion of ownership.
        </blockquote>
        <p className="pj-supporting-line">From building technology — to owning products — to understanding the business behind them.</p>
      </section>

      <section className="page-section">
        <div className="section-title">
          <p className="eyebrow">Intersection</p>
          <h2>Where Product and Engineering Meet</h2>
          <p className="lead">
            I do not see Product and Engineering as separate worlds. Product defines which problems deserve
            investment and what outcomes matter. Engineering defines what is feasible, reliable, scalable,
            maintainable, and economically sensible. My strongest work usually happens where those two perspectives
            need to be connected.
          </p>
        </div>

        <div className="pj-venn-stage">
          <svg
            className="pj-venn-svg"
            viewBox="0 0 400 340"
            role="img"
            aria-label="Venn diagram of Engineering feasibility, Business viability, and Customer desirability overlapping at Product, the intersection where I operate"
          >
            <defs>
              <radialGradient id="vennEngFill" cx="35%" cy="30%" r="75%">
                <stop offset="0%" stopColor="rgba(168,200,255,.60)" />
                <stop offset="65%" stopColor="rgba(138,180,255,.28)" />
                <stop offset="100%" stopColor="rgba(138,180,255,.06)" />
              </radialGradient>
              <radialGradient id="vennBizFill" cx="65%" cy="30%" r="75%">
                <stop offset="0%" stopColor="rgba(233,204,150,.60)" />
                <stop offset="65%" stopColor="rgba(216,181,109,.28)" />
                <stop offset="100%" stopColor="rgba(216,181,109,.06)" />
              </radialGradient>
              <radialGradient id="vennCustFill" cx="50%" cy="65%" r="75%">
                <stop offset="0%" stopColor="rgba(170,238,205,.60)" />
                <stop offset="65%" stopColor="rgba(123,224,181,.28)" />
                <stop offset="100%" stopColor="rgba(123,224,181,.06)" />
              </radialGradient>
              {!vennLite && (
                <filter id="vennGlass" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="2.5" />
                </filter>
              )}
            </defs>

            <motion.g
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <motion.g
                style={{ transformOrigin: '150px 150px' }}
                animate={vennLite ? undefined : { scale: [1, 1.04, 0.98, 1] }}
                transition={vennLite ? undefined : { duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <motion.ellipse
                  className="pj-venn-circle pj-venn-eng"
                  cx="150" cy="150"
                  fill="url(#vennEngFill)"
                  filter={vennLite ? undefined : 'url(#vennGlass)'}
                  animate={vennLite ? { rx: 100, ry: 100 } : { rx: [100, 112, 94, 104, 100], ry: [100, 92, 108, 97, 100] }}
                  transition={vennLite ? undefined : { duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <text x="110" y="90" className="pj-venn-label-title" textAnchor="middle">Engineering</text>
                <text x="110" y="108" className="pj-venn-label-sub" textAnchor="middle">FEASIBILITY</text>
              </motion.g>
            </motion.g>

            <motion.g
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <motion.g
                style={{ transformOrigin: '250px 150px' }}
                animate={vennLite ? undefined : { scale: [1, 0.98, 1.045, 1] }}
                transition={vennLite ? undefined : { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
              >
                <motion.ellipse
                  className="pj-venn-circle pj-venn-biz"
                  cx="250" cy="150"
                  fill="url(#vennBizFill)"
                  filter={vennLite ? undefined : 'url(#vennGlass)'}
                  animate={vennLite ? { rx: 100, ry: 100 } : { rx: [100, 95, 113, 101, 100], ry: [100, 109, 91, 99, 100] }}
                  transition={vennLite ? undefined : { duration: 8.8, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
                />
                <text x="290" y="90" className="pj-venn-label-title" textAnchor="middle">Business</text>
                <text x="290" y="108" className="pj-venn-label-sub" textAnchor="middle">VIABILITY</text>
              </motion.g>
            </motion.g>

            <motion.g
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.g
                style={{ transformOrigin: '200px 236.6px' }}
                animate={vennLite ? undefined : { scale: [1, 1.03, 0.985, 1] }}
                transition={vennLite ? undefined : { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2.2 }}
              >
                <motion.ellipse
                  className="pj-venn-circle pj-venn-cust"
                  cx="200" cy="236.6"
                  fill="url(#vennCustFill)"
                  filter={vennLite ? undefined : 'url(#vennGlass)'}
                  animate={vennLite ? { rx: 100, ry: 100 } : { rx: [100, 108, 96, 103, 100], ry: [100, 94, 106, 98, 100] }}
                  transition={vennLite ? undefined : { duration: 6.8, repeat: Infinity, ease: 'easeInOut', delay: 2.2 }}
                />
                <text x="200" y="298" className="pj-venn-label-title" textAnchor="middle">Customer</text>
                <text x="200" y="316" className="pj-venn-label-sub" textAnchor="middle">DESIRABILITY</text>
              </motion.g>
            </motion.g>

            <motion.g
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.35, ease: 'easeOut' }}
              style={{ transformOrigin: '200px 179px' }}
            >
              <text x="200" y="175" className="pj-venn-center-title" textAnchor="middle">Product</text>
              <text x="200" y="191" className="pj-venn-center-sub" textAnchor="middle">WHERE I OPERATE</text>
            </motion.g>
          </svg>
          <p className="pj-venn-caption">
            A product manager’s job is to connect what engineering can feasibly build to what the business can
            sustainably support — anchored in what the customer actually needs. That intersection is where I try to work.
          </p>
        </div>

        <div className="pj-intersection">
          {productIntersectionColumns.map((column) => (
            <div className="pj-intersection-column" key={column.title}>
              <h3>{column.title}</h3>
              <p className="pj-timeline-subtitle">{column.question}</p>
              <ul>
                {column.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section soft-section">
        <div className="section-title">
          <p className="eyebrow">Evolution</p>
          <h2>How My Product Thinking Evolved</h2>
          <p className="lead">
            Product management did not enter my career as a separate discipline. It emerged naturally as the scope of
            the problems I was responsible for became larger.
          </p>
        </div>
        <ol className="pj-timeline">
          {journeyStages.map((stage) => (
            <li className="pj-timeline-stage" key={stage.title}>
              <div className="pj-timeline-marker">
                <span>{stage.period}</span>
              </div>
              <div className="pj-timeline-content">
                <h3>{stage.title}</h3>
                <p className="pj-timeline-subtitle">{stage.subtitle}</p>
                {stage.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                <div className="chip-list small">
                  {stage.capabilities.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="page-section">
        <div className="section-title">
          <p className="eyebrow">Operating Model</p>
          <h2>How I Approach Product</h2>
          <p className="lead">
            My product process starts before a solution exists. The objective is to reduce uncertainty progressively,
            from understanding the problem to proving that the resulting product creates sustainable value.
          </p>
        </div>
        <div className="pj-process-flow">
          {productProcessSteps.map((step, index) => (
            <Fragment key={step}>
              <motion.span
                className="pj-process-step"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
                whileHover={prefersReducedMotion ? undefined : { y: -3 }}
              >
                <span className="pj-process-index">{String(index + 1).padStart(2, '0')}</span>
                {step}
              </motion.span>
              {index < productProcessSteps.length - 1 && (
                <motion.span
                  className="pj-process-arrow"
                  aria-hidden="true"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  animate={prefersReducedMotion ? undefined : { x: [0, 4, 0] }}
                  transition={{
                    opacity: { duration: 0.4, delay: index * 0.06 },
                    x: prefersReducedMotion ? undefined : { duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.08 }
                  }}
                >
                  <ArrowRight size={15} />
                </motion.span>
              )}
            </Fragment>
          ))}
        </div>
        <div className="pj-capability-groups">
          {productCapabilityGroups.map((group) => (
            <div className="pj-capability-group" key={group.title}>
              <h3>{group.title}</h3>
              <p className="pj-timeline-subtitle">{group.subtitle}</p>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section soft-section">
        <div className="section-title wide">
          <p className="eyebrow">Case Studies</p>
          <h2>Selected Product Work</h2>
          <p className="lead">
            A selection of experiences where my responsibility extended beyond implementation into product decisions,
            customer value, operational impact, or business outcomes.
          </p>
        </div>
        <div className="pj-case-studies">
          {productCaseStudies.map((study) => (
            <article className="pj-case-study" key={study.id}>
              <div className="pj-case-study-head">
                <h3>{study.company}</h3>
                {study.role && <span className="pj-case-role">{study.role}</span>}
              </div>
              <p className="pj-case-title">{study.title}</p>
              {study.context.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

              {study.questions && (
                <ul className="pj-question-list">
                  {study.questions.map((q) => <li key={q}>{q}</li>)}
                </ul>
              )}

              {study.evidence && (
                <div className="chip-list small">
                  {study.evidence.map((item) => <span key={item}>{item}</span>)}
                </div>
              )}

              {study.journey && (
                <div className="pj-journey-steps">
                  {study.journey.map((step) => (
                    <div className="pj-journey-step" key={step.step}>
                      <strong>{step.step}</strong>
                      <span>{step.text}</span>
                    </div>
                  ))}
                </div>
              )}

              {study.positioning && <p className="pj-timeline-subtitle">{study.positioning}</p>}

              {study.ownership && (
                <div className="chip-list small">
                  {study.ownership.map((item) => <span key={item}>{item}</span>)}
                </div>
              )}

              {study.themes && (
                <div className="chip-list small">
                  {study.themes.map((item) => <span key={item}>{item}</span>)}
                </div>
              )}

              {study.lesson && <blockquote className="pj-quote small">{study.lesson}</blockquote>}

              {study.ctaLabel && study.ctaRoute && (
                <a className="text-link" href={routeHref(study.ctaRoute)} onClick={(event) => navigateTo(study.ctaRoute, event)}>
                  {study.ctaLabel} →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="section-title">
          <p className="eyebrow">Principles</p>
          <h2>Product Principles I Keep Coming Back To</h2>
        </div>
        <div className="pj-principles">
          {productPrinciples.map((principle) => (
            <div className="pj-principle" key={principle.n}>
              <span className="pj-principle-number">{principle.n}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="section-title">
          <p className="eyebrow">Toolkit</p>
          <h2>Product Toolkit</h2>
        </div>
        <div className="pj-toolkit">
          {productToolkitGroups.map((group) => (
            <div className="pj-toolkit-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="chip-list small">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section soft-section pj-closing">
        <div className="section-title">
          <p className="eyebrow">The Direction Forward</p>
          <h2>Build the right thing. Build it well. Measure whether it matters.</h2>
          <p>
            I started my career by learning how to build systems.
          </p>
          <p>
            Product taught me to ask a broader set of questions: what deserves to be built, who it is for, how value
            should be measured, and how the surrounding business must work for the product to succeed.
          </p>
          <p>
            I want to continue working on products where technical depth matters — especially products that sit at
            the intersection of hardware, software, AI, robotics, industrial systems, and real-world operations.
          </p>
        </div>
      </section>
    </div>
  );
}
