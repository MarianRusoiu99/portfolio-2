import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { ProjectData } from '../../data/projectsData';

interface ProjectOverviewProps {
  project: ProjectData;
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({ project }) => {
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
          className="space-y-16"
        >
          {/* Overview */}
          <div>
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: theme.colors.text }}
            >
              Overview
            </h2>
            <p 
              className="text-lg leading-relaxed"
              style={{ color: theme.colors.textSecondary }}
            >
              {project.overview}
            </p>
          </div>

          {/* Challenge */}
          <div>
            <h3 
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ color: theme.colors.text }}
            >
              The Challenge
            </h3>
            <p 
              className="text-lg leading-relaxed"
              style={{ color: theme.colors.textSecondary }}
            >
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div>
            <h3 
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ color: theme.colors.text }}
            >
              The Solution
            </h3>
            <p 
              className="text-lg leading-relaxed"
              style={{ color: theme.colors.textSecondary }}
            >
              {project.solution}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectOverview;
