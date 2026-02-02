'use client';

import { motion } from 'framer-motion';
import { Truck, Utensils, Check, ArrowLeft, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import styles from '@/styles/ServicePage.module.css';

export default function TakeAway() {
  const services = [
    {
      icon: Truck,
      title: 'Weekly Meal Delivery',
      pricing: 'Starting at £14 per serving',
      description: 'Restaurant-quality Caribbean meals with global influences delivered to your door or available for pickup. A week\'s worth of gourmet meals prepared fresh, using only the finest ingredients, tailored to your preferences.',
      features: [
        'Weekly meal delivery service',
        'Caribbean cuisine with global influences',
        'Custom menus based on your tastes',
        'Dietary needs accommodated',
        'Fresh ingredients, expertly prepared',
        'Convenient & time-saving'
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className={styles.page}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <motion.a 
              href="/"
              className={styles.backLink}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ArrowLeft size={20} />
              Back to Home
            </motion.a>

            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Take Away
              <br />
              <span className={styles.accent}>Services</span>
            </motion.h1>

            <motion.p
              className={styles.heroDescription}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Convenient meal solutions featuring Caribbean cuisine 
              with global influences. From weekly meal prep to special orders, 
              we bring delicious food directly to you.
            </motion.p>
          </div>
        </section>

        {/* Menu Link Section */}
        <section className={styles.menuLinkSection}>
          <div className={styles.container}>
            <motion.div
              className={styles.menuLinkCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Utensils size={48} className={styles.menuIcon} />
              <h2>View Our Menu</h2>
              <p>Explore our full menu featuring authentic Caribbean flavors with global influences</p>
              <a href="/menu" className={styles.menuButton}>
                See Full Menu
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Services Detail */}
        <section className={styles.servicesSection}>
          <div className={styles.container}>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className={styles.serviceCard}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className={styles.serviceHeader}>
                    <div className={styles.serviceIcon}>
                      <Icon size={36} />
                    </div>
                    <div>
                      <h2>{service.title}</h2>
                      {service.pricing && (
                        <p className={styles.pricing}>{service.pricing}</p>
                      )}
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

                  <a href="/#contact" className={styles.ctaButton}>
                    Order Now
                  </a>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <motion.div
              className={styles.ctaContent}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Ready to Enjoy Delicious Meals?</h2>
              <p>
                Contact us to start your weekly meal delivery or place a takeaway order. 
                We'll work with you to create the perfect menu for your needs.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/#contact" className={styles.primaryButton}>Get Started</a>
                <a href="/" className={styles.secondaryButton}>View All Services</a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
