import { ArrowDown, Code2 } from 'lucide-react';
import { OpenSourceSystemsGrid } from '../components/OpenSourceSystems.jsx';
import { professionalLinks } from '../data.js';

const githubProfile = professionalLinks.find((link) => link.label === 'GitHub')?.href || 'https://github.com/Pouya-Mansournia';

export default function OpenSourcePage() {
  return (
    <section id="open-source" className="page-section open-source-page">
      <div className="open-source-hero">
        <div>
          <p className="eyebrow">Open Source Systems</p>
          <h1>Operating systems for engineering, robotics, AI agents, and product execution.</h1>
          <p className="lead">
            I design and publish open-source operating systems that turn engineering knowledge into repeatable execution frameworks,
            from robotics system design and AI-agent workflows to product strategy and startup execution.
          </p>
          <p>
            These systems are my attempt to organize the way I think, build, and execute complex engineering projects,
            from robotics and automation to AI agents and product development.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#open-source-systems">
              <ArrowDown size={18} />
              Explore Projects
            </a>
            <a className="secondary-btn" href={githubProfile} target="_blank" rel="noreferrer">
              <Code2 size={18} />
              View GitHub
            </a>
          </div>
        </div>
        <div className="open-source-architecture" aria-hidden="true">
          <div className="architecture-orbit orbit-one" />
          <div className="architecture-orbit orbit-two" />
          <div className="architecture-grid-lines" />
          <span className="architecture-node node-reos">
            <small>01</small>
            <strong>REOS</strong>
            <em>Robotics</em>
          </span>
          <span className="architecture-node node-foundry">
            <small>02</small>
            <strong>Foundry OS</strong>
            <em>Product</em>
          </span>
          <span className="architecture-node node-archon">
            <small>03</small>
            <strong>ARCHON OS</strong>
            <em>AI Agents</em>
          </span>
          <div className="architecture-connector connector-reos" />
          <div className="architecture-connector connector-foundry" />
          <div className="architecture-connector connector-archon" />
          <div className="architecture-core">
            <span>Open Source Stack</span>
            <strong>System Thinking</strong>
            <small>Architecture / Execution / Documentation</small>
            <div className="architecture-core-metrics">
            <b>3 OS + CAD</b>
              <b>Reusable</b>
              <b>GitHub</b>
            </div>
          </div>
          <div className="architecture-caption">
            <strong>Knowledge to execution</strong>
            <span>Reusable frameworks for technical decisions, robotics delivery, and founder workflows.</span>
          </div>
        </div>
      </div>

      <div id="open-source-systems" className="open-source-systems-section">
        <div className="section-title wide">
          <p className="eyebrow">Systems Grid</p>
          <h2>Open systems and engineering libraries, designed as serious technical products.</h2>
          <p>
            Each source captures a different layer of technical execution: robotics engineering,
            AI-assisted architecture, founder-level product operations, and public CAD model sharing.
          </p>
        </div>
        <OpenSourceSystemsGrid />
      </div>
    </section>
  );
}
