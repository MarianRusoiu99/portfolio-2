import { useEffect } from 'react';

export const useParallaxAnimations = () => {
  useEffect(() => {
    // Simple scroll-based animations without GSAP
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax');
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach((element) => {
        const rate = scrolled * -0.5;
        (element as HTMLElement).style.transform = `translateY(${rate}px)`;
      });
    };

    // Use passive event listener for better performance
    document.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
};
