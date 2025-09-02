import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { ProjectData } from '../../data/projectsData';

interface ProjectHeroProps {
  project: ProjectData;
}

const ProjectHero: React.FC<ProjectHeroProps> = ({ project }) => {
  const { theme } = useTheme();

  return (
    <section 
      className="min-h-screen flex items-center px-6 md:px-8 relative overflow-hidden"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 mb-8 text-sm hover:opacity-70 transition-opacity no-spawn"
            style={{ color: theme.colors.textSecondary }}
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span 
                    className="text-xs px-3 py-1 rounded-full"
                    style={{ backgroundColor: theme.colors.surface, color: theme.colors.textSecondary }}
                  >
                    {project.type}
                  </span>
                  {project.status && (
                    <span 
                      className="text-xs px-3 py-1 rounded-full"
                      style={{ backgroundColor: theme.colors.success + '20', color: theme.colors.success }}
                    >
                      {project.status}
                    </span>
                  )}
                  <span style={{ color: theme.colors.textSecondary }}>{project.date}</span>
                </div>
                
                <h1 
                  className="text-4xl md:text-6xl font-bold mb-4"
                  style={{ color: theme.colors.text }}
                >
                  {project.title}
                </h1>
                
                <h2 
                  className="text-xl md:text-2xl mb-6"
                  style={{ color: theme.colors.primary }}
                >
                  {project.subtitle}
                </h2>
                
                <p 
                  className="text-lg mb-8 max-w-2xl"
                  style={{ color: theme.colors.textSecondary }}
                >
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-sm px-3 py-1 rounded-md"
                      style={{ color: theme.colors.textSecondary }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors no-spawn"
                      style={{ backgroundColor: theme.colors.primary, color: theme.colors.background }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.website && (
                    <a 
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors no-spawn"
                      style={{ backgroundColor: theme.colors.primary, color: theme.colors.background }}
                    >
                      <ExternalLink size={16} />
                      Visit Website
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors no-spawn"
                      style={{ 
                        color: theme.colors.text,
                        backgroundColor: 'transparent' 
                      }}
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectHero;
