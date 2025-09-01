import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { motion } from 'framer-motion';
import '../decorative-fonts.css'; // Import decorative fonts

interface InteractiveTextProps {
  text: string;
  className?: string;
}

// Only include fonts that we actually have locally
const creativeFonts = [
  'Anton',
  'Bangers', 
  'Bungee',
  'Creepster',
  'Fredoka One',
  'Luckiest Guy',
  'Orbitron',
  'Permanent Marker',
  'Righteous',
  'Russo One'
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

const InteractiveText = forwardRef<InteractiveTextRef, InteractiveTextProps>(
  ({ text, className }, ref) => {
    const [letterStyles, setLetterStyles] = useState<{[key: string]: {font: string, color: string}}>({});

    const handleLetterHover = (index: string) => {
      // Always generate new random styles on hover
      const randomFont = creativeFonts[Math.floor(Math.random() * creativeFonts.length)];
      const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
      
      setLetterStyles(prev => ({
        ...prev,
        [index]: { font: randomFont, color: randomColor }
      }));
    };

    const handleLetterLeave = () => {
      // Keep the styles persistent - don't reset on mouse leave
    };

    const reset = () => {
      setLetterStyles({});
    };

    useImperativeHandle(ref, () => ({
      reset
    }));
 
    return (
      <span className={`${className} interactive-text-container`}>
        {text.split(' ').map((word, wordIndex) => (
          <span key={wordIndex} className="interactive-text-word">
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={`${wordIndex}-${charIndex}`}
                className="creative-fonts inline-block no-spawn"
                style={{
                  fontFamily: letterStyles[`${wordIndex}-${charIndex}`] 
                    ? `"${letterStyles[`${wordIndex}-${charIndex}`].font}", "Oswald", sans-serif`
                    : '"Oswald", sans-serif',
                  color: letterStyles[`${wordIndex}-${charIndex}`] 
                    ? letterStyles[`${wordIndex}-${charIndex}`].color 
                    : 'inherit',
                  fontWeight: letterStyles[`${wordIndex}-${charIndex}`] ? '700' : 'inherit',
                  verticalAlign: 'baseline',
                  lineHeight: '1'
                }}
                onMouseEnter={() => handleLetterHover(`${wordIndex}-${charIndex}`)}
                onMouseLeave={handleLetterLeave}
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                  transition: { type: 'spring', stiffness: 400, damping: 10 }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (wordIndex * word.length + charIndex) * 0.02 }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </span>
    );
  }
);

InteractiveText.displayName = 'InteractiveText';

export default InteractiveText;
