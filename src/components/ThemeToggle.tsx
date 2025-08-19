import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme, theme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="flex items-center gap-2 text-sm transition-colors"
      style={{ color: theme.colors.text }}
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <Sun size={16} /> : <Moon size={16} />}
      </motion.div>
      <span>{isDark ? 'Light' : 'Dark'}</span>
    </motion.button>
  );
};

export default ThemeToggle;
