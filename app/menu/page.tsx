'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Star } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import styles from '@/styles/Menu.module.css';

export default function Menu() {
  const starters = [
    {
      name: 'Saltfish Fritters',
      quantity: '3 pieces',
      price: '£4',
      description: 'Crispy cod fritters cooked with caramelised onions and peppers, served with pickled carrot purée',
      popular: true,
      image: null
    },
    {
      name: 'Sorrel Glazed Chicken Wings',
      quantity: '4 pieces',
      price: '£4',
      description: '',
      image: '/images/food/chicken-wings-platter.jpeg'
    },
    {
      name: 'Tamarind, Honey & Ginger Lamb Ribs',
      quantity: '2 pieces',
      price: '£4',
      description: '',
      image: '/images/food/chicken-wings-platter.jpeg'
    },
    {
      name: 'Mini Beef Patties',
      quantity: '2 pieces',
      price: '£4',
      description: '',
      popular: true,
      image: null
    }
  ];

  const mains = [
    {
      name: 'Curry Goat',
      price: '£14',
      description: 'Caribbean classic, fork tender meat cooked in an aromatic curry sauce',
      popular: true,
      image: null
    },
    {
      name: 'Jerk Chicken',
      price: '£14',
      description: '24hr marinated jerk finished with bell peppers and spring onions',
      image: '/images/food/jerk-chicken-rice.jpeg'
    },
    {
      name: 'Pollo a la Brasa',
      price: '£14',
      description: 'Soy and garlic roasted chicken with a zingy green sauce',
      image: '/images/food/lamb-chops-plated.jpeg'
    },
    {
      name: 'Double Dose of Pulses',
      price: '£14',
      description: 'Red lentil dal served alongside roasted pumpkin, coconut and chickpea sauce',
      image: '/images/food/focaccia-tomatoes.jpeg'
    }
  ];

  const desserts = [
    {
      name: 'Sticky Toffee Pudding',
      price: '£6',
      description: 'Served with clotted cream',
      image: '/images/cakes/chocolate-caramel-cake.jpeg'
    },
    {
      name: 'Hibiscus & Vanilla baked Cheesecake',
      price: '£6',
      description: 'Served with clotted cream',
      image: '/images/cakes/sunset-ombre-cake.jpeg'
    },
    {
      name: 'Apple Crumble Cake',
      price: '£6',
      description: 'Served with clotted cream',
      image: '/images/cakes/carrot-cake.jpeg'
    }
  ];

  return (
    <>
      <Navigation />
      <main className={styles.page}>
        {/* Hero Section - White Background */}
        <section className={styles.heroWhite}>
          <div className={styles.heroContainer}>
            <motion.a 
              href="/takeaway"
              className={styles.backLink}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ArrowLeft size={20} />
              Back to Take Away Services
            </motion.a>

            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Our
              <br />
              <span className={styles.accent}>Menu</span>
            </motion.h1>

            <motion.p
              className={styles.heroDescription}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Authentic Caribbean flavors with global influences.
              <br />
              All dishes prepared fresh with premium ingredients.
            </motion.p>
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
                    {item.image && (
                      <div className={styles.itemImage}>
                        <img 
                          src={item.image}
                          alt={item.name}
                          className={styles.foodImage}
                        />
                      </div>
                    )}
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
                    {item.image && (
                      <div className={styles.itemImage}>
                        <img 
                          src={item.image}
                          alt={item.name}
                          className={styles.foodImage}
                        />
                      </div>
                    )}
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
                    {item.image && (
                      <div className={styles.itemImage}>
                        <img 
                          src={item.image}
                          alt={item.name}
                          className={styles.foodImage}
                        />
                      </div>
                    )}
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
                Contact us to place your order or discuss our weekly meal delivery service.
                <br />
                Starting at £15 per serving with custom menu options available.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/#contact" className={styles.primaryButton}>Order Now</a>
                <a href="/takeaway" className={styles.secondaryButton}>Back to Services</a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
