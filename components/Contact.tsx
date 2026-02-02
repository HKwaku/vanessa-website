'use client';

import { motion } from 'framer-motion';
import { Mail, Instagram, Send, Phone } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.sectionLabel}>
            <Send size={18} />
            <span>Get in Touch</span>
          </div>

          <h2 className={styles.heading}>
            Let's Create Something
            <br />
            <span className={styles.accent}>Delicious Together</span>
          </h2>

          <p className={styles.description}>
            Whether you're interested in ordering a custom cake, booking catering for your event, 
            starting meal delivery, joining a supper club, or booking a private chef—we'd love 
            to hear from you.
          </p>

          <div className={styles.contactMethods}>
            <a 
              href="https://wa.me/447727202150" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.method} ${styles.whatsapp}`}
            >
              <Phone className={styles.methodIcon} />
              <div>
                <h4>WhatsApp</h4>
                <p>+44 77 27202150</p>
              </div>
            </a>

            <a href="mailto:wesetthetable@gmail.com" className={styles.method}>
              <Mail className={styles.methodIcon} />
              <div>
                <h4>Email</h4>
                <p>wesetthetable@gmail.com</p>
              </div>
            </a>

            <a 
              href="https://instagram.com/setthetable.food" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.method}
            >
              <Instagram className={styles.methodIcon} />
              <div>
                <h4>Instagram</h4>
                <p>@setthetable.food</p>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          className={styles.formArea}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form className={styles.form} action="mailto:wesetthetable@gmail.com" method="post" encType="text/plain">
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="service">Interested In</label>
              <select id="service" name="service">
                <option value="">Select a service</option>
                <optgroup label="Private Dining Experiences">
                  <option value="custom-cakes">Custom Cakes</option>
                  <option value="event-catering">Event Catering</option>
                  <option value="supper-club">Supper Club</option>
                  <option value="private-chef">Private Chef Services</option>
                </optgroup>
                <optgroup label="Meal Services">
                  <option value="meal-delivery">Meal Delivery Service</option>
                </optgroup>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
