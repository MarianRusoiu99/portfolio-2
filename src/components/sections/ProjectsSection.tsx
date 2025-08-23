import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import InteractiveText, { InteractiveTextRef } from '../InteractiveText';
import { projects } from '../../data';

interface ProjectsSectionProps {
  interactiveTextRefs: React.MutableRefObject<(InteractiveTextRef | null)[]>;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ interactiveTextRefs }) => {
  const { theme } = useTheme();

  return (
    <section className="py-16 md:py-32 px-6 md:px-8 " style={{ backgroundColor: theme.colors.surface }}>
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <InteractiveText text="Selected Projects" textType="heading" mode="character" ref={(el) => { interactiveTextRefs.current[8] = el; }} />
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: theme.colors.textSecondary }}>
            <InteractiveText text="A collection of recent work spanning AI applications, enterprise tools, and infrastructure solutions." textType="paragraph" mode="word" ref={(el) => { interactiveTextRefs.current[9] = el; }} />
          </p>
        </motion.div>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div key={index} className="group rounded-2xl p-8 hover:shadow-lg transition-all duration-500" style={{ border: `1px solid ${theme.colors.border}`, backgroundColor: theme.colors.background }} initial={{ opacity: 0}} whileInView={{ opacity: 1,}} transition={{ duration: 0.6}} viewport={{ once: true }} whileHover={{ y: -5 }}>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-2xl font-bold group-hover:opacity-70 transition-opacity" style={{ color: theme.colors.text }}>{project.title}</h3>
                    <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: theme.colors.surface, color: theme.colors.textSecondary }}>{project.type}</span>
                    {project.status && (
                      <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: theme.colors.success + '20', color: theme.colors.success }}>
                        {project.status}
                      </span>
                    )}
                  </div>
                  <p className="mb-4 max-w-2xl" style={{ color: theme.colors.textSecondary }}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="text-sm px-3 py-1 rounded-md" style={{ border: `1px solid ${theme.colors.border}`, color: theme.colors.textSecondary }}>{tech}</span>
                    ))}
                  </div>
                </div>
                <Link to={`/project/${project.id}`} className="no-spawn">
                  <motion.div className="flex items-center gap-2 transition-colors" style={{ color: theme.colors.textSecondary }} whileHover={{ x: 5 }}>
                    <span className="text-sm">View Project</span>
                    <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
