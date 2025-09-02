import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import InteractiveText, { InteractiveTextRef } from '../InteractiveText';
import { projectsData } from '../../data/projectsData';

interface ProjectsSectionProps {
  interactiveTextRefs: React.MutableRefObject<(InteractiveTextRef | null)[]>;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ interactiveTextRefs }) => {
  const { theme } = useTheme();

  return (
    <section className="py-8 md:py-16 lg:py-24 px-6 md:px-8 " style={{ backgroundColor: theme.colors.surface }}>
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-8 md:mb-12 lg:mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <InteractiveText text="Selected Projects" ref={(el) => { interactiveTextRefs.current[8] = el; }} />
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: theme.colors.textSecondary }}>
            <InteractiveText text="A collection of recent work spanning AI applications, enterprise tools, and infrastructure solutions." ref={(el) => { interactiveTextRefs.current[9] = el; }} />
          </p>
        </motion.div>
        <div className="space-y-6 sm:space-y-8">
          {Object.entries(projectsData).map(([projectId, project]) => (
            <motion.div key={projectId} className="group rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300" style={{ border: `1px solid ${theme.colors.border}`, backgroundColor: theme.colors.background }} initial={{ opacity: 0.8, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} viewport={{ once: true }} >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  {/* Title on its own row for mobile */}
                  <div className="mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold group-hover:opacity-70 transition-opacity" style={{ color: theme.colors.text }}>
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Tags and buttons that wrap on mobile */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                    <span className="text-xs px-3 py-1 rounded-full whitespace-nowrap" style={{ backgroundColor: theme.colors.surface, color: theme.colors.textSecondary }}>
                      {project.type}
                    </span>
                    {project.website && (
                      <motion.a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm px-2 sm:px-3  rounded-full flex items-center gap-1 sm:gap-2 no-spawn bg-green-500 dark:bg-green-600 text-white shadow-lg whitespace-nowrap"
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
                        <span className="hidden sm:inline">Live Site</span>
                        <span className="sm:hidden">Live</span>
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-2 sm:px-3 py-1 rounded-full flex items-center gap-1 no-spawn bg-gray-100 dark:bg-gray-900/20 text-gray-700 dark:text-gray-300 whitespace-nowrap"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={10} className="sm:w-3 sm:h-3" />
                        <span className="hidden sm:inline">GitHub</span>
                      </motion.a>
                    )}
                  </div>
                  
                  <p className="mb-4 max-w-2xl text-sm sm:text-base" style={{ color: theme.colors.textSecondary }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-md" style={{ border: `1px solid ${theme.colors.border}`, color: theme.colors.textSecondary }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:ml-6 flex-shrink-0">
                  <Link to={`/project/${projectId}`} className="no-spawn">
                    <motion.div
                      className="inline-flex items-center gap-2 transition-colors border rounded-lg px-3 py-2 w-full sm:w-auto justify-center sm:justify-start"
                      style={{ color: theme.colors.textSecondary, borderColor: theme.colors.border }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm">View Project</span>
                      <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
