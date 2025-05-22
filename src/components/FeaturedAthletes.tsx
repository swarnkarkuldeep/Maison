
import { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const athletes = [
  {
    id: 1,
    name: "Alexandre Laurent",
    sport: "Tennis",
    image: "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?auto=format&fit=crop&q=80&w=800",
    quote: "MAISON's equipment has elevated my performance to championship level."
  },
  {
    id: 2,
    name: "Victoria Chen",
    sport: "Swimming",
    image: "https://images.unsplash.com/photo-1522845015757-50bce044e5da?auto=format&fit=crop&q=80&w=800",
    quote: "The attention to detail in their swimwear gives me the competitive edge."
  },
  {
    id: 3,
    name: "Marcus Williams",
    sport: "Basketball",
    image: "https://images.unsplash.com/photo-1529688499411-262f191fe29e?auto=format&fit=crop&q=80&w=800",
    quote: "When performance meets luxury, MAISON is the only choice."
  }
];

export default function FeaturedAthletes() {
  useEffect(() => {
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
    
    const elements = document.querySelectorAll('.athlete-card');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl md:text-5xl fashion-header mb-6">ELITE ATHLETES CHOOSE MAISON</h2>
          <div className="w-20 h-1 bg-foreground mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {athletes.map((athlete, index) => (
            <div 
              key={athlete.id} 
              className={`athlete-card opacity-0`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-[2/3] mb-6 overflow-hidden">
                <img 
                  src={athlete.image} 
                  alt={athlete.name} 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-display text-2xl mb-1">{athlete.name}</h3>
              <p className="text-foreground/70 text-sm mb-4">{athlete.sport}</p>
              <ScrollArea className="h-24">
                <blockquote className="italic text-foreground/80">
                  "{athlete.quote}"
                </blockquote>
              </ScrollArea>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
