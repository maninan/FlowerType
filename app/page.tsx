import { products } from '@/data/products';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import ProductGrid from '@/components/products/ProductGrid';
import FeaturesStrip from '@/components/home/FeaturesStrip';
import CustomizeSection from '@/components/home/CustomizeSection';
import AboutSection from '@/components/home/AboutSection';
import BlogSection from '@/components/home/BlogSection';
import ContactSection from '@/components/home/ContactSection';

import CatalogDownload from '@/components/home/CatalogDownload';
import ProvenProjects from '@/components/home/ProvenProjects';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ProductGrid initialProducts={products} />
      <FeaturesStrip />
      <CustomizeSection />
      <CatalogDownload />
      <AboutSection />
      <BlogSection />
      <ProvenProjects />
      <ContactSection />
    </>
  );
}
