// Lazy image preloader for spawner
class ImagePreloader {
  private imageCache = new Map<string, HTMLImageElement>();
  private loadingPromises = new Map<string, Promise<HTMLImageElement>>();

  async preloadImage(src: string): Promise<HTMLImageElement> {
    // Return cached image if available
    if (this.imageCache.has(src)) {
      return this.imageCache.get(src)!;
    }

    // Return existing promise if already loading
    if (this.loadingPromises.has(src)) {
      return this.loadingPromises.get(src)!;
    }

    // Create new loading promise
    const promise = new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.imageCache.set(src, img);
        this.loadingPromises.delete(src);
        resolve(img);
      };
      img.onerror = () => {
        this.loadingPromises.delete(src);
        reject(new Error(`Failed to load image: ${src}`));
      };
      img.src = src;
    });

    this.loadingPromises.set(src, promise);
    return promise;
  }

  preloadImages(sources: string[]): Promise<HTMLImageElement[]> {
    return Promise.all(sources.map(src => this.preloadImage(src)));
  }

  getImageStatus(src: string): 'not-loaded' | 'loading' | 'loaded' {
    if (this.imageCache.has(src)) return 'loaded';
    if (this.loadingPromises.has(src)) return 'loading';
    return 'not-loaded';
  }

  clearCache(): void {
    this.imageCache.clear();
    this.loadingPromises.clear();
  }
}

export const imagePreloader = new ImagePreloader();
