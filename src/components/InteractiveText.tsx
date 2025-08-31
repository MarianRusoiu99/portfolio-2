import React, { useState, useImperativeHandle, forwardRef, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';

interface InteractiveTextProps {
  text: string;
  className?: string;
}

const creativeFonts = [
  'Fredoka One',
  'Righteous',
  'Bungee',
  'Bangers',
  'Orbitron',
  'Permanent Marker',
  'Russo One',
  'Anton',
  'Luckiest Guy',
  'Creepster'
];

const vibrantColors = [
  '#FF6B6B',
  '#4ECDC4',
  '#45B7D1',
  '#96CEB4',
  '#FFEAA7',
  '#DDA0DD',
  '#98D8C8',
  '#F7DC6F',
  '#BB8FCE',
  '#85C1E9',
  '#F8C471',
  '#82E0AA',
  '#F1948A',
  '#85C1E9',
  '#F9E79F',
  '#D7BDE2',
  '#A9DFBF',
  '#F9B7B7',
  '#B3E5FC',
  '#FFCC80',
  '#CE93D8',
  '#80CBC4',
  '#FFAB91',
  '#81C784',
  '#64B5F6',
  '#FFD54F',
  '#E1BEE7',
  '#A5D6A7',
  '#FFCDD2',
  '#B39DDB',
  '#FF9800',
  '#E91E63',
  '#9C27B0',
  '#673AB7',
  '#3F51B5',
  '#2196F3',
  '#03A9F4',
  '#00BCD4',
  '#009688',
  '#4CAF50',
  '#8BC34A',
  '#CDDC39',
  '#FFEB3B',
  '#FFC107',
  '#FF5722'
];

export interface InteractiveTextRef {
  reset: () => void;
}

const InteractiveText = React.memo(forwardRef<InteractiveTextRef, InteractiveTextProps>(
  ({ text, className = '' }, ref) => {
    const [letterStyles, setLetterStyles] = useState<{ [key: number]: { font: string; color: string } }>({});
    const [fontIndex, setFontIndex] = useState(0);

    // Memoize split text to avoid unnecessary recalculations
    const splitText = useMemo(() => text.split(''), [text]);

    const handleLetterHover = useCallback((index: number) => {
      // Cycle through fonts sequentially and pick a random color
      const currentFont = creativeFonts[fontIndex % creativeFonts.length];
      const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
      
      setLetterStyles(prev => ({
        ...prev,
        [index]: { font: currentFont, color: randomColor }
      }));
      
      // Increment font index for next hover
      setFontIndex(prev => prev + 1);
    }, [fontIndex]);

    const handleLetterLeave = useCallback(() => {
      // Do nothing - keep the font changes persistent
      // Only reset manually via the reset function
    }, []);

    const reset = useCallback(() => {
      setLetterStyles({});
      setFontIndex(0);
    }, []);

    useImperativeHandle(ref, () => ({
      reset
    }), [reset]);

    return (
      <span className={className}>
        {splitText.map((char, index) => (
          <motion.span
            key={index}
            className="creative-fonts inline-block no-spawn"
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
              scale: 1.1,
              y: -2,
              transition: { type: 'spring', stiffness: 400, damping: 10 }
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.02 }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </span>
    );
  }
));

InteractiveText.displayName = 'InteractiveText';

export default InteractiveText;
