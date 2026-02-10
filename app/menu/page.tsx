'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Star, Truck, Check } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ImageSlideshow from '@/components/ImageSlideshow';
import styles from '@/styles/Menu.module.css';

const heroImages = [
  { src: '/images/food/takeaway2.jpeg', alt: '' },
  { src: '/images/food/takeaway1.jpeg', alt: '' },
  { src: '/images/food/takeaway3.jpeg', alt: '' },
  { src: '/images/food/takeaway4.jpeg', alt: '' },
  { src: '/images/food/takeaway5.jpeg', alt: '' },
  { src: '/images/food/takeaway6.jpeg', alt: '' },
  { src: '/images/food/takeaway7.jpeg', alt: '' },
];

const starters = [
  { name: 'Saltfish Fritters', quantity: '3 pieces', description: 'Crispy cod fritters cooked with caramelised onions and peppers, served with pickled carrot purée', popular: true },
  { name: 'Sorrel Glazed Chicken Wings', quantity: '4 pieces', description: '' },
  { name: 'Tamarind, Honey & Ginger Lamb Ribs', quantity: '2 pieces', description: '' },
  { name: 'Mini Beef Patties', quantity: '2 pieces', description: '', popular: true },
];

const mains = [
  { name: 'Curry Goat', description: 'Caribbean classic, fork tender meat cooked in an aromatic curry sauce', popular: true },
  { name: 'Jerk Chicken', description: '24hr marinated jerk finished with bell peppers and spring onions' },
  { name: 'Pollo a la Brasa', description: 'Soy and garlic roasted chicken with a zingy green sauce' },
  { name: 'Double Dose of Pulses', description: 'Red lentil dal served alongside roasted pumpkin, coconut and chickpea sauce' },
];

const desserts = [
  { name: 'Sticky Toffee Pudding', description: 'Served with clotted cream' },
  { name: 'Hibiscus & Vanilla Baked Cheesecake', description: 'Served with clotted cream' },
  { name: 'Apple Crumble Cake', description: 'Served with clotted cream' },
];

const deliveryFeatures = [
  'Weekly meal delivery service',
  'Caribbean cuisine with global influences',
  'Custom menus based on your tastes',
  'Dietary needs accommodated',
  'Fresh ingredients, expertly prepared',
  'Convenient & time-saving',
];

export default function Menu() {
  return (
    <>
      <Navigation />
      <main className={styles.page}>

        {/* Hero Slideshow */}
        <section className={styles.heroSlideshow}>
          <ImageSlideshow
            images={heroImages}
            height="100%"
            autoPlayInterval={4000}
            showControls={true}
          />
          <div className={styles.heroOverlay}>
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
              Menu &amp; <span className={styles.accent}>Take Away</span>
            </motion.h1>
            <motion.p
              className={styles.heroDescription}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Authentic Caribbean flavors with global influences.
              <br />
              Fresh, premium ingredients &mdash; delivered to your door or available for pickup.
            </motion.p>
          </div>
        </section>

        {/* Delivery Info Strip */}
        <section className={styles.deliveryStrip}>
          <div className={styles.container}>
            <motion.div
              className={styles.deliveryCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.deliveryHeader}>
                <div className={styles.deliveryIcon}>
                  <Truck size={28} />
                </div>
                <div>
                  <h2>Weekly Meal Delivery</h2>
                  <p className={styles.deliveryPricing}>Starting at £14 per serving</p>
                </div>
              </div>
              <p className={styles.deliveryDescription}>
                Restaurant-quality Caribbean meals with global influences delivered to your door.
                A week&apos;s worth of gourmet meals prepared fresh, tailored to your preferences.
              </p>
              <div className={styles.deliveryFeatures}>
                {deliveryFeatures.map((feature) => (
                  <div key={feature} className={styles.deliveryFeature}>
                    <Check size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Menu Sections */}
        <section className={styles.menuSection}>
          <div className={styles.container}>

            {/* Starters */}
            <motion.div
              className={styles.menuCategory}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={styles.categoryTitle}>Starters</h2>
              <p className={styles.categoryPrice}>All £4</p>

              <div className={styles.itemsGrid}>
                {starters.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className={styles.menuItem}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <div className={styles.itemHeader}>
                      <h3 className={styles.itemName}>
                        {item.name} {item.quantity && `(${item.quantity})`}
                        {item.popular && <Star size={16} className={styles.starIcon} />}
                      </h3>
                    </div>
                    {item.description && (
                      <p className={styles.itemDescription}>{item.description}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mains */}
            <motion.div
              className={styles.menuCategory}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={styles.categoryTitle}>Mains</h2>
              <p className={styles.categoryPrice}>All £14</p>

              <div className={styles.itemsGrid}>
                {mains.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className={styles.menuItem}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <div className={styles.itemHeader}>
                      <h3 className={styles.itemName}>
                        {item.name}
                        {item.popular && <Star size={16} className={styles.starIcon} />}
                      </h3>
                    </div>
                    {item.description && (
                      <p className={styles.itemDescription}>{item.description}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Desserts */}
            <motion.div
              className={styles.menuCategory}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={styles.categoryTitle}>Dessert</h2>
              <p className={styles.categoryPrice}>All £6</p>
              <p className={styles.categoryNote}>Served with clotted cream</p>

              <div className={styles.itemsGrid}>
                {desserts.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className={styles.menuItem}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <div className={styles.itemHeader}>
                      <h3 className={styles.itemName}>{item.name}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

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
              <h2>Ready to Order?</h2>
              <p>
                Contact us to place your order or set up weekly meal delivery.
                <br />
                Starting at £14 per serving with custom menu options available.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/#contact" className={styles.primaryButton}>Order Now</a>
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
