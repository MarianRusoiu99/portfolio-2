import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import InteractiveText, { InteractiveTextRef } from '../InteractiveText';

interface HeroSectionProps {
  y: MotionValue<string>;
  interactiveTextRefs: React.MutableRefObject<(InteractiveTextRef | null)[]>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ y, interactiveTextRefs }) => {
  const { theme } = useTheme();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-8 relative">
      <motion.div 
        className="text-center max-w-6xl parallax"
        style={{ y }}
      >
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-8">
          <h1 className="text-6xl md:text-9xl lg:text-[12rem] font-bold leading-none tracking-tight">
            <InteractiveText text="Frontend" className="block" ref={(el) => { interactiveTextRefs.current[0] = el; }} />
            <InteractiveText text="Developer" className="block" ref={(el) => { interactiveTextRefs.current[1] = el; }} />
          </h1>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mb-12">
          <p className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed " style={{ color: theme.colors.textSecondary }}>
            <InteractiveText text="I build fast, modern, and expressive digital products" className="block" ref={(el) => { interactiveTextRefs.current[2] = el; }} />
            <InteractiveText text="— from websites and apps to AI-powered tools" className="block" ref={(el) => { interactiveTextRefs.current[3] = el; }} />
            <InteractiveText text="and self-hosted infrastructure." className="block" ref={(el) => { interactiveTextRefs.current[4] = el; }} />
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex justify-center items-center gap-2 text-sm" style={{ color: theme.colors.textSecondary }}>
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: theme.colors.success }}></div>
          <span>Available for projects</span>
        </motion.div>
      </motion.div>
      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }}>
        <div className="w-px h-20 relative" style={{ backgroundColor: theme.colors.border }}>
          <motion.div className="w-px h-4 absolute top-0" style={{ backgroundColor: theme.colors.text }} animate={{ y: [0, 60, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
