import posthog from 'posthog-js';

const POSTHOG_TOKEN = import.meta.env.VITE_POSTHOG_TOKEN;
const POSTHOG_HOST =
  import.meta.env.VITE_POSTHOG_HOST || 'https://eu.i.posthog.com';

export function initializeAnalytics() {
  if (typeof window === 'undefined' || !POSTHOG_TOKEN) {
    return;
  }

  posthog.init(POSTHOG_TOKEN, {
    api_host: POSTHOG_HOST,
    capture_pageview: false,
    capture_pageleave: true,

    session_recording: {
      maskAllInputs: true,
      maskInputOptions: {
        password: true,
        email: true,
        tel: true,
      },
    },

    loaded: (client) => {
      if (import.meta.env.DEV) {
        client.debug();
      }
    },
  });
}

export function capturePageView(route) {
  if (typeof window === 'undefined' || !POSTHOG_TOKEN) {
    return;
  }

  posthog.capture('$pageview', {
    route,
    $current_url: window.location.href,
    path: window.location.pathname,
    hash: window.location.hash,
  });
}

export function captureEvent(eventName, properties = {}) {
  if (typeof window === 'undefined' || !POSTHOG_TOKEN) {
    return;
  }

  posthog.capture(eventName, properties);
}

export function initializeClickTracking() {
  if (typeof window === 'undefined' || !POSTHOG_TOKEN) {
    return;
  }

  document.addEventListener('click', (event) => {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const link = target.closest('a');

    if (!link) {
      return;
    }

    const href = link.getAttribute('href') || '';
    const linkText = link.textContent?.trim() || '';
    const currentRoute = window.location.pathname;

    if (href.startsWith('mailto:')) {
      captureEvent('email_clicked', {
        email: href.replace('mailto:', '').split('?')[0],
        link_text: linkText,
        current_route: currentRoute,
      });

      return;
    }

    if (href.includes('github.com')) {
      captureEvent('github_clicked', {
        destination_url: href,
        link_text: linkText,
        current_route: currentRoute,
      });

      return;
    }

    if (href.includes('linkedin.com')) {
      captureEvent('linkedin_clicked', {
        destination_url: href,
        link_text: linkText,
        current_route: currentRoute,
      });

      return;
    }

    const isDownload =
      link.hasAttribute('download') ||
      /\.(pdf|doc|docx|zip|epub)(\?.*)?$/i.test(href);

    if (isDownload) {
      captureEvent('file_downloaded', {
        destination_url: href,
        file_name: href.split('/').pop()?.split('?')[0] || '',
        link_text: linkText,
        current_route: currentRoute,
      });

      return;
    }

    const isExternalLink =
      href.startsWith('http') &&
      new URL(href, window.location.origin).hostname !==
        window.location.hostname;

    if (isExternalLink) {
      captureEvent('external_link_clicked', {
        destination_url: href,
        link_text: linkText,
        current_route: currentRoute,
      });
    }
  });
}