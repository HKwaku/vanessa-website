'use client';

import { Instagram, Mail, Phone } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h3 className={styles.brandName}>Vanessa Haughton</h3>
            <p className={styles.tagline}>
              BBC Masterchef 2022 · Creator of Set the Table
            </p>
            <p className={styles.description}>
              Caribbean cuisine with influences from all over the world,
              bringing restaurant-quality food and memorable experiences to your table.
            </p>
          </div>

          <div className={styles.links}>
            <h4>Services</h4>
            <ul>
              <li><a href="/private-dining">Private Dining Experiences</a></li>
              <li><a href="/takeaway">Take Away Services</a></li>
              <li><a href="/cakes">Celebratory Cakes & Bakes</a></li>
            </ul>
          </div>

          <div className={styles.links}>
            <h4>More</h4>
            <ul>
              <li><a href="/recipes">Recipes</a></li>
              <li><a href="#about">About Vanessa</a></li>
              <li><a href="#services">All Services</a></li>
            </ul>
          </div>

          <div className={styles.links}>
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="https://wa.me/447563576373" target="_blank" rel="noopener noreferrer">
                  <Phone size={16} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:wesetthetable@gmail.com">
                  <Mail size={16} />
                  Email Us
                </a>
              </li>
              <li>
                <a href="https://instagram.com/setthetable.food" target="_blank" rel="noopener noreferrer">
                  <Instagram size={16} />
                  Instagram
                </a>
              </li>
              <li><a href="#contact">Get in Touch</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Vanessa Haughton. All rights reserved.</p>
          <p className={styles.credit}>Crafted with passion for exceptional food experiences</p>
        </div>
      </div>
    </footer>
  );
}
