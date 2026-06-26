import { useEffect, useMemo, useState } from 'react';
import SiteLayout from './components/SiteLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import PublicationsPage from './pages/PublicationsPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import WorksPage from './pages/WorksPage.jsx';
import OpenSourcePage from './pages/OpenSourcePage.jsx';
import AchievementsPage from './pages/AchievementsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import DetailPage from './pages/DetailPage.jsx';
import { blogPosts, works } from './data.js';

const SITE_URL = 'https://mansournia.info';
const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/portfolio-images/Last-Mile%20Autonomous%20Delivery%20Robot%20Prototype.jpg`;

const pageRoutes = ['home', 'about', 'publications', 'blog', 'works', 'open-source', 'achievements', 'contact'];

const PAGE_TITLES = {
  home: 'Pouya Mansournia | Robotics Systems Architect & Mechatronics Engineer',
  about: 'About Pouya Mansournia | Robotics Systems Architect — Istanbul, Turkiye',
  blog: 'Engineering Blog | Pouya Mansournia — Warehouse Automation & Robotics Systems',
  works: 'Engineering Portfolio | Pouya Mansournia — Robotics, Automation & Precision Motion',
  achievements: 'Achievements | Pouya Mansournia — RoboCup World Champion & Robotics Engineer',
  publications: 'Publications | Pouya Mansournia - Robotics, Automation & Precision Motion',
  contact: 'Contact Pouya Mansournia | Robotics Systems Architect, Istanbul, Turkiye',
  'open-source': 'Open Source Systems | Pouya Mansournia'
};

const PAGE_DESCRIPTIONS = {
  home: 'Pouya Mansournia — Robotics Systems Architect and Mechatronics Engineer with 12+ years building autonomous robots, warehouse automation systems, embedded electronics, and nano-precision motion platforms. RoboCup World Champion. 500+ industrial machines deployed.',
  about: 'Pouya Mansournia is a Robotics Systems Architect and Mechatronics Engineer based in Istanbul, Turkiye. 12+ years of experience across autonomous mobile robots, warehouse automation, piezo-driven precision motion, and embedded electronics.',
  blog: 'Technical engineering notes by Pouya Mansournia covering high-speed wheel sortation systems, put-to-light warehouse guidance, 3D point cloud dimension detection, and industrial IoT platforms.',
  works: 'Portfolio of Pouya Mansournia — autonomous robots, robotic manipulators, wheeled platforms, UAVs, nano-precision positioning, conveyor and material handling systems, PCB design, and industrial machinery.',
  achievements: 'Engineering milestones of Pouya Mansournia: RoboCup World Champion, 20+ robotic platforms built, 500+ industrial machines deployed, precision motion research, and production-scale warehouse automation.',
  publications: 'Publications and technical writing by Pouya Mansournia covering robotics systems, automation, mechatronics, embedded control, piezo actuation, flexure mechanisms, and precision motion research.',
  contact: 'Contact Pouya Mansournia — Robotics Systems Architect based in Istanbul, Turkiye. Open to robotics engineering, warehouse automation, precision motion, PhD collaboration, and technical leadership roles.'
};

const PAGE_KEYWORDS = {
  home: 'Pouya Mansournia, Robotics Systems Architect, Mechatronics Engineer, Robotics Engineer, Product Manager, Product Builder, Entrepreneur, Technical Founder, Venture Builder, Product Strategy, Warehouse Automation, Precision Motion, Embedded Systems',
  'open-source': 'Pouya Mansournia open source, Foundry OS, REOS, ARCHON OS, robotics operating system, AI agent framework, robotics systems architecture, product execution framework, product builder, technical founder, entrepreneur'
};

function getRouteFromHash() {
  return window.location.hash.replace(/^#\/?/, '') || 'home';
}

function setMeta(name, content) {
  const el = document.querySelector(`meta[name="${name}"]`);
  if (el) el.setAttribute('content', content);
}

function setPropertyMeta(property, content) {
  const el = document.querySelector(`meta[property="${property}"]`);
  if (el) el.setAttribute('content', content);
}

function setCanonical(route) {
  const el = document.querySelector('link[rel="canonical"]');
  if (!el) return;
  el.setAttribute('href', route === 'home' ? `${SITE_URL}/` : `${SITE_URL}/#/${route}`);
}

function setDynamicSchema(schema) {
  const id = 'dynamic-schema-ld';
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(schema);
}

