import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import InteractiveText, { InteractiveTextRef } from '../InteractiveText';

interface ContactSectionProps {
  interactiveTextRefs: React.MutableRefObject<(InteractiveTextRef | null)[]>;
}

const ContactSection: React.FC<ContactSectionProps> = ({ interactiveTextRefs }) => {
  const { theme } = useTheme();

  return (
    <section className="py-12 md:py-18 lg:py-24 px-6 md:px-8" style={{ backgroundColor: theme.colors.surface, color: theme.colors.text }}>
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 className="text-6xl md:text-8xl font-bold mb-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <InteractiveText text="Let's Create" ref={(el) => { interactiveTextRefs.current[10] = el; }} />
        </motion.h2>
        <motion.div className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto" style={{ color: theme.colors.textSecondary }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
          <InteractiveText text="Ready to build something amazing together?" className="block" ref={(el) => { interactiveTextRefs.current[11] = el; }} />
          <InteractiveText text="Let's collaborate on your next project." className="block" ref={(el) => { interactiveTextRefs.current[12] = el; }} />
        </motion.div>
        <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
          <motion.a href="mailto:contact@valentinanicza.click" className="px-8 py-4 rounded-full font-medium transition-colors flex items-center gap-3 no-spawn" style={{ backgroundColor: theme.colors.background, color: theme.colors.text }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Mail size={20} />
            <span>contact@valentinanicza.click</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
