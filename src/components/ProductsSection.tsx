import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const sports = [
  { id: 1, name: "Tennis" },
  { id: 2, name: "Basketball" },
  { id: 3, name: "Football" },
  { id: 4, name: "Golf" },
  { id: 5, name: "Swimming" },
  { id: 6, name: "Running" },
];

const products = [
  {
    id: 1,
    name: "Elite Performance Tennis Racket",
    category: "Tennis",
    price: "$495.00",
    image: "https://images.unsplash.com/photo-1617229921943-8c3e4eefc7f0?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    name: "Premium Court Shoes",
    category: "Tennis",
    price: "$320.00",
    image: "https://images.unsplash.com/photo-1588361861040-ac9b1018dcfa?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    name: "Pro Basketball",
    category: "Basketball",
    price: "$195.00",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    name: "Signature Series Basketball Shoes",
    category: "Basketball",
    price: "$380.00",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 5,
    name: "Tournament Football",
    category: "Football",
    price: "$240.00",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 6,
    name: "Carbon Fiber Golf Clubs Set",
    category: "Golf",
    price: "$2,950.00",
    image: "https://images.unsplash.com/photo-1535131749006-b7d58e7896b5?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 7,
    name: "Hydrodynamic Swim Goggles",
    category: "Swimming",
    price: "$120.00",
    image: "https://images.unsplash.com/photo-1576663892698-8a49a16ff96e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 8,
    name: "Ultralight Running Shoes",
    category: "Running",
    price: "$290.00",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=600",
  },
];

export default function ProductsSection() {
  const [selectedSport, setSelectedSport] = useState("All");
  const [visibleProducts, setVisibleProducts] = useState(products);
  const [animateProducts, setAnimateProducts] = useState(false);

  useEffect(() => {
    // Initial animation
    setTimeout(() => {
      setAnimateProducts(true);
    }, 300);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.product-card');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  useEffect(() => {
    setAnimateProducts(false);
    setTimeout(() => {
      if (selectedSport === "All") {
        setVisibleProducts(products);
      } else {
        setVisibleProducts(products.filter(product => product.category === selectedSport));
      }
      setTimeout(() => setAnimateProducts(true), 100);
    }, 300);
  }, [selectedSport]);

  return (
    <section className="py-20 bg-background relative">
      <div className="absolute left-0 top-40 vertical-text">
        <span className="text-xs tracking-widest text-foreground/40 uppercase">MAISON SPORTS</span>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="mb-12 overflow-hidden">
          <h2 className="font-display text-5xl md:text-6xl fashion-header mb-8 relative">
            <span className="inline-block transform translate-y-[-100%] opacity-0 animate-[slide-down_0.6s_ease_forwards]">PREMIUM</span>
            <span className="block transform translate-y-[-100%] opacity-0 animate-[slide-down_0.6s_0.2s_ease_forwards]">SPORTS GEAR</span>
          </h2>
          <p className="text-foreground/70 max-w-md fashion-text transform translate-y-6 opacity-0 animate-[fade-up_0.8s_0.4s_ease_forwards]">
            Experience the perfect fusion of athletic performance and luxury design with our expertly crafted sports equipment and apparel.
          </p>
        </div>
        
        <div className="mb-12 overflow-x-auto scrollbar-hide">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem className="basis-auto">
                <Button 
                  variant={selectedSport === "All" ? "white" : "outline"} 
                  onClick={() => setSelectedSport("All")}
                  className="min-w-20 mx-1"
                >
                  All
                </Button>
              </CarouselItem>
              {sports.map((sport) => (
                <CarouselItem key={sport.id} className="basis-auto">
                  <Button 
                    variant={selectedSport === sport.name ? "white" : "outline"} 
                    onClick={() => setSelectedSport(sport.name)}
                    className="min-w-24 mx-1"
                  >
                    {sport.name}
                  </Button>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleProducts.map((product, index) => (
            <div 
              key={product.id}
              className={`product-card opacity-0 ${animateProducts ? 'opacity-100 transform translate-y-0' : 'transform translate-y-8'}`}
              style={{ 
                transition: `all 0.5s ease-out ${index * 0.1}s` 
              }}
            >
              <Link to={`/products/${product.id}`} className="block group">
                <Card className="border-0 overflow-hidden bg-card">
                  <div className="h-80 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-xs text-foreground/60 mb-1">{product.category}</p>
                    <h3 className="font-medium text-lg mb-2 group-hover:text-primary/90 transition-colors">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <p className="font-display text-xl">{product.price}</p>
                      <Button size="sm" variant="black" className="rounded-full">
                        +
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button
            asChild
            variant="minimal"
            className="font-display fashion-subheader text-sm"
          >
            <Link to="/products">VIEW ALL PRODUCTS</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
