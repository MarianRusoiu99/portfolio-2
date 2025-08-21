import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import InteractiveText, { InteractiveTextRef } from '../InteractiveText';
import { personalTraits } from '../../data';

interface AboutSectionProps {
  interactiveTextRefs: React.MutableRefObject<(InteractiveTextRef | null)[]>;
}

const AboutSection: React.FC<AboutSectionProps> = ({ interactiveTextRefs }) => {
  const { theme } = useTheme();

  return (
    <section className="py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <div>
            <motion.h2 className="text-4xl md:text-6xl font-bold mb-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <InteractiveText text="About" ref={(el) => { interactiveTextRefs.current[5] = el; }} />
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: theme.colors.textSecondary }}>
              <InteractiveText text="I'm Valentin Rusoiu, a creative developer focused on building reliable, high-performance web apps. My experience spans WordPress, Next.js, React Native, and AI-driven tools. I also design self-hosted infrastructure with Docker, GitHub Actions, and monitoring stacks to keep projects scalable and resilient." ref={(el) => { interactiveTextRefs.current[6] = el; }} />
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {personalTraits.map((trait, index) => (
                <motion.span key={index} className="px-4 py-2 rounded-full text-sm" style={{ backgroundColor: theme.colors.surface, color: theme.colors.text }} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }}>
                  {trait}
                </motion.span>
              ))}
            </div>
            <motion.a href="mailto:contact@valentinrusoiu.dev" className="group flex items-center gap-3 text-lg font-medium transition-colors no-spawn" style={{ color: theme.colors.text }} whileHover={{ x: 10 }}>
              <span>Let's work together</span>
              <ArrowUpRight className="group-hover:rotate-45 transition-transform" size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
