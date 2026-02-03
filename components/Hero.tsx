'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

export interface HeroBackgroundImage {
  src: string;
  alt: string;
}

interface HeroProps {
  backgroundImages?: HeroBackgroundImage[];
  backgroundAutoPlayInterval?: number;
}

export default function Hero({
  backgroundImages,
  backgroundAutoPlayInterval = 5000,
}: HeroProps) {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const images = backgroundImages ?? [];

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setBackgroundIndex((prev) => (prev + 1) % images.length);
    }, backgroundAutoPlayInterval);
    return () => clearInterval(interval);
  }, [images.length, backgroundAutoPlayInterval]);

  return (
    <section
      className={`${styles.hero} ${images.length > 0 ? styles.heroWithBackground : ''}`}
      id="home"
    >
      {/* Background slideshow */}
      {images.length > 0 && (
        <div className={styles.heroBackground} aria-hidden>
          <AnimatePresence mode="wait">
            <motion.div
              key={backgroundIndex}
              className={styles.heroBackgroundSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src={images[backgroundIndex].src}
                alt=""
                className={styles.heroBackgroundImage}
              />
            </motion.div>
          </AnimatePresence>
          <div className={styles.heroOverlay} />
        </div>
      )}

      <div className={styles.heroContent}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Award size={20} />
          <span>BBC Masterchef</span>
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Crafting Memorable
          <br />
          <span className={styles.titleAccent}>Culinary Experiences</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
        </motion.p>

        <motion.div
          className={styles.ctaGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a href="#services" className={styles.ctaPrimary}>
            Explore Services
            <ArrowRight size={20} />
          </a>
          <a href="#contact" className={styles.ctaSecondary}>
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        className={styles.decorCircle}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.3, duration: 1.2, ease: 'easeOut' }}
      />

      <motion.div
        className={styles.decorLine}
        initial={{ width: 0 }}
        animate={{ width: '40%' }}
        transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
      />
    </section>
  );
}
