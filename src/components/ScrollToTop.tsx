import { useEffect, useRef } from 'react';
import React from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  const prevPathnameRef = useRef<string>('');
  const homepageScrollPosition = useRef<number>(0);

  useEffect(() => {
    const prevPathname = prevPathnameRef.current;
    
    // Save homepage scroll position when leaving homepage
    if (prevPathname === '/' && pathname.startsWith('/project/')) {
      homepageScrollPosition.current = window.scrollY;
    }
    
    // Scroll to top only when navigating from homepage to project
    if (prevPathname === '/' && pathname.startsWith('/project/')) {
      window.scrollTo(0, 0);
    }
    
    // Restore homepage scroll position when returning from project to homepage
    if (prevPathname.startsWith('/project/') && pathname === '/') {
      // Use setTimeout to ensure the page has rendered
      setTimeout(() => {
        window.scrollTo(0, homepageScrollPosition.current);
      }, 0);
    }
    
    // Update previous pathname
    prevPathnameRef.current = pathname;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
