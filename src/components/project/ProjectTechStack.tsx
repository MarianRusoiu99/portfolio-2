import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { ProjectData } from '../../data/projectsData';

interface ProjectTechStackProps {
  project: ProjectData;
}

const ProjectTechStack: React.FC<ProjectTechStackProps> = ({ project }) => {
  const { theme } = useTheme();

  return (
    <section 
      className="py-16 md:py-32 px-6 md:px-8"
      style={{ backgroundColor: theme.colors.surface }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: theme.colors.text }}
          >
            Technology Stack
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: theme.colors.textSecondary }}
          >
            Technologies and tools used to bring this project to life
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {project.tech.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-xl text-center transition-all duration-300"
              style={{ 
                backgroundColor: theme.colors.background,
                border: `1px solid ${theme.colors.border}` 
              }}
            >
              <span 
                className="font-medium"
                style={{ color: theme.colors.text }}
              >
                {tech}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTechStack;
