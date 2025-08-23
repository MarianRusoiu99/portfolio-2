import React, { useState, useEffect } from 'react';

interface LazyBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const LazyBackground: React.FC<LazyBackgroundProps> = ({ 
  children, 
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay background effects until after initial render
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`${className} ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
    >
      {children}
    </div>
  );
};

export default LazyBackground;
