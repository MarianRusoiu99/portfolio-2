import React, { useState, useImperativeHandle, forwardRef, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';

interface InteractiveTextProps {
  text: string;
  className?: string;
}

export interface InteractiveTextRef {
  reset: () => void;
}

// Reduced font list for better performance
const essentialFonts = [
  'Fredoka One',
  'Righteous',
  'Bungee',
  'Bangers',
  'Orbitron',
  'Russo One',
  'Anton',
  'Luckiest Guy'
];

const coreColors = [
  '#FF6B6B',
  '#4ECDC4',
  '#45B7D1',
  '#96CEB4',
  '#FFEAA7',
  '#DDA0DD',
  '#98D8C8',
  '#F7DC6F',
  '#BB8FCE',
  '#85C1E9'
];

const InteractiveTextOptimized = React.memo(forwardRef<InteractiveTextRef, InteractiveTextProps>(
  ({ text, className = '' }, ref) => {
    const [letterStyles, setLetterStyles] = useState<{ [key: number]: { font: string; color: string } }>({});

    // Memoize split text to avoid unnecessary recalculations
    const splitText = useMemo(() => text.split(''), [text]);

    const handleLetterHover = useCallback((index: number) => {
      // Use essential fonts only for better performance
      const randomFont = essentialFonts[Math.floor(Math.random() * essentialFonts.length)];
      const randomColor = coreColors[Math.floor(Math.random() * coreColors.length)];
      
      setLetterStyles(prev => ({
        ...prev,
        [index]: { font: randomFont, color: randomColor }
      }));
    }, []);

    const handleLetterLeave = useCallback(() => {
      // Debounced cleanup for better performance
      setTimeout(() => {
        setLetterStyles(prev => {
          const newStyles = { ...prev };
          Object.keys(newStyles).forEach(key => {
            if (Math.random() > 0.8) {
              delete newStyles[parseInt(key)];
            }
          });
          return newStyles;
        });
      }, 300);
    }, []);

    const reset = useCallback(() => {
      setLetterStyles({});
    }, []);

    useImperativeHandle(ref, () => ({
      reset
    }), [reset]);

    return (
      <span className={className}>
        {splitText.map((char, index) => (
          <motion.span
            key={index}
            className="inline-block no-spawn"
            style={{
              fontFamily: letterStyles[index] 
                ? letterStyles[index].font 
                : 'Oswald',
              color: letterStyles[index] 
                ? letterStyles[index].color 
                : 'inherit',
              fontWeight: letterStyles[index] ? '700' : 'inherit',
              verticalAlign: 'baseline',
              lineHeight: '1'
            }}
            onMouseEnter={() => handleLetterHover(index)}
            onMouseLeave={handleLetterLeave}
            whileHover={{ 
              scale: 1.05,
              y: -1,
              transition: { type: 'spring', stiffness: 300, damping: 15 }
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.01 }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </span>
    );
  }
));

InteractiveTextOptimized.displayName = 'InteractiveTextOptimized';

export default InteractiveTextOptimized;
