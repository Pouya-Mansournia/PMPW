import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const ssrEntry = path.join(root, '.ssr', 'entry-server.js');
const { getRoutes, renderRoute } = await import(pathToFileURL(ssrEntry).href);
const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');
const localOnlyPublicArtifacts = [
  'portfolio-images/README.md',
  'resume/README.md',
  'portfolio-images/3D Point Cloud Visualization.png',
  'portfolio-images/Integrated Put-to-Light Solution.jpg',
  'portfolio-images/MRL Middle-Size Platform.png'
];

const escapeAttribute = (value) => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;');
const escapeJson = (value) => JSON.stringify(value).replaceAll('<', '\\u003c');

function upsertMeta(html, selector, marker, content) {
  const expression = new RegExp(`<meta\\s+${selector}=["']${marker}["'][^>]*>`, 'i');
  const attribute = selector === 'property' ? 'property' : 'name';
  const tag = `<meta ${attribute}="${marker}" content="${escapeAttribute(content)}">`;
  return expression.test(html) ? html.replace(expression, tag) : html.replace('</head>', `  ${tag}\n  </head>`);
}

function buildDocument(route) {
  const { html: appHtml, seo, structuredData } = renderRoute(route);
  let document = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  document = document.replace(/<title>.*?<\/title>/is, `<title>${escapeAttribute(seo.title)}</title>`);
  document = upsertMeta(document, 'name', 'description', seo.description);
  document = upsertMeta(document, 'name', 'robots', seo.robots);
  document = upsertMeta(document, 'name', 'googlebot', seo.robots);
  document = upsertMeta(document, 'property', 'og:title', seo.title);
  document = upsertMeta(document, 'property', 'og:description', seo.description);
  document = upsertMeta(document, 'property', 'og:url', seo.url);
  document = upsertMeta(document, 'property', 'og:type', seo.type);
  document = upsertMeta(document, 'property', 'og:image', seo.image);
  document = upsertMeta(document, 'property', 'og:image:alt', seo.imageAlt);
  document = upsertMeta(document, 'name', 'twitter:title', seo.title);
  document = upsertMeta(document, 'name', 'twitter:description', seo.description);
  document = upsertMeta(document, 'name', 'twitter:image', seo.image);
  document = upsertMeta(document, 'name', 'twitter:image:alt', seo.imageAlt);
  document = document.replace(/<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${escapeAttribute(seo.url)}">`);
  document = document.replace(
    /<script id=["']route-schema-ld["'] type=["']application\/ld\+json["']>.*?<\/script>/is,
    `<script id="route-schema-ld" type="application/ld+json">${escapeJson(structuredData)}</script>`
  );
  return document;
}

for (const route of getRoutes()) {
  const { path: routePath } = renderRoute(route);
  const output = routePath === '/'
    ? path.join(distDir, 'index.html')
    : path.join(distDir, routePath.slice(1), 'index.html');
  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.writeFile(output, buildDocument(route), 'utf8');
}

const notFound = buildDocument('home')
  .replace(/<meta\s+name=["']robots["'][^>]*>/i, '<meta name="robots" content="noindex, follow">')
  .replace(/<meta\s+name=["']googlebot["'][^>]*>/i, '<meta name="googlebot" content="noindex, follow">');
await fs.writeFile(path.join(distDir, '404.html'), notFound, 'utf8');
for (const relativePath of localOnlyPublicArtifacts) {
  await fs.rm(path.join(distDir, relativePath), { force: true });
}
await fs.rm(path.join(root, '.ssr'), { recursive: true, force: true });
