
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import NewsletterSection from "@/components/home/NewsletterSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main className="pt-16"> {/* Add padding top to account for fixed header */}
        <HeroSection />
        <CategoriesSection />
        <FeaturedProducts />
        <AboutSection />
        <TestimonialsSection />
        <GalleryPreview />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
