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
    <>
      {/* Cat message in left corner */}
      <motion.div
        className="fixed bottom-24 md:bottom-8 left-8 z-40 max-w-xs"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.2 }}
      >
        <div
          className="px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm text-sm"
          style={{
            backgroundColor: `${theme.colors.background}95`,
            color: theme.colors.text
          }}
        >
          <p className="font-medium mb-1">🐾 Meet Mitsubishi!</p>
          <p className="text-xs opacity-80">
            My coding companion who judges my commits and occasionally walks across my keyboard. 
            Currently napping on the warm laptop.
          </p>
        </div>
      </motion.div>

      {/* Reset button */}
      <motion.div
        className="bottom-8 z-50"
        style={{
          position: 'fixed',
          left: '50%',
        }}
        initial={{ opacity: 0, y: 100, x: '-50%' }}
        animate={{ opacity: 1, y: 0, x: '-50%' }}
        exit={{ opacity: 0, y: 100, x: '-50%' }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        <motion.button
          onClick={handleFullReset}
          className="flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg"
          style={{
            backgroundColor: theme.colors.primary,
            color: theme.colors.background,
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
    </>
  );
};

export default StickyResetButton;
