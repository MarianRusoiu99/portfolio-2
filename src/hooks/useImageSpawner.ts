import { useState, useCallback } from 'react';
import { SpawnedImage } from '../components/ImageSpawner';
import { unsplashImages } from '../data';

export const useImageSpawner = () => {
  const [spawnedImages, setSpawnedImages] = useState<SpawnedImage[]>([]);

  const spawnImage = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    
    let currentElement: HTMLElement | null = target;
    while (currentElement) {
      if (currentElement.classList.contains('no-spawn') || 
          currentElement.tagName === 'A' || 
          currentElement.tagName === 'BUTTON' ||
          currentElement.getAttribute('role') === 'button') {
        return;
      }
      currentElement = currentElement.parentElement;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const randomImage = unsplashImages[Math.floor(Math.random() * unsplashImages.length)];
    const randomWidth = Math.random() * 150 + 100;
    const randomHeight = Math.random() * 100 + 80;
    const randomRotation = (Math.random() - 0.5) * 20;
    
    const newImage: SpawnedImage = {
      id: `img-${Date.now()}-${Math.random()}`,
      src: randomImage,
      x: x - randomWidth / 2,
      y: y - randomHeight / 2,
      width: randomWidth,
      height: randomHeight,
      rotation: randomRotation
    };

    setSpawnedImages(prev => [...prev, newImage]);
  }, []);

  const resetImages = () => {
    setSpawnedImages([]);
  };

  return {
    spawnedImages,
    spawnImage,
    resetImages
  };
};
