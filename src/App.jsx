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
import { applySeo } from './seo.js';
import { routeFromBrowserLocation } from './navigation.js';

const pageRoutes = ['home', 'about', 'publications', 'blog', 'works', 'open-source', 'achievements', 'contact'];

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

  const detailPage = detailRoutes[route];
  const resolvedRoute = detailPage || pageRoutes.includes(route) ? route : 'not-found';

  useEffect(() => {
    applySeo(resolvedRoute);
  }, [resolvedRoute]);

  return (
    <SiteLayout activeRoute={resolvedRoute === 'not-found' ? 'home' : resolvedRoute}>
      {route === 'home' && <HomePage />}
      {route === 'about' && <AboutPage />}
      {route === 'publications' && <PublicationsPage />}
      {route === 'blog' && <BlogPage />}
      {route === 'works' && <WorksPage />}
      {route === 'open-source' && <OpenSourcePage />}
      {route === 'achievements' && <AchievementsPage />}
      {route === 'contact' && <ContactPage />}
      {detailPage && <DetailPage item={detailPage.item} parentPath={detailPage.parentPath} />}
      {resolvedRoute === 'not-found' && <HomePage />}
    </SiteLayout>
  );
}
