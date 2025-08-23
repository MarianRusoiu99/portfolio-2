import React, { memo, createElement } from 'react';

interface LightweightContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'main' | 'article' | 'aside' | 'nav' | 'header' | 'footer';
}

const LightweightContainer: React.FC<LightweightContainerProps> = memo(({ 
  children, 
  className = '',
  as = 'div'
}) => {
  return createElement(
    as,
    { className },
    children
  );
});

LightweightContainer.displayName = 'LightweightContainer';

export default LightweightContainer;
