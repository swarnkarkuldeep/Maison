
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CollectionSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <h2 className="font-display text-4xl md:text-5xl fashion-header">LATEST COLLECTIONS</h2>
          <span className="font-display fashion-subheader mt-4 md:mt-0">20/24</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Collection Item 1 */}
          <div className="group">
            <div className="aspect-[3/4] bg-secondary overflow-hidden mb-4">
              <img 
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1024" 
                alt="Fashion model in black outfit"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-display text-xl fashion-subheader">VOYOU CHAIN</h3>
              <span className="text-foreground/70 text-sm">01/04</span>
            </div>
            <p className="text-foreground/70 text-sm mt-2 max-w-sm">
              Chain joins the house's hit handbags, conveying a feeling of temptation and desire 
              for sophisticated nonchalance
            </p>
            <div className="mt-4">
              <Button 
                asChild 
                variant="minimal" 
                className="font-display fashion-subheader text-sm mt-4"
              >
                <Link to="/collections">VIEW COLLECTION</Link>
              </Button>
            </div>
          </div>
          
          {/* Collection Item 2 */}
          <div className="group md:mt-24">
            <div className="aspect-[3/4] bg-secondary overflow-hidden mb-4">
              <img 
                src="https://images.unsplash.com/photo-1549062572-544a64fb0c56?auto=format&fit=crop&q=80&w=1024" 
                alt="Fashion model in white coat"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-display text-xl fashion-subheader">AVENIR LINE</h3>
              <span className="text-foreground/70 text-sm">02/04</span>
            </div>
            <p className="text-foreground/70 text-sm mt-2 max-w-sm">
              A modern take on classic tailoring, blending structure with fluidity for 
              the contemporary wardrobe
            </p>
            <div className="mt-4">
              <Button 
                asChild 
                variant="minimal" 
                className="font-display fashion-subheader text-sm mt-4"
              >
                <Link to="/collections">VIEW COLLECTION</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
