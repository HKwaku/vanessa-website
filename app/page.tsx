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
      src: '/images/events/supper-club-dining.jpeg',
      alt: 'Elegant supper club dining experience'
    },
    {
      src: '/images/events/caribbean-rice-platter.jpeg',
      alt: 'Caribbean rice platter being served'
    },
    {
      src: '/images/food/jerk-chicken-rice.jpeg',
      alt: 'Jerk chicken with rice and peas'
    },
    {
      src: '/images/events/private-chef-service.jpeg',
      alt: 'Private chef service at intimate gathering'
    },
    {
      src: '/images/cakes/sunset-ombre-cake.jpeg',
      alt: 'Beautiful sunset ombre celebration cake'
    },
    {
      src: '/images/food/lamb-chops-plated.jpeg',
      alt: 'Plated lamb chops with roasted potatoes'
    }
  ];

  return (
    <main>
      <Navigation></Navigation>
      <Hero />
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