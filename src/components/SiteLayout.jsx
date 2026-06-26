import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, professionalLinks } from '../data.js';

function goToPage(path) {
  window.location.hash = `/${path}`;
}

const footerLinks = professionalLinks.filter((link) => link.label === 'LinkedIn');

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

  const handleNav = (path) => {
    goToPage(path);
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
        <button className="brand" onClick={() => handleNav('home')}>
          <span className="brand-text">
            <strong>Pouya Mansournia</strong>
            <small>Robotics | Automation | Precision Motion</small>
          </span>
        </button>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => {
            const hasChildren = item.children?.length > 0;
            const isOpen = activeDropdown === item.path;
            const isActive = isRouteInGroup(item);

            return (
              <div className={`nav-group ${isOpen ? 'open' : ''}`} key={item.path}>
                <button
                  className={isActive ? 'is-active' : ''}
                  onClick={() => hasChildren ? toggleDropdown(item.path) : handleNav(item.path)}
                >
                  {item.label}
                </button>

                {hasChildren && (
                  <div className={`nav-dropdown ${isOpen ? 'is-open' : ''}`}>
                    <button className="dropdown-parent" onClick={() => handleNav(item.path)}>
                      {item.allLabel || item.label}
                    </button>
                    {item.children.map((child) => (
                      <button
                        className={activeRoute === child.path ? 'is-active' : ''}
                        key={child.path}
                        onClick={() => handleNav(child.path)}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <button className="menu-button" onClick={() => setOpen((current) => !current)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {open && (
        <div className="mobile-menu">
          {navItems.map((item) => {
            const isActive = isRouteInGroup(item);

            return (
              <div key={item.path}>
                <button className={isActive ? 'is-active' : ''} onClick={() => handleNav(item.path)}>
                  {item.label}
                </button>
                {item.children?.map((child) => (
                  <button
                    className={`mobile-sub ${activeRoute === child.path ? 'is-active' : ''}`}
                    key={child.path}
                    onClick={() => handleNav(child.path)}
                  >
                    {child.label}
                  </button>
                ))}
              </div>
            );
          })}
        </div>
      )}

      <main>{children}</main>

      <footer className="site-footer">
        <div className="footer-copy">
          <strong>Pouya Mansournia</strong>
          <span>Robotics Systems Architect — autonomous robots, warehouse automation, embedded electronics and precision motion systems.</span>
        </div>
        <nav className="footer-socials" aria-label="Professional links">
          {footerLinks.map(({ label, href, initials }) => (
            <a href={href} key={label} target="_blank" rel="noreferrer" aria-label={label} title={label}>
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
