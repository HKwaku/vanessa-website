'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ImageSlideshow from '@/components/ImageSlideshow';
import ServicePageContent from '@/components/ServicePageContent';
import styles from '@/styles/ServicePage.module.css';

export default function Cakes() {
  // Cakes slideshow images
  const slideshowImages = [
    {
      src: '/images/cakes/sunset-ombre-cake.jpeg',
      alt: 'Beautiful sunset ombre celebration cake'
    },
    {
      src: '/images/cakes/red-velvet-cake.jpeg',
      alt: 'Elegant red velvet cake'
    },
    {
      src: '/images/cakes/carrot-cake.jpeg',
      alt: 'Decorated carrot cake with marzipan carrots'
    },
    {
      src: '/images/cakes/chocolate-caramel-cake.jpeg',
      alt: 'Decadent chocolate caramel cake'
    }
  ];

  const services = [
    {
      id: 'wedding-cakes',
      title: 'Wedding Cakes',
      description: 'Stunning multi-tiered wedding cakes designed to complement your special day. Each creation is a perfect blend of artistic design and exquisite Caribbean-inspired flavors.',
      features: [
        'Custom designs',
        'Flavor consultations',
        'Tiered creations',
        'Delivery & setup included'
      ],
      pricing: 'From £300',
      bookingText: 'Inquire About Wedding Cakes'
    },
    {
      id: 'celebration-cakes',
      title: 'Celebration Cakes',
      description: 'Custom cakes for birthdays, anniversaries, and all of life\'s special moments. From elegant to whimsical, each cake is freshly baked and beautifully decorated.',
      features: [
        'Birthday cakes',
        'Anniversary cakes',
        'Custom flavors',
        'Personalized designs'
      ],
      pricing: 'From £60',
      bookingText: 'Order Celebration Cakes'
    },
    {
      id: 'specialty-bakes',
      title: 'Specialty Bakes',
      description: 'Artisan breads, pastries, and baked goods featuring Caribbean influences. Perfect for special occasions or treating yourself to something extraordinary.',
      features: [
        'Artisan breads',
        'Pastries & tarts',
        'Caribbean-inspired treats',
        'Fresh daily baking'
      ],
      pricing: 'From £25',
      bookingText: 'Order Specialty Bakes'
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
            autoPlayInterval={4500}
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
              Celebratory <span className={styles.heroAccent}>Cakes &amp; Bakes</span>
            </motion.h1>
            <motion.p
              className={styles.heroDescription}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Stunning custom cakes and baked creations for every occasion.
              <br />
              Caribbean-inspired flavors, beautifully designed and freshly made to order.
            </motion.p>
          </div>
        </section>

        {/* Service Content */}
        <ServicePageContent
          title="Celebratory Cakes & Bakes"
          subtitle="Sweet Creations for Every Occasion"
          description="Each cake and baked creation is crafted with love, featuring Caribbean-inspired flavors and stunning designs. From grand wedding cakes to intimate celebration treats, every item is freshly made to order using premium ingredients."
          services={services}
          ctaTitle="Ready to Order Your Perfect Cake?"
          ctaDescription="Get in touch to discuss your vision. We offer flavor tastings and custom design consultations to ensure your cake is exactly what you imagined."
          primaryButtonText="Order Now"
          primaryButtonLink="/#contact"
        />
      </main>
      <Footer />
    </>
  );
}
