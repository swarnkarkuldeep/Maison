
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";

export default function CareerSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1024" 
                alt="Fashion designer working"
                className="w-full object-cover aspect-[4/3]"
              />
              <div className="absolute bottom-4 left-4">
                <span className="font-display text-sm bg-background/80 backdrop-blur-sm px-2 py-1">
                  CAREER
                </span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="font-display text-4xl md:text-5xl fashion-header mb-8">JOIN OUR HOUSE</h2>
            <p className="text-foreground/70 mb-6 max-w-lg">
              Since its inception by Hubert De Givenchy in 1952, the house has continued to innovate 
              and redefine what luxury means. Join a team passionate about craftsmanship, design and 
              creating lasting impact in the world of high fashion.
            </p>
            <div className="mt-8">
              <Link to="/careers" className="group inline-flex items-center">
                <span className="font-display text-lg fashion-subheader mr-2 group-hover:underline">VIEW OUR TEAM</span>
                <ArrowDown className="h-4 w-4 transform group-hover:translate-y-1 transition" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 border-b border-foreground/10 mt-20"></div>
    </section>
  );
}
