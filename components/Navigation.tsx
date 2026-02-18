'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { 
      label: 'Services', 
      href: '/#services',
      dropdown: [
        { label: 'Private Dining Experiences', href: '/private-dining' },
        { label: 'Takeaway Menu', href: '/menu' },
        { label: 'Celebratory Cakes & Bakes', href: '/cakes' }
      ]
    },
    { label: 'Recipes', href: '/recipes' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <motion.nav 
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.container}>
        <motion.a 
          href="/" 
          className={styles.logo}
          whileHover={{ scale: 1.02 }}
        >
          Vanessa Haughton
        </motion.a>

        <button 
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.open : ''}></span>
          <span className={menuOpen ? styles.open : ''}></span>
          <span className={menuOpen ? styles.open : ''}></span>
        </button>

        <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
          {navItems.map((item, i) => (
            item.dropdown ? (
              <div 
                key={item.label} 
                className={styles.dropdown}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <motion.a
                  href={item.href}
                  className={styles.navLink}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  whileHover={{ color: 'var(--terracotta)' }}
                >
                  {item.label}
                  <ChevronDown size={16} className={styles.chevron} />
                </motion.a>
                <div className={`${styles.dropdownMenu} ${servicesOpen ? styles.dropdownOpen : ''}`}>
                  {item.dropdown.map((subItem) => (
                    <a 
                      key={subItem.label}
                      href={subItem.href}
                      className={styles.dropdownItem}
                      onClick={() => setMenuOpen(false)}
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <motion.a
                key={item.label}
                href={item.href}
                className={styles.navLink}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                whileHover={{ color: 'var(--terracotta)' }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </motion.a>
            )
          ))}

          <a href="https://ratings.food.gov.uk/business/1561162/set-the-table" target="_blank" rel="noopener noreferrer" className={styles.hygieneBadge} aria-label="5 star food hygiene rating">
            <img 
              src="/images/fhrs-badge-5.svg" 
              alt="Food Hygiene Rating 5 - Very Good" 
              className={styles.hygieneBadgeImg}
            />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
