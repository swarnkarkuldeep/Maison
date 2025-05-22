
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  useEffect(() => {
    // Animation for hero elements on page load
    const heroTitle = document.querySelector(".hero-title");
    const heroSubtitle = document.querySelector(".hero-subtitle");
    const heroImage = document.querySelector(".hero-image");
    
    if (heroTitle) {
      heroTitle.classList.add("animate-fade-in");
    }
    
    if (heroSubtitle) {
      setTimeout(() => {
        heroSubtitle.classList.add("animate-fade-in");
      }, 300);
    }
    
    if (heroImage) {
      setTimeout(() => {
        heroImage.classList.add("animate-fade-in");
      }, 600);
    }
    
    return () => {
      // Cleanup animations if needed
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="w-full h-full bg-gradient-to-b from-transparent to-background/80"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 pt-20">
        <h1 className="hero-title font-display text-7xl sm:text-9xl md:text-[12rem] fashion-header tracking-tighter leading-none mb-6 opacity-0 transition-opacity duration-700">
          MAISON
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="space-y-4">
            <h2 className="hero-subtitle font-display text-4xl md:text-6xl fashion-subheader opacity-0 transition-opacity duration-700">
              ELITE PERFORMANCE.<br />LUXURY DESIGN.
            </h2>
            <p className="hero-subtitle text-foreground/70 max-w-md fashion-text mt-4 opacity-0 transition-opacity duration-700">
              Discover the pinnacle of athletic luxury. MAISON crafts premium sportswear and equipment 
              that blends performance engineering with sophisticated aesthetics.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button
                asChild
                className="group border border-foreground/20 bg-white text-black hover:bg-black hover:text-white transition-all duration-300"
              >
                <Link to="/products">
                  SHOP NOW 
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent hover:bg-transparent"
              >
                <Link to="/collections">EXPLORE COLLECTIONS</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="hero-image aspect-[2/3] bg-secondary overflow-hidden opacity-0 transition-opacity duration-700">
              <img 
                src="https://i.pinimg.com/736x/b0/74/27/b07427975183314beaca81536e2a3d94.jpg"
                alt="Fashion model in white outfit"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -right-4 -bottom-4 bg-black p-2">
              <span className="font-display fashion-subheader text-sm">COLLECTION SS24</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <div className="animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
