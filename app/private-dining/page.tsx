'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ImageSlideshow from '@/components/ImageSlideshow';
import ServicePageContent from '@/components/ServicePageContent';

export default function PrivateDining() {
  // Private dining slideshow images
  const slideshowImages = [
    {
      src: '/images/events/supper-club-dining.jpeg',
      alt: 'Intimate supper club dining experience'
    },
    {
      src: '/images/events/focaccia-tomatoes.jpeg',
      alt: 'Private chef preparing exquisite dishes'
    },
    {
      src: '/images/events/lamb-chops-plated.jpeg',
      alt: 'Large platter for event catering'
    },
    {
      src: '/images/food/chicken-wings-platter.jpeg',
      alt: 'Appetizers for private dining'
    },
    {
      src: '/images/food/lamb-chops-plated.jpeg',
      alt: 'Fine dining plated service'
    }
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
        <ImageSlideshow 
          images={slideshowImages}
          height="500px"
          autoPlayInterval={5000}
          showControls={true}
        />

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
