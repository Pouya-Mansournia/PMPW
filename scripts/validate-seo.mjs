import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const errors = [];
const localOnlyPublicArtifacts = [
  'portfolio-images/README.md',
  'resume/README.md',
  'portfolio-images/3D Point Cloud Visualization.png',
  'portfolio-images/Integrated Put-to-Light Solution.jpg',
  'portfolio-images/MRL Middle-Size Platform.png'
];

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(fullPath));
    else files.push(fullPath);
  }
  return files;
}

const htmlFiles = (await walk(dist)).filter((file) => file.endsWith('.html'));
const seenTitles = new Map();
const seenCanonicals = new Map();
for (const file of htmlFiles) {
  const html = await fs.readFile(file, 'utf8');
  for (const required of ['<title>', 'name="description"', 'rel="canonical"', 'property="og:title"', 'name="twitter:card"']) {
    if (!html.includes(required)) errors.push(`${path.relative(root, file)}: missing ${required}`);
  }
  const schemaMatch = html.match(/<script id="route-schema-ld" type="application\/ld\+json">(.*?)<\/script>/s);
  if (!schemaMatch) errors.push(`${path.relative(root, file)}: missing route JSON-LD`);
  else {
    try { JSON.parse(schemaMatch[1]); } catch (error) { errors.push(`${path.relative(root, file)}: invalid JSON-LD (${error.message})`); }
  }

  const h1Count = (html.match(/<h1\b/g) || []).length;
  if (h1Count !== 1) errors.push(`${path.relative(root, file)}: expected exactly one h1, found ${h1Count}`);
  if (!html.includes('<main id="main-content">')) errors.push(`${path.relative(root, file)}: missing main landmark`);

  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  const canonical = html.match(/<link\s+rel="canonical"\s+href="(.*?)">/i)?.[1];
  if (path.basename(file) !== '404.html') {
    if (title && seenTitles.has(title)) errors.push(`${path.relative(root, file)}: duplicate title with ${seenTitles.get(title)}`);
    if (canonical && seenCanonicals.has(canonical)) errors.push(`${path.relative(root, file)}: duplicate canonical with ${seenCanonicals.get(canonical)}`);
    if (title) seenTitles.set(title, path.relative(root, file));
    if (canonical) seenCanonicals.set(canonical, path.relative(root, file));
  } else if (!html.includes('content="noindex, follow"')) {
    errors.push('dist/404.html: missing noindex directive');
  }
}

const robots = await fs.readFile(path.join(dist, 'robots.txt'), 'utf8');
if (!robots.includes('Sitemap: https://mansournia.info/sitemap.xml')) errors.push('robots.txt: missing sitemap reference');

const sitemap = await fs.readFile(path.join(dist, 'sitemap.xml'), 'utf8');
if (sitemap.includes('#/')) errors.push('sitemap.xml: fragment URL found');
for (const loc of sitemap.matchAll(/<loc>(.*?)<\/loc>/g)) {
  if (!loc[1].startsWith('https://mansournia.info/')) errors.push(`sitemap.xml: non-canonical URL ${loc[1]}`);
}

const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
for (const canonical of seenCanonicals.keys()) {
  if (!sitemapUrls.includes(canonical)) errors.push(`sitemap.xml: missing canonical ${canonical}`);
}
if (sitemapUrls.length !== seenCanonicals.size) {
  errors.push(`sitemap.xml: expected ${seenCanonicals.size} canonical URLs, found ${sitemapUrls.length}`);
}

for (const relativePath of localOnlyPublicArtifacts) {
  try {
    await fs.access(path.join(dist, relativePath));
    errors.push(`local-only artifact was copied to dist: ${relativePath}`);
  } catch {
    // Expected: local-only public-folder files must not be deployed.
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`SEO validation passed for ${htmlFiles.length} HTML documents.`);
