import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import { getIndexableRoutes, getSeo, getStructuredData } from './seo.js';
import { routeHref } from './navigation.js';

export function renderRoute(route) {
  return {
    html: renderToString(<App initialRoute={route} />),
    path: routeHref(route),
    seo: getSeo(route),
    structuredData: getStructuredData(route)
  };
}

export function getRoutes() {
  return getIndexableRoutes();
}
