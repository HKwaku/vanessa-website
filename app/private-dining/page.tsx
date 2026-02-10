'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ImageSlideshow from '@/components/ImageSlideshow';
import ServicePageContent from '@/components/ServicePageContent';
import styles from '@/styles/ServicePage.module.css';

export default function PrivateDining() {
  // Private dining slideshow images
  const slideshowImages = [
    {
      src: '/images/events/event1.jpeg',
      alt: ''
    },
    {
      src: '/images/events/event2.jpeg',
      alt: ''
    },
    {
      src: '/images/events/event3.jpeg',
      alt: ''
    },
    {
      src: '/images/events/event4.jpeg',
      alt: ''
    },
    {
      src: '/images/events/event5.jpeg',
      alt: ''
    },
    {
      src: '/images/events/event6.jpeg',
      alt: ''
    },
    {
      src: '/images/events/event7.jpeg',
      alt: ''
    },
    {
      src: '/images/events/event8.jpeg',
      alt: ''
    },
    {
      src: '/images/events/event9.jpeg',
      alt: ''
    },
    {
      src: '/images/events/event10.jpeg',
      alt: ''
    },
  ];

  const services = [
    {
      id: 'supper-clubs',
      title: 'Supper Clubs',
      description: 'Join Vanessa for intimate, themed dining experiences in unique London venues. Each supper club features a carefully curated menu celebrating Caribbean cuisine with global influences.',
      features: [
        'Themed seasonal menus',
        'Intimate group settings',
        'Unique London venues',
        'Wine pairings available'
      ],
      pricing: '£65-85 per person',
      bookingText: 'Book Supper Clubs'
    },
    {
      id: 'private-chef',
      title: 'Private Chef Services',
      description: 'Experience restaurant-quality dining in the comfort of your home. Vanessa brings her culinary expertise directly to you, handling everything from menu planning to service.',
      features: [
        'Bespoke menu creation',
        'In-home service',
        'Professional presentation',
        'Dietary accommodations'
      ],
      pricing: 'From £500 (for up to 8 guests)',
      bookingText: 'Book Private Chef Services'
    },
    {
      id: 'event-catering',
      title: 'Event Catering',
      description: 'From intimate dinner parties to grand celebrations, we provide full-service catering that showcases the best of Caribbean cuisine with sophisticated presentation.',
      features: [
        'Corporate events',
        'Wedding catering',
        'Birthday celebrations',
        'Custom menu planning'
      ],
      pricing: 'Custom quotes based on requirements',
      bookingText: 'Book Event Catering'
    }
  ];

  return (
    <>
      <Navigation />
      <main>
        {/* Slideshow Hero */}
        <section className={styles.heroSlideshow}>
          <ImageSlideshow 
            images={slideshowImages}
            height="100%"
            autoPlayInterval={5000}
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
              Private <span className={styles.heroAccent}>Dining</span>
            </motion.h1>
            <motion.p
              className={styles.heroDescription}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Intimate supper clubs, bespoke private chef services, and event catering.
              <br />
              Restaurant-quality Caribbean cuisine brought directly to you.
            </motion.p>
          </div>
        </section>

        {/* Service Content */}
        <ServicePageContent
          title="Set the Table"
          subtitle="Private Dining Excellence"
          description="Vanessa's signature private dining venture brings restaurant-quality Caribbean cuisine with global influences directly to you. Whether it's an intimate supper club, bespoke private chef service, or grand event catering, every detail is crafted to perfection."
          services={services}
          ctaTitle="Ready to Create Your Perfect Dining Experience?"
          ctaDescription="Contact us to discuss your event and receive a personalized quote. From intimate gatherings to grand celebrations, we'll create an unforgettable culinary experience."
          primaryButtonText="Get in Touch"
          primaryButtonLink="/#contact"
        />
      </main>
      <Footer />
    </>
  );
}
