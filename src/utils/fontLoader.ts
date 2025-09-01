// Lazy font loader for decorative fonts
class FontLoader {
  private loadedFonts = new Set<string>();
  private loadingPromises = new Map<string, Promise<void>>();

  private fontMap = {
    'Anton': '/fonts/Anton/Anton.css',
    'Bangers': '/fonts/Bangers/Bangers.css',
    'Bungee': '/fonts/Bungee/Bungee.css',
    'Creepster': '/fonts/Creepster/Creepster.css',
    'Fredoka One': '/fonts/Fredoka-One/Fredoka-One.css',
    'Luckiest Guy': '/fonts/Luckiest-Guy/Luckiest-Guy.css',
    'Orbitron': '/fonts/Orbitron/Orbitron.css',
    'Permanent Marker': '/fonts/Permanent-Marker/Permanent-Marker.css',
    'Righteous': '/fonts/Righteous/Righteous.css',
    'Russo One': '/fonts/Russo-One/Russo-One.css'
  };

  async loadFont(fontName: string): Promise<void> {
    if (this.loadedFonts.has(fontName)) {
      return Promise.resolve();
    }

    if (this.loadingPromises.has(fontName)) {
      return this.loadingPromises.get(fontName)!;
    }

    const promise = this.loadFontCSS(fontName);
    this.loadingPromises.set(fontName, promise);

    try {
      await promise;
      this.loadedFonts.add(fontName);
    } catch (error) {
      console.warn(`Failed to load font: ${fontName}`, error);
      this.loadingPromises.delete(fontName);
    }
  }

  private async loadFontCSS(fontName: string): Promise<void> {
    const cssPath = this.fontMap[fontName as keyof typeof this.fontMap];
    if (!cssPath) {
      throw new Error(`Font not found: ${fontName}`);
    }

    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = cssPath;
      link.onload = () => {
        // Wait for font to be available
        if ('fonts' in document) {
          document.fonts.ready.then(() => resolve());
        } else {
          // Fallback for older browsers
          setTimeout(() => resolve(), 100);
        }
      };
      link.onerror = () => reject(new Error(`Failed to load ${cssPath}`));
      document.head.appendChild(link);
    });
  }

  getFontStatus(fontName: string): 'not-loaded' | 'loading' | 'loaded' {
    if (this.loadedFonts.has(fontName)) return 'loaded';
    if (this.loadingPromises.has(fontName)) return 'loading';
    return 'not-loaded';
  }

  getAvailableFonts(): string[] {
    return Object.keys(this.fontMap);
  }
}

export const fontLoader = new FontLoader();
