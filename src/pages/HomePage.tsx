import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { InteractiveTextRef } from '../components/InteractiveText';
import ImageSpawner from '../components/ImageSpawner';
import BlobCursor from '../components/BlobCursor';
import StickyResetButton from '../components/StickyResetButton';
import Layout from '../components/Layout';

// Section Components
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
  Footer
} from '../components/sections';

// Custom Hooks
import { useImageSpawner, useParallaxAnimations } from '../hooks';

function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const { isDark } = useTheme();
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
            <HeroSection y={y} interactiveTextRefs={interactiveTextRefs} />
            <AboutSection interactiveTextRefs={interactiveTextRefs} />
            <SkillsSection interactiveTextRefs={interactiveTextRefs} />
            <ProjectsSection interactiveTextRefs={interactiveTextRefs} />
            <ContactSection interactiveTextRefs={interactiveTextRefs} />
            <Footer />
          </div>

          <ImageSpawner images={spawnedImages} />

          <StickyResetButton
            imageCount={spawnedImages.length}
            onReset={resetImages}
            onResetText={resetAllText}
          />
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
