import { useEffect } from 'react';
import { gsap } from 'gsap';

export const useParallaxAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin();
    
    gsap.utils.toArray('.parallax').forEach((element: unknown) => {
      gsap.fromTo(element as Element, 
        { y: 0 }, 
        {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: element as Element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    });
  }, []);
};
