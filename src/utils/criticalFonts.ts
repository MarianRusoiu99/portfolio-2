// Async font loader for critical fonts
export const loadCriticalFonts = async (): Promise<void> => {
  const fontPromises = [
    loadFont('/fonts/Inter/Inter.css'),
    loadFont('/fonts/Oswald/Oswald.css')
  ];

  try {
    await Promise.all(fontPromises);
  } catch (error) {
    console.warn('Some critical fonts failed to load:', error);
  }
};

const loadFont = (href: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Failed to load ${href}`));
    document.head.appendChild(link);
  });
};

// Load critical fonts when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadCriticalFonts);
} else {
  loadCriticalFonts();
}
