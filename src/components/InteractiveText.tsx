import React, { useState, useImperativeHandle, forwardRef, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';

interface InteractiveTextProps {
  text: string;
  className?: string;
  enableInteractivity?: boolean; // Allow disabling for performance
  mode?: 'auto' | 'word' | 'character' | 'paragraph'; // Different interaction modes
  textType?: 'heading' | 'paragraph' | 'single-word'; // Semantic text type for auto mode
}

// Optimized font list for performance (reduced from 40+ to 8)
const creativeFonts = [
  'Fredoka One',
  'Righteous', 
  'Bungee',
  'Orbitron',
  'Russo One',
  'Anton',
  'Inter',
  'Oswald'
];

const vibrantColors = [
  '#FF6B6B',
  '#4ECDC4', 
  '#45B7D1',
  '#96CEB4',
  '#FFEAA7',
  '#A8E6CF',
  '#FFD93D',
  '#6C5CE7'
];

export interface InteractiveTextRef {
  reset: () => void;
}

const InteractiveText = forwardRef<InteractiveTextRef, InteractiveTextProps>(
  ({ text, className = '', enableInteractivity = true, mode = 'auto', textType = 'paragraph' }, ref) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [randomStyle, setRandomStyle] = useState<{ font: string; color: string } | null>(null);

    // Determine the interaction mode based on text type and mode prop
    const getInteractionMode = () => {
      if (mode !== 'auto') return mode;
      
      // Auto-detect based on text type and content
      if (textType === 'heading' || textType === 'single-word') {
        return 'character';
      }
      if (textType === 'paragraph') {
        return 'word';
      }
      
      // Fallback auto-detection based on text length and content
      if (text.length <= 20 || text.split(' ').length <= 3) {
        return 'character'; // Short text or few words -> character mode
      }
      return 'word'; // Longer text -> word mode
    };

    const interactionMode = getInteractionMode();

    // Memoize text splitting based on interaction mode
    const textParts = useMemo(() => {
      if (!enableInteractivity) return [text];
      
      switch (interactionMode) {
        case 'character':
          return text.split('');
        case 'word':
          return text.split(' ');
        case 'paragraph':
          return [text]; // Treat entire paragraph as one unit
        default:
          return text.split(' ');
      }
    }, [text, enableInteractivity, interactionMode]);

    const handleCharacterHover = useCallback((index: number) => {
      if (!enableInteractivity) return;
      
      setHoveredIndex(index);
      const randomFont = creativeFonts[Math.floor(Math.random() * creativeFonts.length)];
      const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
      
      setRandomStyle({ font: randomFont, color: randomColor });
    }, [enableInteractivity]);

    const handleCharacterLeave = useCallback(() => {
      setHoveredIndex(null);
      setRandomStyle(null);
    }, []);

    const reset = useCallback(() => {
      setHoveredIndex(null);
      setRandomStyle(null);
    }, []);

    useImperativeHandle(ref, () => ({
      reset
    }));

    // For non-interactive text, return simple element
    if (!enableInteractivity) {
      return (
        <span className={`${className} no-spawn`}>
          {text}
        </span>
      );
    }

    // Paragraph mode - entire text changes on hover
    if (interactionMode === 'paragraph') {
      return (
        <motion.span
          className={`${className} no-spawn cursor-pointer`}
          style={{
            fontFamily: randomStyle?.font || 'Oswald',
            color: randomStyle?.color || 'inherit',
            fontWeight: randomStyle ? '700' : 'inherit',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={() => handleCharacterHover(0)}
          onMouseLeave={handleCharacterLeave}
          whileHover={{ 
            scale: 1.02,
            transition: { type: 'spring', stiffness: 400, damping: 10 }
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {text}
        </motion.span>
      );
    }

    // Character mode - each letter is interactive (for headings)
    if (interactionMode === 'character') {
      return (
        <span className={className}>
          {textParts.map((char, index) => (
            <motion.span
              key={index}
              className="inline-block no-spawn cursor-pointer"
              style={{
                fontFamily: hoveredIndex === index && randomStyle ? randomStyle.font : 'Oswald',
                color: hoveredIndex === index && randomStyle ? randomStyle.color : 'inherit',
                fontWeight: hoveredIndex === index && randomStyle ? '700' : 'inherit',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={() => handleCharacterHover(index)}
              onMouseLeave={handleCharacterLeave}
              whileHover={{ 
                scale: 1.2,
                y: -4,
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.05,
                duration: 0.4
              }}
            >
              {char === ' ' ? '\u00A0' : char} {/* Non-breaking space for proper spacing */}
            </motion.span>
          ))}
        </span>
      );
    }

    // Word mode - each word is interactive (for paragraphs)
    return (
      <span className={className}>
        {textParts.map((word, index) => (
          <React.Fragment key={index}>
            <motion.span
              className="inline-block no-spawn cursor-pointer"
              style={{
                fontFamily: hoveredIndex === index && randomStyle ? randomStyle.font : 'Oswald',
                color: hoveredIndex === index && randomStyle ? randomStyle.color : 'inherit',
                fontWeight: hoveredIndex === index && randomStyle ? '700' : 'inherit',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={() => handleCharacterHover(index)}
              onMouseLeave={handleCharacterLeave}
              whileHover={{ 
                scale: 1.05,
                y: -1,
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.05,
                duration: 0.4
              }}
            >
              {word}
            </motion.span>
            {index < textParts.length - 1 && ' '}
          </React.Fragment>
        ))}
      </span>
    );
  }
);

InteractiveText.displayName = 'InteractiveText';

export default InteractiveText;