function removeDynamicSchema() {
  const el = document.getElementById('dynamic-schema-ld');
  if (el) el.remove();
}

function buildBlogSchema(item, route) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: item.title,
    description: item.text,
    author: { '@type': 'Person', name: 'Pouya Mansournia', url: SITE_URL },
    publisher: { '@type': 'Person', name: 'Pouya Mansournia', url: SITE_URL },
    url: `${SITE_URL}/#/${route}`,
    image: item.cover?.fileName ? `${SITE_URL}/portfolio-images/${encodeURIComponent(item.cover.fileName)}` : undefined,
    keywords: item.highlights?.join(', '),
    about: { '@type': 'Thing', name: item.title }
  };
}

function buildWorkSchema(item, route) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: item.title,
    description: item.text,
    creator: { '@type': 'Person', name: 'Pouya Mansournia', url: SITE_URL },
    url: `${SITE_URL}/#/${route}`,
    image: item.cover?.fileName ? `${SITE_URL}/portfolio-images/${encodeURIComponent(item.cover.fileName)}` : undefined,
    keywords: item.highlights?.join(', '),
    about: { '@type': 'Thing', name: item.title }
  };
}

function updateSeo({ route, title, description, image = DEFAULT_SOCIAL_IMAGE }) {
  const url = route === 'home' ? `${SITE_URL}/` : `${SITE_URL}/#/${route}`;

  document.title = title;
  setCanonical(route);
  setMeta('description', description);
  setMeta('keywords', PAGE_KEYWORDS[route] || PAGE_KEYWORDS.home);
  setMeta('twitter:title', title);
  setMeta('twitter:description', description);
  setMeta('twitter:url', url);
  setMeta('twitter:image', image);
  setPropertyMeta('og:title', title);
  setPropertyMeta('og:description', description);
  setPropertyMeta('og:url', url);
  setPropertyMeta('og:image', image);
}

export default function App() {
  const [route, setRoute] = useState(getRouteFromHash);

  useEffect(() => {
    const syncRoute = () => {
      setRoute(getRouteFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  const detailRoutes = useMemo(() => {
    const entries = [
      ...blogPosts.map((item) => [item.id, { item, parentPath: 'blog' }]),
      ...works.map((item) => [item.id, { item, parentPath: 'works' }])
    ];
    return Object.fromEntries(entries);
  }, []);

  const detailPage = detailRoutes[route];

  useEffect(() => {
    const detail = detailRoutes[route];
    if (detail) {
      const { item, parentPath } = detail;
      const image = item.cover?.fileName
        ? `${SITE_URL}/portfolio-images/${encodeURIComponent(item.cover.fileName)}`
        : DEFAULT_SOCIAL_IMAGE;

      const techStr = item.technologies ? ` Technologies: ${item.technologies}.` : '';
      const impactStr = item.impact ? ` ${item.impact}` : '';
      const description = `${item.text}${impactStr}${techStr} — Pouya Mansournia engineering portfolio.`;

      updateSeo({ route, title: `${item.title} | Pouya Mansournia`, description, image });

      if (parentPath === 'blog') setDynamicSchema(buildBlogSchema(item, route));
      else setDynamicSchema(buildWorkSchema(item, route));
    } else {
      removeDynamicSchema();
      const knownRoute = pageRoutes.includes(route) ? route : 'home';
      const fallbackDescription = knownRoute === 'open-source'
        ? 'Open-source systems by Pouya Mansournia for robotics engineering, AI-agent workflows, product execution, system architecture, and startup decision-making.'
        : PAGE_DESCRIPTIONS[knownRoute] || PAGE_DESCRIPTIONS.home;
      updateSeo({
        route: knownRoute,
        title: PAGE_TITLES[knownRoute] || PAGE_TITLES.home,
        description: fallbackDescription
      });
    }
  }, [route, detailRoutes]);

  return (
    <SiteLayout activeRoute={route}>
      {route === 'home' && <HomePage />}
      {route === 'about' && <AboutPage />}
      {route === 'publications' && <PublicationsPage />}
      {route === 'blog' && <BlogPage />}
      {route === 'works' && <WorksPage />}
      {route === 'open-source' && <OpenSourcePage />}
      {route === 'achievements' && <AchievementsPage />}
      {route === 'contact' && <ContactPage />}
      {detailPage && <DetailPage item={detailPage.item} parentPath={detailPage.parentPath} />}
      {!detailPage && !pageRoutes.includes(route) && <HomePage />}
    </SiteLayout>
  );
}
