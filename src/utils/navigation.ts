import { useState, useEffect } from 'react';

export type PageRoute = 'home' | 'about' | 'car-wash' | 'oil-change' | 'contact';

export function getRouteFromPath(path: string): PageRoute {
  const normalized = path.replace(/\/+$/, '') || '/';
  if (normalized.includes('/about')) return 'about';
  if (normalized.includes('/car-wash')) return 'car-wash';
  if (normalized.includes('/oil-change')) return 'oil-change';
  if (normalized.includes('/contact')) return 'contact';
  return 'home';
}

export function getPathForRoute(route: PageRoute): string {
  switch (route) {
    case 'about': return '/about/';
    case 'car-wash': return '/car-wash/';
    case 'oil-change': return '/oil-change/';
    case 'contact': return '/contact/';
    default: return '/';
  }
}

export function useRouter() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => {
    return getRouteFromPath(window.location.pathname);
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getRouteFromPath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (route: PageRoute, hash?: string) => {
    const path = getPathForRoute(route);
    const fullPath = hash ? `${path}#${hash}` : path;
    window.history.pushState({}, '', fullPath);
    setCurrentRoute(route);
    
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return { currentRoute, navigate };
}
