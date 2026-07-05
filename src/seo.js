import { blogPosts, openSourceSystems, works } from './data.js';
import { ROUTE_PATHS, routeHref } from './navigation.js';

export const SITE_URL = 'https://mansournia.info';
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/portfolio-images/Last-Mile%20Autonomous%20Delivery%20Robot%20Prototype.jpg`;

const defaultDescription = 'Pouya Mansournia is a robotics systems architect and mechatronics engineer working across autonomous mobile robots, warehouse automation, embedded systems, precision mechanisms, and AI-integrated products.';

const pageSeo = {
  home: {
    title: 'Pouya Mansournia | Robotics Systems Architect & Mechatronics Engineer',
    description: defaultDescription,
    type: 'website'
  },
  about: {
    title: 'About Pouya Mansournia | Robotics Systems Architect',
    description: 'About Pouya Mansournia, a robotics systems architect and mechatronics engineer whose work spans autonomous robots, warehouse automation, embedded systems, precision motion, and product development.',
    image: `${SITE_URL}/portfolio-images/Profile%20Photo.jpg`,
    type: 'profile'
  },
  works: {
    title: 'Robotics and Automation Projects | Pouya Mansournia',
    description: 'Explore Pouya Mansournia’s projects across mobile robotics, manipulators, UAV systems, precision positioning, warehouse automation, embedded electronics, and industrial machinery.',
    type: 'website'
  },
  publications: {
    title: 'Research and Publications | Pouya Mansournia',
    description: 'Research and publications by Pouya Mansournia covering robotics, sensor fusion, precision motion, embedded control, distributed sensing, and automation.',
    type: 'website'
  },
  blog: {
    title: 'Engineering Articles | Pouya Mansournia',
    description: 'Technical engineering articles by Pouya Mansournia about warehouse automation, point-cloud dimensioning, embedded control, and industrial IoT systems.',
    type: 'website'
  },
  'open-source': {
    title: 'Open Source Engineering Systems | Pouya Mansournia',
    description: 'Open-source systems by Pouya Mansournia for robotics engineering, AI-agent architecture, product execution, technical decisions, and public CAD sharing.',
    type: 'website'
  },
  achievements: {
    title: 'Engineering Achievements | Pouya Mansournia',
    description: 'Selected engineering achievements by Pouya Mansournia across robotics, warehouse automation, production systems, and precision motion research.',
    type: 'website'
  },
  contact: {
    title: 'Contact Pouya Mansournia | Robotics and Mechatronics',
    description: 'Contact Pouya Mansournia regarding robotics, automation, mechatronics, precision motion, engineering collaboration, or technical opportunities.',
    type: 'website'
  },
  'not-found': {
    title: 'Page Not Found | Pouya Mansournia',
    description: 'The requested page could not be found on Pouya Mansournia’s portfolio website.',
    robots: 'noindex, follow',
    type: 'website'
  }
};

const detailEntries = [
  ...blogPosts.map((item) => [item.id, { item, parent: 'blog', type: 'article' }]),
  ...works.map((item) => [item.id, { item, parent: 'works', type: 'website' }])
];

const detailByRoute = Object.fromEntries(detailEntries);

function absoluteImage(fileName) {
  return fileName
    ? `${SITE_URL}/portfolio-images/${encodeURIComponent(fileName)}`
    : DEFAULT_SOCIAL_IMAGE;
}

export function absoluteUrl(route) {
  return new URL(routeHref(route), SITE_URL).href;
}

export function getSeo(route) {
  const detail = detailByRoute[route];
  if (detail) {
    const { item, type } = detail;
    return {
      title: `${item.title} | Pouya Mansournia`,
      description: `${item.text}${item.role ? ` Pouya Mansournia’s role: ${item.role}.` : ''}`,
      image: absoluteImage(item.cover?.fileName),
      imageAlt: item.cover?.alt || item.title,
      robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      type,
      url: absoluteUrl(route)
    };
  }

  const page = pageSeo[route] || pageSeo['not-found'];
  return {
    ...page,
    image: page.image || DEFAULT_SOCIAL_IMAGE,
    imageAlt: route === 'about'
      ? 'Pouya Mansournia profile photograph'
      : 'Last-mile autonomous delivery robot prototype from Pouya Mansournia’s engineering portfolio',
    robots: page.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    url: route === 'not-found' ? SITE_URL : absoluteUrl(route)
  };
}

function personEntity() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Pouya Mansournia',
    alternateName: 'Pouya-Mansournia',
    url: `${SITE_URL}/`,
    image: `${SITE_URL}/portfolio-images/Profile%20Photo.jpg`,
    description: defaultDescription,
    jobTitle: ['Robotics Systems Architect', 'Mechatronics Engineer'],
    knowsAbout: [
      'Robotics systems architecture',
      'Autonomous mobile robots',
      'Warehouse automation',
      'Embedded systems',
      'Precision mechatronics',
      'Mechanical design',
      'Product development',
      'AI integration',
      'Industrial automation'
    ],
    sameAs: [
      'https://github.com/Pouya-Mansournia',
      'https://www.linkedin.com/in/pouya-mansournia/',
      'https://www.researchgate.net/profile/Pouya-Mansournia',
      'https://grabcad.com/pouya.mansournia-1',
      'https://www.youtube.com/@Pouyamansournia'
    ]
  };
}

function breadcrumb(route, label, parent) {
  const items = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` }
  ];
  if (parent) {
    items.push({ '@type': 'ListItem', position: 2, name: pageSeo[parent].title.split('|')[0].trim(), item: absoluteUrl(parent) });
  }
  items.push({ '@type': 'ListItem', position: items.length + 1, name: label, item: absoluteUrl(route) });
  return { '@type': 'BreadcrumbList', '@id': `${absoluteUrl(route)}#breadcrumb`, itemListElement: items };
}

