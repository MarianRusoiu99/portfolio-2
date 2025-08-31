import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { ProjectData } from '../../data/projectsData';

interface ProjectFeaturesProps {
  project: ProjectData;
}

const ProjectFeatures: React.FC<ProjectFeaturesProps> = ({ project }) => {
  const { theme } = useTheme();

  return (
    <section 
      className="py-16 md:py-32 px-6 md:px-8"
      style={{ backgroundColor: theme.colors.background }}
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
            Key Features
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: theme.colors.textSecondary }}
          >
            Highlighting the main capabilities and functionalities delivered
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {project.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 rounded-xl"
              style={{ 
                backgroundColor: theme.colors.surface,
                border: `1px solid ${theme.colors.border}` 
              }}
            >
              <div 
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1"
                style={{ backgroundColor: theme.colors.success }}
              >
                <Check size={14} color="white" />
              </div>
              <p 
                className="text-lg"
                style={{ color: theme.colors.text }}
              >
                {feature}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectFeatures;
