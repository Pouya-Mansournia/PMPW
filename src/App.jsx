import { useEffect, useMemo, useState } from 'react';
import SiteLayout from './components/SiteLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProductJourneyPage from './pages/ProductJourneyPage.jsx';
import SystemsPage from './pages/SystemsPage.jsx';
import WarehouseDigitalTwinCaseStudy from './pages/WarehouseDigitalTwinCaseStudy.jsx';
import PublicationsPage from './pages/PublicationsPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import WorksPage from './pages/WorksPage.jsx';
import OpenSourcePage from './pages/OpenSourcePage.jsx';
import AchievementsPage from './pages/AchievementsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import DetailPage from './pages/DetailPage.jsx';
import WritingPage from './pages/WritingPage.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import { blogPosts, works } from './data.js';
import { writingArticles } from './data/writing.js';
import { applySeo } from './seo.js';
import { routeFromBrowserLocation } from './navigation.js';
import { capturePageView } from './analytics.js';

const pageRoutes = ['home', 'about', 'product-journey', 'systems', 'case-warehouse-digital-twin', 'publications', 'blog', 'works', 'writing', 'open-source', 'achievements', 'contact'];

export default function App({ initialRoute }) {
  const [route, setRoute] = useState(() => initialRoute || routeFromBrowserLocation());

  useEffect(() => {
    const syncRoute = () => {
      setRoute(routeFromBrowserLocation());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', syncRoute);
    window.addEventListener('hashchange', syncRoute);
    return () => {
      window.removeEventListener('popstate', syncRoute);
      window.removeEventListener('hashchange', syncRoute);
    };
  }, []);

  const detailRoutes = useMemo(() => Object.fromEntries([
    ...blogPosts.map((item) => [item.id, { item, parentPath: 'blog' }]),
    ...works.map((item) => [item.id, { item, parentPath: 'works' }])
  ]), []);

  const articleRoutes = useMemo(() => Object.fromEntries(
    writingArticles.map((article) => [article.id, article])
  ), []);

  const detailPage = detailRoutes[route];
  const articlePage = articleRoutes[route];
  const resolvedRoute =
    detailPage || articlePage || pageRoutes.includes(route) ? route : 'not-found';

  useEffect(() => {
    capturePageView(resolvedRoute);
  }, [resolvedRoute]);

  useEffect(() => {
    applySeo(resolvedRoute);
  }, [resolvedRoute]);

  return (
    <SiteLayout activeRoute={resolvedRoute === 'not-found' ? 'home' : resolvedRoute}>
      {route === 'home' && <HomePage />}
      {route === 'about' && <AboutPage />}
      {route === 'product-journey' && <ProductJourneyPage />}
      {route === 'systems' && <SystemsPage />}
      {route === 'case-warehouse-digital-twin' && <WarehouseDigitalTwinCaseStudy />}
      {route === 'publications' && <PublicationsPage />}
      {route === 'blog' && <BlogPage />}
      {route === 'works' && <WorksPage />}
      {route === 'writing' && <WritingPage />}
      {route === 'open-source' && <OpenSourcePage />}
      {route === 'achievements' && <AchievementsPage />}
      {route === 'contact' && <ContactPage />}
      {detailPage && <DetailPage item={detailPage.item} parentPath={detailPage.parentPath} />}
      {articlePage && <ArticlePage article={articlePage} />}
      {resolvedRoute === 'not-found' && <HomePage />}
    </SiteLayout>
  );
}
