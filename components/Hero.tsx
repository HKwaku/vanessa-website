'use client';

import { motion } from 'framer-motion';
import { Award, ChefHat, ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
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
          From intimate supper clubs to premium food delivery,
          <br />
          I bring restaurant-quality cuisine to your table.
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
