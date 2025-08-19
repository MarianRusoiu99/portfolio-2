import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface StickyResetButtonProps {
  imageCount: number;
  onReset: () => void;
  onResetText: () => void;
}

const StickyResetButton: React.FC<StickyResetButtonProps> = ({ 
  imageCount, 
  onReset, 
  onResetText 
}) => {
  const { theme } = useTheme();

  const handleFullReset = () => {
    onReset();
    onResetText();
  };

  if (imageCount === 0) return null;

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      <motion.button
        onClick={handleFullReset}
        className="flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg"
        style={{
          backgroundColor: theme.colors.primary,
          color: theme.colors.background,
          border: `2px solid ${theme.colors.border}`,
        }}
        whileHover={{ 
          scale: 1.05,
          boxShadow: theme.shadows.xl
        }}
        whileTap={{ scale: 0.95 }}
      >
        <RotateCcw size={16} />
        <span>Reset All ({imageCount})</span>
      </motion.button>
    </motion.div>
  );
};

export default StickyResetButton;
