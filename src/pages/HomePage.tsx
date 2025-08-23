import { useRef, lazy, Suspense } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { InteractiveTextRef } from '../components/InteractiveText';
import Layout from '../components/Layout';
import LoadingSkeleton from '../components/LoadingSkeleton';

// Lazy load heavy components
const ImageSpawner = lazy(() => import('../components/ImageSpawner'));
const StickyResetButton = lazy(() => import('../components/StickyResetButton'));

// Lazy load section components
const HeroSection = lazy(() => import('../components/sections/HeroSection'));
const AboutSection = lazy(() => import('../components/sections/AboutSection'));
const SkillsSection = lazy(() => import('../components/sections/SkillsSection'));
const ProjectsSection = lazy(() => import('../components/sections/ProjectsSection'));
const ContactSection = lazy(() => import('../components/sections/ContactSection'));
const Footer = lazy(() => import('../components/sections/Footer'));

// Custom Hooks
import { useImageSpawner, useParallaxAnimations } from '../hooks';

function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const interactiveTextRefs = useRef<(InteractiveTextRef | null)[]>([]);
  
  // Custom hooks
  const { spawnedImages, spawnImage, resetImages } = useImageSpawner();
  useParallaxAnimations();

  const resetAllText = () => {
    interactiveTextRefs.current.forEach(ref => {
      if (ref) {
        ref.reset();
      }
    });
  };

  return (
    <Layout>
      <div ref={containerRef} className="min-h-screen overflow-x-hidden">
        <div 
          className="relative w-full min-h-screen"
          onClick={spawnImage}
        >
          <div className="w-full">
            <Suspense fallback={<LoadingSkeleton height="h-screen" />}>
              <HeroSection y={y} interactiveTextRefs={interactiveTextRefs} />
            </Suspense>
            
            <Suspense fallback={<LoadingSkeleton height="h-96" />}>
              <AboutSection interactiveTextRefs={interactiveTextRefs} />
            </Suspense>
            
            <Suspense fallback={<LoadingSkeleton height="h-64" />}>
              <SkillsSection interactiveTextRefs={interactiveTextRefs} />
            </Suspense>
            
            <Suspense fallback={<LoadingSkeleton height="h-96" />}>
              <ProjectsSection interactiveTextRefs={interactiveTextRefs} />
            </Suspense>
            
            <Suspense fallback={<LoadingSkeleton height="h-64" />}>
              <ContactSection interactiveTextRefs={interactiveTextRefs} />
            </Suspense>
            
            <Suspense fallback={<LoadingSkeleton height="h-16" />}>
              <Footer />
            </Suspense>
          </div>

          <Suspense fallback={null}>
            <ImageSpawner images={spawnedImages} />
          </Suspense>

          <Suspense fallback={null}>
            <StickyResetButton
              imageCount={spawnedImages.length}
              onReset={resetImages}
              onResetText={resetAllText}
            />
          </Suspense>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
