import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { ProjectData } from '../../data/projectsData';

interface ProjectImpactProps {
  project: ProjectData;
}

const ProjectImpact: React.FC<ProjectImpactProps> = ({ project }) => {
  const { theme } = useTheme();

  return (
    <section 
      className="py-16 md:py-32 px-6 md:px-8"
      style={{ backgroundColor: theme.colors.surface }}
    >
      <div className="max-w-6xl mx-auto">
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
            Project Impact
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: theme.colors.textSecondary }}
          >
            Measurable results and outcomes achieved through this project
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {project.impact.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-xl"
              style={{ 
                backgroundColor: theme.colors.background,
                border: `1px solid ${theme.colors.border}` 
              }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: theme.colors.primary + '20' }}
              >
                <TrendingUp 
                  size={24} 
                  style={{ color: theme.colors.primary }} 
                />
              </div>
              <h3 
                className="text-xl font-bold mb-4"
                style={{ color: theme.colors.text }}
              >
                {item.title}
              </h3>
              <p 
                className="leading-relaxed"
                style={{ color: theme.colors.textSecondary }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectImpact;
