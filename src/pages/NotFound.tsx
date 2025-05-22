
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-display text-7xl md:text-9xl fashion-header mb-8">404</h1>
            <p className="text-foreground/70 text-lg mb-12">
              The page you're looking for cannot be found
            </p>
            <Link 
              to="/" 
              className="inline-block border border-foreground px-8 py-3 font-display fashion-subheader text-sm hover:bg-foreground hover:text-background transition-colors"
            >
              RETURN TO HOMEPAGE
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
