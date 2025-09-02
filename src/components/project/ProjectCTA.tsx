import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ProjectCTA: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section 
      className="py-16 md:py-32 px-6 md:px-8"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: theme.colors.text }}
          >
            Let's Work Together
          </h2>
          <p 
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: theme.colors.textSecondary }}
          >
            Have a project in mind? I'd love to discuss how we can bring your ideas to life with modern technology and thoughtful design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg transition-colors no-spawn"
              style={{ backgroundColor: theme.colors.primary, color: theme.colors.background }}
            >
              Get In Touch
              <ArrowUpRight size={16} />
            </Link>
            
            <Link 
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg transition-colors no-spawn"
              style={{ 
                color: theme.colors.text,
                backgroundColor: 'transparent' 
              }}
            >
              View All Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectCTA;
