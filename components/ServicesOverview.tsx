'use client';

import { motion } from 'framer-motion';
import { Users, ShoppingBag, Cake, ArrowRight } from 'lucide-react';
import styles from './ServicesOverview.module.css';

const services = [
  {
    icon: Users,
    title: 'Private Dining Experiences',
    description: 'Intimate supper clubs and bespoke private chef services bringing restaurant-quality Caribbean cuisine with global influences to your home or venue.',
    features: ['Supper Clubs', 'Private Chef', 'Dinner Parties', 'In-Home Service'],
    link: '/private-dining',
    color: 'var(--terracotta)',
    image: '/images/events/supper-club-dining.jpeg',
    imageAlt: 'Set the Table Supper Club Dining Experience'
  },
  {
    icon: ShoppingBag,
    title: 'Take Away Services',
    description: 'Weekly meal delivery and event catering featuring fresh Caribbean cuisine. From intimate gatherings to grand celebrations, we handle every detail.',
    features: ['Weekly Meal Prep', 'Event Catering', 'Corporate Events', 'Party Catering'],
    link: '/takeaway',
    color: 'var(--deep-green)',
    image: '/images/food/jerk-chicken-rice.jpeg',
    imageAlt: 'Caribbean Rice Platter - Take Away Services'
  },
  {
    icon: Cake,
    title: 'Celebratory Cakes & Bakes',
    description: 'Stunning custom cakes and baked goods for every celebration. Each creation is freshly made with Caribbean-inspired flavors and beautiful decorations.',
    features: ['Wedding Cakes', 'Birthday Cakes', 'Custom Designs', 'Fresh Baked'],
    link: '/cakes',
    color: 'var(--burnt-orange)',
    image: '/images/cakes/sunset-ombre-cake.jpeg',
    imageAlt: 'Custom Sunset Ombre Celebration Cake'
  }
];

export default function ServicesOverview() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.heading}>
            Our <span className={styles.accent}>Services</span>
          </h2>
          <p className={styles.intro}>
            Caribbean cuisine with influences from all over the world.
            <br />
            Three service categories to meet all your culinary needs.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className={styles.card}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <div className={styles.cardImage}>
                  <img 
                    src={service.image}
                    alt={service.imageAlt}
                    className={styles.image}
                  />
                  <div className={styles.imageOverlay} />
                </div>

                <div className={styles.cardIcon} style={{ color: service.color }}>
                  <Icon size={40} />
                </div>
                
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDescription}>{service.description}</p>
                  
                  <div className={styles.featuresList}>
                    {service.features.map((feature) => (
                      <span key={feature} className={styles.featurePill}>{feature}</span>
                    ))}
                  </div>
                  
                  <a 
                    href={service.link}
                    className={styles.cardLink}
                    style={{ color: service.color }}
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}