import { useEffect } from 'react';

export const useParallaxAnimations = () => {
  useEffect(() => {
    let rafId: number;
    
    const handleScroll = () => {
      // Cancel previous frame
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      // Schedule new frame
      rafId = requestAnimationFrame(() => {
        const parallaxElements = document.querySelectorAll('.parallax');
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach((element) => {
          const rate = scrolled * -0.3; // Reduced intensity for performance
          // Use transform3d for hardware acceleration
          (element as HTMLElement).style.transform = `translate3d(0, ${rate}px, 0)`;
        });
      });
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive event listener for better performance
    document.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => {
      document.removeEventListener('scroll', throttledScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);
};
