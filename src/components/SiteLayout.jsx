import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, professionalLinks } from '../data.js';
import { navigateTo, routeHref } from '../navigation.js';

const footerLinks = professionalLinks.filter((link) => ['LinkedIn', 'ADPList'].includes(link.label));

export default function SiteLayout({ children, activeRoute = 'home' }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const scrollY = window.scrollY;
    const { position, top, left, right, width, overflow } = document.body.style;
    const setMobileViewportHeight = () => {
      const viewportHeight = window.visualViewport?.height || window.innerHeight;
      document.documentElement.style.setProperty('--mobile-vh', `${viewportHeight}px`);
    };

    setMobileViewportHeight();
    document.body.classList.add('mobile-menu-open');
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    window.visualViewport?.addEventListener('resize', setMobileViewportHeight);
    window.addEventListener('resize', setMobileViewportHeight);

    return () => {
      window.visualViewport?.removeEventListener('resize', setMobileViewportHeight);
      window.removeEventListener('resize', setMobileViewportHeight);
      document.documentElement.style.removeProperty('--mobile-vh');
      document.body.classList.remove('mobile-menu-open');
      document.body.style.position = position;
      document.body.style.top = top;
      document.body.style.left = left;
      document.body.style.right = right;
      document.body.style.width = width;
      document.body.style.overflow = overflow;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  const handleNav = (path, event) => {
    navigateTo(path, event);
    setOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (path) => {
    setActiveDropdown((current) => (current === path ? null : path));
  };

  const isRouteInGroup = (item) => {
    if (activeRoute === item.path || item.children?.some((child) => child.path === activeRoute)) {
      return true;
    }

    if (item.path === 'works' && activeRoute.startsWith('work-')) {
      return true;
    }

    if (item.path === 'publications' && activeRoute.startsWith('blog-')) {
      return true;
    }

    return false;
  };

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="brand" href={routeHref('home')} onClick={(event) => handleNav('home', event)} aria-label="Pouya Mansournia — home">
          <span className="brand-text">
            <strong>Pouya Mansournia</strong>
            <small>Robotics | Automation | Precision Motion</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => {
            const hasChildren = item.children?.length > 0;
            const isOpen = activeDropdown === item.path;
            const isActive = isRouteInGroup(item);

            return (
              <div className={`nav-group ${isOpen ? 'open' : ''}`} key={item.path}>
                <a
                  href={routeHref(item.path)}
                  className={isActive ? 'is-active' : ''}
                  onClick={(event) => {
                    if (hasChildren) {
                      event.preventDefault();
                      toggleDropdown(item.path);
                    } else {
                      handleNav(item.path, event);
                    }
                  }}
                  aria-expanded={hasChildren ? isOpen : undefined}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>

                {hasChildren && (
                  <div className={`nav-dropdown ${isOpen ? 'is-open' : ''}`}>
                    <a className="dropdown-parent" href={routeHref(item.path)} onClick={(event) => handleNav(item.path, event)}>
                      {item.allLabel || item.label}
                    </a>
                    {item.children.map((child) => (
                      <a
                        href={routeHref(child.path)}
                        className={activeRoute === child.path ? 'is-active' : ''}
                        key={child.path}
                        onClick={(event) => handleNav(child.path, event)}
                        aria-current={activeRoute === child.path ? 'page' : undefined}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <button
          className="menu-button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {open && (
        <nav id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation">
          {navItems.map((item) => {
            const isActive = isRouteInGroup(item);

            return (
              <div key={item.path}>
                <a className={isActive ? 'is-active' : ''} href={routeHref(item.path)} onClick={(event) => handleNav(item.path, event)} aria-current={isActive ? 'page' : undefined}>
                  {item.label}
                </a>
                {item.children?.map((child) => (
                  <a
                    href={routeHref(child.path)}
                    className={`mobile-sub ${activeRoute === child.path ? 'is-active' : ''}`}
                    key={child.path}
                    onClick={(event) => handleNav(child.path, event)}
                    aria-current={activeRoute === child.path ? 'page' : undefined}
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            );
          })}
        </nav>
      )}

      <main id="main-content">{children}</main>

      <footer className="site-footer">
        <div className="footer-copy">
          <strong>Pouya Mansournia</strong>
          <span>Robotics Systems Architect — autonomous robots, warehouse automation, embedded electronics and precision motion systems.</span>
        </div>
        <nav className="footer-socials" aria-label="Professional links">
          {footerLinks.map(({ label, href, initials }) => (
            <a href={href} key={label} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
              <span className="social-initials">{initials}</span>
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <small className="footer-updated">Last updated 2026</small>
      </footer>
    </div>
  );
}
