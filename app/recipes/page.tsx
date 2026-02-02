'use client';

import { motion } from 'framer-motion';
import { ChefHat, Clock, Users, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import styles from '@/styles/Recipes.module.css';

const recipes = [
  {
    title: 'Caribbean Jerk Chicken',
    description: 'Authentic jerk chicken with a perfect blend of spices, scotch bonnet peppers, and aromatic herbs.',
    time: '45 mins',
    servings: '4-6',
    difficulty: 'Medium',
    image: 'Jerk Chicken',
    tags: ['Caribbean', 'Main Course', 'Spicy']
  },
  {
    title: 'Coconut Rice & Peas',
    description: 'Fragrant rice cooked in coconut milk with kidney beans, thyme, and Caribbean spices.',
    time: '30 mins',
    servings: '6-8',
    difficulty: 'Easy',
    image: 'Rice & Peas',
    tags: ['Caribbean', 'Side Dish', 'Vegan']
  },
  {
    title: 'Rum & Coconut Cake',
    description: 'Moist coconut cake infused with Caribbean rum and topped with cream cheese frosting.',
    time: '1 hour',
    servings: '8-10',
    difficulty: 'Medium',
    image: 'Rum Cake',
    tags: ['Caribbean', 'Dessert', 'Baking']
  },
  {
    title: 'Saltfish Fritters',
    description: 'Crispy Caribbean saltfish fritters with herbs, peppers, and a hint of lime.',
    time: '35 mins',
    servings: '4-6',
    difficulty: 'Medium',
    image: 'Fritters',
    tags: ['Caribbean', 'Appetizer', 'Seafood']
  },
  {
    title: 'Passion Fruit Cheesecake',
    description: 'Creamy cheesecake with a tangy passion fruit swirl and graham cracker crust.',
    time: '4 hours',
    servings: '8',
    difficulty: 'Hard',
    image: 'Cheesecake',
    tags: ['Dessert', 'Tropical', 'Baking']
  },
  {
    title: 'Curry Goat',
    description: 'Tender goat meat slow-cooked in aromatic Caribbean curry with potatoes and vegetables.',
    time: '2 hours',
    servings: '6',
    difficulty: 'Medium',
    image: 'Curry Goat',
    tags: ['Caribbean', 'Main Course', 'Traditional']
  }
];

export default function Recipes() {
  return (
    <>
      <Navigation />
      <main className={styles.page}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ChefHat className={styles.heroIcon} size={60} />
              <h1 className={styles.heroTitle}>
            
              Our <span className={styles.accent}>Recipes</span>
              </h1>
              <p className={styles.heroDescription}>
                Explore the flavors of Caribbean cuisine with global influences. 
                From traditional favorites to modern interpretations, each recipe 
                brings authentic taste and technique to your kitchen.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Coming Soon Notice */}
        <section className={styles.comingSoon}>
          <div className={styles.container}>
            <motion.div
              className={styles.noticeCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Recipes Coming Soon!</h2>
              <p>
                We're currently working on bringing you detailed recipes, cooking techniques, 
                and culinary tips from MasterChef contestant Vanessa Haughton. Check back soon 
                for our collection of Caribbean-inspired dishes with global influences.
              </p>
              <p className={styles.noticeSubtext}>
                In the meantime, you can experience these flavors through our services:
              </p>
              <div className={styles.noticeButtons}>
                <a href="/#services" className={styles.primaryButton}>View Our Services</a>
                <a href="/#contact" className={styles.secondaryButton}>Get in Touch</a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Preview Grid */}
        <section className={styles.recipesSection}>
          <div className={styles.container}>
            <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Recipe Preview
            </motion.h2>
            <p className={styles.sectionSubtitle}>
              A taste of what's to come...
            </p>

            <div className={styles.recipeGrid}>
              {recipes.map((recipe, index) => (
                <motion.div
                  key={recipe.title}
                  className={styles.recipeCard}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={styles.recipeImage}>
                    <span>{recipe.image}</span>
                    <div className={styles.difficultyBadge}>
                      {recipe.difficulty}
                    </div>
                  </div>

                  <div className={styles.recipeContent}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>

                    <div className={styles.recipeInfo}>
                      <div className={styles.infoItem}>
                        <Clock size={16} />
                        <span>{recipe.time}</span>
                      </div>
                      <div className={styles.infoItem}>
                        <Users size={16} />
                        <span>{recipe.servings}</span>
                      </div>
                    </div>

                    <div className={styles.tags}>
                      {recipe.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>

                    <button className={styles.comingSoonButton} disabled>
                      Recipe Coming Soon
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className={styles.newsletter}>
          <div className={styles.container}>
            <motion.div
              className={styles.newsletterContent}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Be the First to Know</h2>
              <p>
                Want to be notified when we launch our recipe collection? 
                Get in touch and we'll let you know when it's ready!
              </p>
              <a href="/#contact" className={styles.notifyButton}>
                Contact Us
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
