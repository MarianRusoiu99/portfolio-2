import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import InteractiveText, { InteractiveTextRef } from '../InteractiveText';
import { skills } from '../../data';

interface SkillsSectionProps {
  interactiveTextRefs: React.MutableRefObject<(InteractiveTextRef | null)[]>;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ interactiveTextRefs }) => {
  const { theme } = useTheme();

  return (
    <section className="py-32 px-6 md:px-8" style={{ backgroundColor: theme.colors.surface }}>
      <div className="max-w-7xl mx-auto">
        <motion.h2 className="text-4xl md:text-6xl font-bold mb-16 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <InteractiveText text="Expertise" ref={(el) => { interactiveTextRefs.current[7] = el; }} />
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((skill, index) => (
            <motion.div key={index} className="p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow" style={{ backgroundColor: theme.colors.background, border: `1px solid ${theme.colors.border}` }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -5 }}>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-semibold" style={{ color: theme.colors.text }}>{skill.category}</h3>
                <span className="text-sm px-3 py-1 rounded-full" style={{ backgroundColor: theme.colors.surface, color: theme.colors.textSecondary }}>{skill.experience}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <motion.span key={techIndex} className="px-3 py-1 text-sm rounded-md" style={{ backgroundColor: theme.colors.primary, color: theme.colors.background }} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: techIndex * 0.05 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }}>
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
