export const ROUTE_PATHS = {
  home: '/',
  about: '/about/',
  publications: '/research/',
  blog: '/articles/',
  works: '/projects/',
  'open-source': '/open-source/',
  achievements: '/achievements/',
  contact: '/contact/',
  'blog-sorter': '/articles/high-speed-wheel-sortation-system/',
  'blog-put-to-light': '/articles/put-to-light-pick-to-light-warehouse-system/',
  'blog-dimension-detection': '/articles/dimension-weight-scanning-point-cloud-detection/',
  'blog-iot': '/articles/industrial-iot-monitoring-platform/',
  'work-robotics': '/projects/robotics-platforms/',
  'work-manipulator': '/projects/robotic-manipulators-end-effectors/',
  'work-wheels-robot': '/projects/wheeled-mobile-robot-platforms/',
  'work-uav': '/projects/uav-systems/',
  'work-precision-positioning': '/projects/piezo-fast-steering-mirror/',
  'work-material-handling': '/projects/industrial-conveyor-material-handling/',
  'work-electronics-design': '/projects/embedded-electronics-pcb-design/',
  'work-machinery': '/projects/industrial-machinery-manufacturing/',
  'work-other-projects': '/projects/engineering-components-prototypes/'
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

export function routeFromBrowserLocation() {
  if (typeof window === 'undefined') return 'home';

  const legacyRoute = window.location.hash.replace(/^#\/?/, '');
  if (legacyRoute && ROUTE_PATHS[legacyRoute]) {
    window.history.replaceState({}, '', routeHref(legacyRoute));
    return legacyRoute;
  }

  return routeFromPath(window.location.pathname) || 'not-found';
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
