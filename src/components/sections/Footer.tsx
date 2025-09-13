import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className="py-8 md:py-12 px-6 md:px-8" style={{ backgroundColor: theme.colors.surface, color: theme.colors.textSecondary }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm">© 2025 Valentin Anicza. All rights reserved.</p>
        <div className="flex items-center gap-2 text-xs">
          <span>Hover letters to transform</span>
          <span>•</span>
          <span>Click anywhere to spawn images</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
