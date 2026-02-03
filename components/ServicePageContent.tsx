'use client';

import { motion } from 'framer-motion';
import { Check, UtensilsCrossed } from 'lucide-react';
import styles from '@/styles/ServicePage.module.css';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  pricing: string;
  bookingText: string;
}

interface ServicePageContentProps {
  title: string;
  subtitle: string;
  description: string;
  services: ServiceItem[];
  ctaTitle: string;
  ctaDescription: string;
  primaryButtonText: string;
  primaryButtonLink: string;
}

export default function ServicePageContent({
  title,
  subtitle,
  description,
  services,
  ctaTitle,
  ctaDescription,
  primaryButtonText,
  primaryButtonLink,
}: ServicePageContentProps) {
  return (
    <>
      {/* Intro section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {title}
            <br />
            <span className={styles.accent}>{subtitle}</span>
          </motion.h1>
          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {description}
          </motion.p>
        </div>
      </section>

      {/* Service cards */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <div className={styles.serviceHeader}>
                <div className={styles.serviceIcon}>
                  <UtensilsCrossed size={36} />
                </div>
                <div>
                  <h2>{service.title}</h2>
                  <p className={styles.pricing}>{service.pricing}</p>
                </div>
              </div>

              <p className={styles.serviceDescription}>{service.description}</p>

              <div className={styles.featureGrid}>
                {service.features.map((feature) => (
                  <div key={feature} className={styles.feature}>
                    <Check size={20} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a href={primaryButtonLink} className={styles.ctaButton}>
                {service.bookingText}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>{ctaTitle}</h2>
            <p>{ctaDescription}</p>
            <div className={styles.ctaButtons}>
              <a href={primaryButtonLink} className={styles.primaryButton}>
                {primaryButtonText}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
