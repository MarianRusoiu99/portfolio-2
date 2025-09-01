import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Preloader: React.FC = () => {
  const { theme } = useTheme();

  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { duration: 0.4, ease: 'easeInOut' as const } // Faster exit
    },
  };

  const textVariants = {
    initial: { opacity: 0.7 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: 'easeInOut' as const, 
        repeat: Infinity, 
        repeatType: 'reverse' as const 
      }
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex items-center justify-center"
      style={{ backgroundColor: theme.colors.background }}
      variants={containerVariants}
      initial="initial"
      exit="exit"
    >
      <motion.h1
        className="text-4xl font-bold tracking-widest"
        style={{ color: theme.colors.text, fontFamily: 'var(--font-heading)' }}
        variants={textVariants}
        animate="animate"
      >
        VR
      </motion.h1>
    </motion.div>
  );
};

export default Preloader;
