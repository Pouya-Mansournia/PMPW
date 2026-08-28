import { blogPosts, openSourceSystems, works } from './data.js';
import { writingArticles } from './data/writing.js';
import { ROUTE_PATHS, routeHref } from './navigation.js';

export const SITE_URL = 'https://mansournia.info';
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/portfolio-images/Last-Mile%20Autonomous%20Delivery%20Robot%20Prototype.jpg`;

const defaultDescription = 'Pouya Mansournia is a robotics systems architect, mechatronics engineer, and founder working across autonomous mobile robots, warehouse automation, embedded systems, precision mechanisms, product management, innovation, and AI-assisted product development.';

const pageSeo = {
  home: {
    title: 'Pouya Mansournia | Robotics Systems Architect, Mechatronics Engineer & Founder',
    description: defaultDescription,
    type: 'website'
  },
  about: {
    title: 'About Pouya Mansournia | Engineering, Product & Founder Journey',
    description: 'About Pouya Mansournia, a robotics systems architect and mechatronics engineer whose work expanded into product management, innovation, and founder-led ventures, spanning autonomous robots, warehouse automation, embedded systems, precision motion, and product development.',
    image: `${SITE_URL}/portfolio-images/Profile%20Photo.jpg`,
    type: 'profile'
  },
  'product-journey': {
    title: 'Product Journey | Pouya Mansournia',
    description: "The evolution of Pouya Mansournia's work from engineering and robotics into product ownership, product strategy, innovation management, and business thinking.",
    image: `${SITE_URL}/portfolio-images/Profile%20Photo.jpg`,
    type: 'website'
  },
  systems: {
    title: 'Systems | Pouya Mansournia: Simulation to Physical Deployment',
    description: 'How Pouya Mansournia’s work connects across system layers: operations, decision and orchestration, digital twin and simulation, ROS 2 autonomy, embedded and edge control, and physical robots and automation.',
    type: 'website'
  },
  'case-warehouse-digital-twin': {
    title: 'From Warehouse Simulation to Robot Orchestration | Pouya Mansournia',
    description: 'A case study on building a digital-twin architecture where a FlexSim warehouse model validates decisions, an orchestration layer coordinates resources, and ROS 2 can execute robot-level behavior.',
    image: `${SITE_URL}/portfolio-images/digital-twin-overview.png`,
    type: 'article'
  },
  works: {
    title: 'Work | Pouya Mansournia: Engineering, Robotics & Product',
    description: 'Pouya Mansournia’s work across mobile robotics, manipulators, UAV systems, precision positioning, warehouse automation, embedded electronics, industrial machinery, and product/founder execution.',
    type: 'website'
  },
  writing: {
    title: 'Writing | Pouya Mansournia',
    description: 'Long-form essays and case studies by Pouya Mansournia on engineering, product, innovation, AI, research, and building real systems.',
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

const articleByRoute = Object.fromEntries(
  writingArticles.map((article) => [article.id, article])
);

function absoluteImage(fileName) {
  return fileName
    ? `${SITE_URL}/portfolio-images/${encodeURIComponent(fileName)}`
    : DEFAULT_SOCIAL_IMAGE;
}

export function absoluteUrl(route) {
  return new URL(routeHref(route), SITE_URL).href;
}

export function getSeo(route) {
  const article = articleByRoute[route];
  if (article) {
    return {
      title: `${article.title} | Pouya Mansournia`,
      description: article.deck,
      image: article.heroImage ? `${SITE_URL}${article.heroImage}` : DEFAULT_SOCIAL_IMAGE,
      imageAlt: article.heroImageAlt || article.title,
      robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      type: 'article',
      url: absoluteUrl(route)
    };
  }

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
    imageAlt: route === 'about' || route === 'product-journey'
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
    jobTitle: ['Robotics Systems Architect', 'Mechatronics Engineer', 'AI Researcher', 'Founder & Product Leader'],
    knowsAbout: [
      'Robotics systems architecture',
      'Autonomous mobile robots',
      'Warehouse automation',
      'Embedded systems',
      'Precision mechatronics',
      'Mechanical design',
      'Product management',
      'Product development',
      'Innovation management',
      'AI-assisted product development',
      'AI research in multi-robot systems',
      'Founder and startup execution',
      'Industrial automation'
    ],
    sameAs: [
      'https://github.com/Pouya-Mansournia',
      'https://www.linkedin.com/in/pouya-mansournia/',
      'https://adplist.org/mentors/pmansourniagmailcom-mr7v8q8t',
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
        name: 'Pouya Mansournia, Robotics Systems Architect',
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
  } else if (articleByRoute[route]) {
    const article = articleByRoute[route];
    const articleId = `${absoluteUrl(route)}#article`;
    graph.push(
      {
        ...webPage(route, seo.title, seo.description),
        mainEntity: { '@id': articleId },
        breadcrumb: { '@id': `${absoluteUrl(route)}#breadcrumb` }
      },
      {
        '@type': 'Article',
        '@id': articleId,
        url: absoluteUrl(route),
        headline: article.title,
        description: article.deck,
        image: seo.image,
        datePublished: article.publishDate,
        dateModified: article.publishDate,
        author: { '@id': PERSON_ID },
        publisher: { '@id': PERSON_ID },
        keywords: article.keywords,
        isPartOf: { '@id': `${absoluteUrl('writing')}#webpage` }
      },
      breadcrumb(route, article.title, 'writing')
    );
  } else if (route === 'case-warehouse-digital-twin') {
    const workId = `${absoluteUrl(route)}#creative-work`;
    graph.push(
      {
        ...webPage(route, seo.title, seo.description),
        mainEntity: { '@id': workId },
        breadcrumb: { '@id': `${absoluteUrl(route)}#breadcrumb` }
      },
      {
        '@type': 'CreativeWork',
        '@id': workId,
        url: absoluteUrl(route),
        name: 'Intelligent Warehouse Digital Twin',
        headline: seo.title,
        description: seo.description,
        image: seo.image,
        creator: { '@id': PERSON_ID },
        keywords: ['Digital Twin', 'FlexSim', 'Robot Orchestration', 'FastAPI', 'ROS 2', 'Warehouse Automation'],
        isPartOf: { '@id': `${absoluteUrl('works')}#webpage` }
      },
      breadcrumb(route, 'From Warehouse Simulation to Robot Orchestration', 'works')
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
