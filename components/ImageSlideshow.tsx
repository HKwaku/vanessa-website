'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ImageSlideshow.module.css';

interface ImageSlideshowProps {
  images: {
    src: string;
    alt: string;
  }[];
  height?: string;
  autoPlayInterval?: number;
  showControls?: boolean;
}

export default function ImageSlideshow({ 
  images, 
  height = '500px',
  autoPlayInterval = 5000,
  showControls = true 
}: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    if (autoPlayInterval > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [autoPlayInterval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.slideshow} style={{ height }}>
      <div className={styles.slideshowContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className={styles.slide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className={styles.slideImage}
            />
            <div className={styles.overlay} />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        {showControls && images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className={`${styles.navButton} ${styles.navButtonPrev}`}
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={goToNext}
              className={`${styles.navButton} ${styles.navButtonNext}`}
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className={styles.dots}>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
