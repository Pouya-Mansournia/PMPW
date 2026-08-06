import { Fragment } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
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
  return (
    <div className="product-journey-page">
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
              <span className="pj-process-step">
                <span className="pj-process-index">{String(index + 1).padStart(2, '0')}</span>
                {step}
              </span>
              {index < productProcessSteps.length - 1 && (
                <span className="pj-process-arrow" aria-hidden="true"><ArrowRight size={15} /></span>
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

      <section className="page-section soft-section">
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
        <div className="pj-closing-links">
          <a href={routeHref('works')} onClick={(event) => navigateTo('works', event)}>Engineering Projects <ArrowUpRight size={16} /></a>
          <a href={routeHref('publications')} onClick={(event) => navigateTo('publications', event)}>Research <ArrowUpRight size={16} /></a>
          <a href={routeHref('open-source')} onClick={(event) => navigateTo('open-source', event)}>Open Source <ArrowUpRight size={16} /></a>
          <a href={routeHref('contact')} onClick={(event) => navigateTo('contact', event)}>Contact <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </div>
  );
}