function webPage(route, name, description, pageType = 'WebPage') {
  return {
    '@type': pageType,
    '@id': `${absoluteUrl(route)}#webpage`,
    url: absoluteUrl(route),
    name,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': PERSON_ID },
    inLanguage: 'en'
  };
}

export function getStructuredData(route) {
  if (route === 'not-found') return null;
  const seo = getSeo(route);
  const graph = [];

  if (route === 'home') {
    graph.push(
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: 'Pouya Mansournia — Robotics Systems Architect',
        description: seo.description,
        inLanguage: 'en',
        author: { '@id': PERSON_ID }
      },
      webPage('home', seo.title, seo.description),
      personEntity()
    );
  } else if (route === 'about') {
    graph.push(
      {
        ...webPage(route, seo.title, seo.description, 'ProfilePage'),
        mainEntity: { '@id': PERSON_ID },
        breadcrumb: { '@id': `${absoluteUrl(route)}#breadcrumb` }
      },
      personEntity(),
      breadcrumb(route, 'About Pouya Mansournia')
    );
  } else if (detailByRoute[route]) {
    const { item, parent } = detailByRoute[route];
    const isArticle = parent === 'blog';
    const workId = `${absoluteUrl(route)}#${isArticle ? 'article' : 'creative-work'}`;
    graph.push(
      {
        ...webPage(route, seo.title, seo.description),
        mainEntity: { '@id': workId },
        breadcrumb: { '@id': `${absoluteUrl(route)}#breadcrumb` }
      },
      {
        '@type': isArticle ? 'TechArticle' : 'CreativeWork',
        '@id': workId,
        url: absoluteUrl(route),
        headline: isArticle ? item.title : undefined,
        name: item.title,
        description: item.text,
        image: absoluteImage(item.cover?.fileName),
        author: isArticle ? { '@id': PERSON_ID } : undefined,
        creator: isArticle ? undefined : { '@id': PERSON_ID },
        keywords: item.highlights,
        isPartOf: { '@id': `${absoluteUrl(parent)}#webpage` }
      },
      breadcrumb(route, item.title, parent)
    );
  } else {
    const pageType = route === 'contact' ? 'ContactPage' : route === 'open-source' ? 'CollectionPage' : 'CollectionPage';
    const page = {
      ...webPage(route, seo.title, seo.description, pageType),
      breadcrumb: { '@id': `${absoluteUrl(route)}#breadcrumb` }
    };

    if (route === 'open-source') {
      page.mainEntity = {
        '@type': 'ItemList',
        itemListElement: openSourceSystems.map((system, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': system.id === 'grabcad-library' ? 'CreativeWork' : 'SoftwareSourceCode',
            name: system.title,
            description: system.description,
            url: system.github,
            codeRepository: system.id === 'grabcad-library' ? undefined : system.github,
            creator: { '@id': PERSON_ID }
          }
        }))
      };
    }

    graph.push(page, breadcrumb(route, seo.title.split('|')[0].trim()));
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

export function getIndexableRoutes() {
  return Object.keys(ROUTE_PATHS);
}

function ensureMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
    document.head.appendChild(element);
  }
  return element;
}

export function applySeo(route) {
  if (typeof document === 'undefined') return;
  const seo = getSeo(route);
  document.title = seo.title;
  document.documentElement.lang = 'en';

  const values = [
    ['meta[name="description"]', { name: 'description' }, seo.description],
    ['meta[name="robots"]', { name: 'robots' }, seo.robots],
    ['meta[name="googlebot"]', { name: 'googlebot' }, seo.robots],
    ['meta[property="og:title"]', { property: 'og:title' }, seo.title],
    ['meta[property="og:description"]', { property: 'og:description' }, seo.description],
    ['meta[property="og:url"]', { property: 'og:url' }, seo.url],
    ['meta[property="og:type"]', { property: 'og:type' }, seo.type],
    ['meta[property="og:image"]', { property: 'og:image' }, seo.image],
    ['meta[property="og:image:alt"]', { property: 'og:image:alt' }, seo.imageAlt],
    ['meta[name="twitter:title"]', { name: 'twitter:title' }, seo.title],
    ['meta[name="twitter:description"]', { name: 'twitter:description' }, seo.description],
    ['meta[name="twitter:image"]', { name: 'twitter:image' }, seo.image],
    ['meta[name="twitter:image:alt"]', { name: 'twitter:image:alt' }, seo.imageAlt]
  ];

  values.forEach(([selector, attributes, content]) => ensureMeta(selector, attributes).setAttribute('content', content));

  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = seo.url;

  const schema = getStructuredData(route);
  let script = document.getElementById('route-schema-ld');
  if (schema && !script) {
    script = document.createElement('script');
    script.id = 'route-schema-ld';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  if (script) {
    if (schema) script.textContent = JSON.stringify(schema);
    else script.remove();
  }
}
