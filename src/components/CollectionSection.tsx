
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
          {/* Collection Item 1 - Tennis Collection */}
          <div className="group">
            <div className="aspect-[3/4] bg-secondary overflow-hidden mb-4">
              <img 
                src="https://i.pinimg.com/736x/b9/f1/8e/b9f18eb111c5b69f5a15fe41cee2d28a.jpg" 
                alt="Tennis player in action"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-display text-xl fashion-subheader">COURT MASTERS</h3>
              <span className="text-foreground/70 text-sm">SS 2024</span>
            </div>
            <p className="text-foreground/70 text-sm mt-2 max-w-sm">
              High-performance tennis apparel designed for agility and style on the court.
              Engineered for champions who demand both form and function.
            </p>
            <div className="mt-4">
              <Button 
                asChild 
                variant="minimal" 
                className="font-display fashion-subheader text-sm mt-4"
              >
                <Link to="/collections#collection-1">VIEW COLLECTION</Link>
              </Button>
            </div>
          </div>
          
          {/* Collection Item 2 - Basketball Collection */}
          <div className="group md:mt-24">
            <div className="aspect-[3/4] bg-secondary overflow-hidden mb-4">
              <img 
                src="https://i.pinimg.com/736x/34/f5/3c/34f53ce2c963bec2c3e825ec790e9316.jpg" 
                alt="Basketball player dunking"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-display text-xl fashion-subheader">URBAN HOOPS</h3>
              <span className="text-foreground/70 text-sm">SS 2024</span>
            </div>
            <p className="text-foreground/70 text-sm mt-2 max-w-sm">
              Street-ready basketball gear that transitions from the court to the city.
              Performance meets urban style in every piece.
            </p>
            <div className="mt-4">
              <Button 
                asChild 
                variant="minimal" 
                className="font-display fashion-subheader text-sm mt-4"
              >
                <Link to="/collections#collection-2">VIEW COLLECTION</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
