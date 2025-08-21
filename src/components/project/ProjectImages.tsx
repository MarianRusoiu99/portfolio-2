import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { ProjectData } from '../../data/projectsData';

interface ProjectImagesProps {
  project: ProjectData;
}

const ProjectImages: React.FC<ProjectImagesProps> = ({ project }) => {
  const { theme } = useTheme();

  return (
    <section 
      className="py-16 md:py-32 px-6 md:px-8"
      style={{ backgroundColor: theme.colors.surface }}
    >
      <div className="max-w-7xl mx-auto">
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
            Project Gallery
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: theme.colors.textSecondary }}
          >
            Visual showcase of the project's interface and features
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <img 
                src={image} 
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectImages;
