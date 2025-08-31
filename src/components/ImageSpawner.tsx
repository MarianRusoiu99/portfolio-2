import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface SpawnedImage {
  id: string;
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
}

interface ImageSpawnerProps {
  images: SpawnedImage[];
}

const ImageSpawner: React.FC<ImageSpawnerProps> = ({ images }) => {
  return (
    <AnimatePresence>
      {images.map((image) => (
        <motion.img
          key={image.id}
          src={image.src}
          className="spawned-image pointer-events-none"
          style={{
            position: 'absolute',
            left: image.x,
            top: image.y,
            width: image.width,
            height: 'auto',
            transform: `rotate(${image.rotation}deg)`,
            zIndex: 10,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ 
            type: 'spring', 
            stiffness: 400, 
            damping: 25 
          }}
          whileHover={{ 
            scale: 1.05,
            zIndex: 1000 
          }}
          drag
          dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
          dragElastic={0.1}
        />
      ))}
    </AnimatePresence>
  );
};

export default ImageSpawner;
