'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Sparkles, Heart, Globe } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      {/* Main Content Grid - Text and Image */}
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.sectionLabel}>
            <Sparkles size={18} />
            <span>About</span>
          </div>

          <h2 className={styles.heading}>
            A Journey Through
            <br />
            <span className={styles.accent}>Flavor & Passion</span>
          </h2>

          <div className={styles.story}>
            <p>
              As a contestant on BBC Masterchef 2022, Vanessa Haughton showcased her culinary 
              creativity on a national stage, but her journey with food extends far beyond 
              the competition kitchen.
            </p>

            <p>
              Since childhood, food has always been Vanessa's way of showing love. It meant 
              catching up with friends and family, having a good laugh, and making sure you 
              cooked extra in case that unannounced visitor showed up... they always did! 
              And always left with containers.
            </p>

            <p>
              Vanessa founded <strong>Set the Table</strong>, her private dining venture 
              dedicated to giving you the highest level of service with stunning food and 
              beautiful presentations. Through Set the Table, intimate supper clubs, and 
              bespoke private chef services, Vanessa brings restaurant-quality Caribbean 
              cuisine with influences from all over the world directly to you.
            </p>

            <p>
              From custom cakes to event catering and weekly meal delivery, Vanessa creates 
              fresh homemade dishes perfect for any occasion. Her approach combines classical 
              techniques with bold, creative flavor combinations, drawing inspiration from 
              Caribbean traditions and global culinary excellence.
            </p>
          </div>
        </motion.div>

        <motion.div
          className={styles.imageArea}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.imageContainer}>
            <Image 
              src="/images/vanessa-masterchef.jpeg" 
              alt="Vanessa Haughton at Set the Table Supper Club - BBC Masterchef 2022 Contestant"
              width={600}
              height={800}
              className={styles.aboutImage}
              priority
            />
          </div>
          <div className={styles.decorElement} />
        </motion.div>
      </div>

      {/* Highlights - Separate Full-Width Container */}
      <motion.div
        className={styles.highlightsContainer}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className={styles.highlights}>
          <div className={styles.highlight}>
            <Award className={styles.highlightIcon} size={32} />
            <div>
              <h4>BBC Masterchef 2022</h4>
              <p>Competed among Britain's finest home cooks on national television</p>
            </div>
          </div>
          <div className={styles.highlight}>
            <Globe className={styles.highlightIcon} size={32} />
            <div>
              <h4>Caribbean with Global Influences</h4>
              <p>Traditional recipes meet international culinary excellence</p>
            </div>
          </div>
          <div className={styles.highlight}>
            <Heart className={styles.highlightIcon} size={32} />
            <div>
              <h4>Creator of Set the Table</h4>
              <p>Premium private dining experiences and culinary services</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}