import React, { useState, useImperativeHandle, forwardRef, useMemo } from 'react';
import { motion } from 'framer-motion';

interface InteractiveTextProps {
  text: string;
  className?: string;
  enableInteractivity?: boolean; // Allow disabling for performance
}

// Minimal font list for performance
const creativeFonts = [
  'Inter',
  'Oswald'
];

const vibrantColors = [
  '#FF6B6B',
  '#4ECDC4', 
  '#45B7D1',
  '#96CEB4',
  '#FFEAA7'
];

export interface InteractiveTextRef {
  reset: () => void;
}

const InteractiveText = forwardRef<InteractiveTextRef, InteractiveTextProps>(
  ({ text, className = '', enableInteractivity = true }, ref) => {
    const [currentStyle, setCurrentStyle] = useState<{ font: string; color: string } | null>(null);

    // Optimize: Only split into words, not characters
    const words = useMemo(() => text.split(' '), [text]);

    const handleHover = () => {
      if (!enableInteractivity) return;
      
      const randomFont = creativeFonts[Math.floor(Math.random() * creativeFonts.length)];
      const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
      
      setCurrentStyle({ font: randomFont, color: randomColor });
    };

    const handleLeave = () => {
      setCurrentStyle(null);
    };

    const reset = () => {
      setCurrentStyle(null);
    };

    useImperativeHandle(ref, () => ({
      reset
    }));

    // For non-interactive or short text, use single element
    if (!enableInteractivity || text.length < 20) {
      return (
        <motion.span
          className={`${className} no-spawn`}
          style={{
            fontFamily: currentStyle?.font || 'Oswald',
            color: currentStyle?.color || 'inherit',
            fontWeight: currentStyle ? '700' : 'inherit'
          }}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          whileHover={enableInteractivity ? { 
            scale: 1.05,
            transition: { type: 'spring', stiffness: 400, damping: 10 }
          } : {}}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {text}
        </motion.span>
      );
    }

    // For longer interactive text, split by words instead of characters
    return (
      <span className={className}>
        {words.map((word, index) => (
          <React.Fragment key={index}>
            <motion.span
              className="inline-block no-spawn"
              style={{
                fontFamily: 'Oswald',
                color: 'inherit'
              }}
              whileHover={{ 
                scale: 1.05,
                y: -1,
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {word}
            </motion.span>
            {index < words.length - 1 && ' '}
          </React.Fragment>
        ))}
      </span>
    );
  }
);

InteractiveText.displayName = 'InteractiveText';

export default InteractiveText;
