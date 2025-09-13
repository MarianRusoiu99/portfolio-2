import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Navigate } from 'react-router-dom';
import { ExternalLink, Github, Calendar, Users, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Layout from '../components/Layout';
import InteractiveText from '../components/InteractiveText';
import { projectsData } from '../data/projectsData';

const ProjectPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { theme } = useTheme();
  
  if (!projectId || !projectsData[projectId as keyof typeof projectsData]) {
    return <Navigate to="/" replace />;
  }

  const project = projectsData[projectId as keyof typeof projectsData];

  return (
    <Layout showBackButton>
      <div className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="px-6 md:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center items-center gap-4 mb-6">
                <span className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                  {project.type}
                </span>
                {project.website && (
                  <motion.a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-2 rounded-full flex items-center gap-2 no-spawn bg-green-500 dark:bg-green-600 text-white font-semibold shadow-lg"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={14} />
                    Live Site
                  </motion.a>
                )}
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1 rounded-full flex items-center gap-1 no-spawn bg-gray-100 dark:bg-gray-900/20 text-gray-700 dark:text-gray-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={12} />
                    GitHub
                  </motion.a>
                )}
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1 rounded-full flex items-center gap-1 no-spawn bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={12} />
                    Demo
                  </motion.a>
                )}
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <InteractiveText text={project.title} />
              </h1>
              
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300">
                {project.subtitle}
              </p>
            </motion.div>

            {/* Project Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-8 mb-16"
            >
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-gray-500 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">{project.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} className="text-gray-500 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">{project.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={20} className="text-gray-500 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">High Performance</span>
              </div>
            </motion.div>

            {/* Project Images */}
            {/* {project.images && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
              >
                {project.images.map((image: string, index: number) => (
                  <motion.img
                    key={index}
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    style={{ border: `1px solid ${theme.colors.border}` }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </motion.div>
            )} */}
          </div>
        </section>

        {/* Content Sections */}
        <section className="px-6 md:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                <InteractiveText text="Overview" />
              </h2>
              <p 
                className="text-lg leading-relaxed"
                style={{ color: theme.colors.textSecondary }}
              >
                {project.overview}
              </p>
            </motion.div>

            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                <InteractiveText text="Challenge" />
              </h2>
              <p 
                className="text-lg leading-relaxed"
                style={{ color: theme.colors.textSecondary }}
              >
                {project.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                <InteractiveText text="Solution" />
              </h2>
              <p 
                className="text-lg leading-relaxed mb-8"
                style={{ color: theme.colors.textSecondary }}
              >
                {project.solution}
              </p>

              {/* Tech Stack */}
              <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: theme.colors.primary,
                      color: theme.colors.background,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                <InteractiveText text="Key Features" />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg"
                    style={{ backgroundColor: theme.colors.surface }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div 
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: theme.colors.accent }}
                    />
                    <span style={{ color: theme.colors.textSecondary }}>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Impact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                <InteractiveText text="Impact & Results" />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.impact.map((result, index) => (
                  <motion.div
                    key={index}
                    className="p-6 rounded-xl text-center"
                    style={{ backgroundColor: theme.colors.surface }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-xl font-bold mb-2" style={{ color: theme.colors.text }}>
                      {result.title}
                    </h3>
                    <p style={{ color: theme.colors.textSecondary }}>
                      {result.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center py-16"
            >
              <h2 className="text-3xl font-bold mb-6">
                <InteractiveText text="Interested in Similar Work?" />
              </h2>
              <p 
                className="text-lg mb-8 max-w-2xl mx-auto"
                style={{ color: theme.colors.textSecondary }}
              >
                Let's discuss how I can help bring your project to life with the same attention to detail and technical excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:contact@valentinanicza.click"
                  className="px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2 justify-center no-spawn"
                  style={{
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.background,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start a Project</span>
                  <ExternalLink size={16} />
                </motion.a>
                
                {/* <motion.button
                  className="px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2 justify-center no-spawn"
                  style={{
                    border: `2px solid ${theme.colors.border}`,
                    color: theme.colors.text,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View More Projects</span>
                  <Github size={16} />
                </motion.button> */}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProjectPage;
