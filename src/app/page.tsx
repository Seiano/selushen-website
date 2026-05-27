import Hero from '@/components/home/Hero';
import VideoSection from '@/components/home/VideoSection';
import ProductCategories from '@/components/home/ProductCategories';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FactoryHighlights from '@/components/home/FactoryHighlights';
import Certifications from '@/components/home/Certifications';
import HonorsSection from '@/components/home/HonorsSection';
import CTABanner from '@/components/home/CTABanner';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductCategories />
      <WhyChooseUs />
      <Certifications />
      <HonorsSection />
      <FactoryHighlights />
      <VideoSection />
      <CTABanner />
    </>
  );
}
