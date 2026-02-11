import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import ImageSlideshow from '@/components/ImageSlideshow';
import ServicesOverview from '@/components/ServicesOverview';
import Contact from '@/components/Contact';

export default function Home() {
  // Homepage slideshow images
  const slideshowImages = [
    { 
      src: '/images/events/event11.jpeg', 
      alt: '' },
    {
      src: '/images/events/event1.jpeg',
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
    { src: '/images/food/takeaway0.jpeg', alt: '' },
    { src: '/images/food/takeaway1.jpeg', alt: '' },
    { src: '/images/food/takeaway3.jpeg', alt: '' },
    { src: '/images/food/event11.jpeg', alt: '' },
  ];

  return (
    <main>
      <Navigation></Navigation>
      <Hero
        backgroundImages={slideshowImages}
        backgroundAutoPlayInterval={5000}
      />
      <About />
      
      {/* Image Slideshow between About and Services */}
      <ImageSlideshow 
        images={slideshowImages}
        height="600px"
        autoPlayInterval={4000}
        showControls={true}
      />
      
      <ServicesOverview />
      <Contact />
    </main>
  );
}