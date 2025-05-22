
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CollectionSection from "@/components/CollectionSection";
import CareerSection from "@/components/CareerSection";
import ManifestoSection from "@/components/ManifestoSection";
import NewsletterSection from "@/components/NewsletterSection";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground font-body"
    >
      <Header />
      
      <main className="overflow-hidden">
        <HeroSection />
        <CollectionSection />
        <CareerSection />
        <ManifestoSection />
        <NewsletterSection />
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
