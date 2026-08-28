export const ROUTE_PATHS = {
  home: '/',
  about: '/about/',
  'product-journey': '/product-journey/',
  systems: '/systems/',
  publications: '/research/',
  blog: '/articles/',
  works: '/work/',
  writing: '/writing/',
  'writing-from-pain-to-product': '/writing/from-pain-to-product/',
  'open-source': '/open-source/',
  achievements: '/achievements/',
  contact: '/contact/',
  'blog-sorter': '/articles/high-speed-wheel-sortation-system/',
  'blog-put-to-light': '/articles/put-to-light-pick-to-light-warehouse-system/',
  'blog-dimension-detection': '/articles/dimension-weight-scanning-point-cloud-detection/',
  'blog-iot': '/articles/industrial-iot-monitoring-platform/',
  'case-warehouse-digital-twin': '/work/intelligent-warehouse-digital-twin/',
  'work-robotics': '/work/robotics-platforms/',
  'work-manipulator': '/work/robotic-manipulators-end-effectors/',
  'work-wheels-robot': '/work/wheeled-mobile-robot-platforms/',
  'work-uav': '/work/uav-systems/',
  'work-precision-positioning': '/work/piezo-fast-steering-mirror/',
  'work-material-handling': '/work/industrial-conveyor-material-handling/',
  'work-electronics-design': '/work/embedded-electronics-pcb-design/',
  'work-machinery': '/work/industrial-machinery-manufacturing/',
  'work-other-projects': '/work/engineering-components-prototypes/'
};

// Legacy URLs that must keep resolving (SEO/inbound links): redirected to their new home.
export const LEGACY_REDIRECTS = {
  '/projects/': 'works',
  '/projects/robotics-platforms/': 'work-robotics',
  '/projects/robotic-manipulators-end-effectors/': 'work-manipulator',
  '/projects/wheeled-mobile-robot-platforms/': 'work-wheels-robot',
  '/projects/uav-systems/': 'work-uav',
  '/projects/piezo-fast-steering-mirror/': 'work-precision-positioning',
  '/projects/industrial-conveyor-material-handling/': 'work-material-handling',
  '/projects/embedded-electronics-pcb-design/': 'work-electronics-design',
  '/projects/industrial-machinery-manufacturing/': 'work-machinery',
  '/projects/engineering-components-prototypes/': 'work-other-projects'
};

const PATH_ROUTES = Object.fromEntries(
  Object.entries(ROUTE_PATHS).map(([route, path]) => [path, route])
);

export function routeHref(route) {
  return ROUTE_PATHS[route] || '/';
}

function normalizePath(pathname) {
  const path = pathname || '/';
  if (path === '/') return path;
  return `/${path.replace(/^\/+|\/+$/g, '')}/`;
}

export function routeFromPath(pathname) {
  return PATH_ROUTES[normalizePath(pathname)] || null;
}

export function legacyRedirectRoute(pathname) {
  return LEGACY_REDIRECTS[normalizePath(pathname)] || null;
}

export function routeFromBrowserLocation() {
  if (typeof window === 'undefined') return 'home';

  const legacyRoute = window.location.hash.replace(/^#\/?/, '');
  if (legacyRoute && ROUTE_PATHS[legacyRoute]) {
    window.history.replaceState({}, '', routeHref(legacyRoute));
    return legacyRoute;
  }

  const directRoute = routeFromPath(window.location.pathname);
  if (directRoute) return directRoute;

  const redirectRoute = legacyRedirectRoute(window.location.pathname);
  if (redirectRoute) {
    window.history.replaceState({}, '', routeHref(redirectRoute));
    return redirectRoute;
  }

  return 'not-found';
}

export function navigateTo(route, event) {
  if (event?.defaultPrevented || event?.button > 0 || event?.metaKey || event?.ctrlKey || event?.shiftKey || event?.altKey) {
    return;
  }

  event?.preventDefault();
  const href = routeHref(route);
  if (typeof window !== 'undefined' && window.location.pathname !== href) {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
}
