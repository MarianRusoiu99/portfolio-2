import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Footer: React.FC = () => {
  const { theme, isDark } = useTheme();

  return (
    <footer className="py-12 px-6 md:px-8 border-t" style={{ backgroundColor: isDark ? theme.colors.surface : '#111827', color: isDark ? theme.colors.textSecondary : '#9ca3af', borderColor: isDark ? theme.colors.border : '#374151' }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm">© 2025 Valentin Rusoiu. All rights reserved.</p>
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
