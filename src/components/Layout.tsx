import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Download, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import InteractiveText from './InteractiveText';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
  showBackButton?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showBackButton = false }) => {
  const { theme } = useTheme();
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{ 
        backgroundColor: theme.colors.background,
        color: theme.colors.text
      }}
    >
      {/* Navigation with blur gradient */}
      <motion.nav 
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 p-6 md:p-8"
        style={{
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-between items-center">
          <motion.div 
            className="font-medium text-lg flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
          >
            {showBackButton && (
              <Link 
                to="/"
                className="flex items-center gap-2 hover:opacity-70 transition-opacity no-spawn"
              >
                <ArrowLeft size={20} />
                <span>Back</span>
              </Link>
            )}
            {!showBackButton && (
              <InteractiveText text="Valentin Rusoiu" />
            )}
          </motion.div>
          
          <div className="flex items-center gap-6">
            <ThemeToggle />
            <motion.a 
              href="mailto:contact@valentinrusoiu.dev"
              className="text-sm transition-colors flex items-center gap-2 no-spawn"
              style={{ color: theme.colors.textSecondary }}
              whileHover={{ x: 5 }}
            >
              <Mail size={16} />
              <span>Contact</span>
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {children}
    </div>
  );
};

export default Layout;
