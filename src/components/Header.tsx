
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, Menu, X, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast({
        title: "Search initiated",
        description: `Searching for "${searchQuery}"`,
      });
      // In a real app, you would redirect to search results page
      console.log("Searching for:", searchQuery);
    }
  };

  const addToWishlist = () => {
    toast({
      title: "Added to Wishlist",
      description: "The item has been added to your wishlist",
    });
  };

  return (
    <>
      <header 
        className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 shadow-sm backdrop-blur-sm py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center relative">
            {/* Logo - visible on all devices */}
            <Link to="/" className="text-2xl font-bold tracking-tight z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
              MAISON
            </Link>
            
            {/* Left navigation on desktop */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link 
                    to="/products" 
                    className={`text-sm px-4 py-2 transition ${isActive('/products') ? 'text-foreground' : 'text-foreground/80 hover:text-foreground'}`}
                  >
                    PRODUCTS
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link 
                    to="/collections" 
                    className={`text-sm px-4 py-2 transition ${isActive('/collections') ? 'text-foreground' : 'text-foreground/80 hover:text-foreground'}`}
                  >
                    COLLECTIONS
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Placeholder to ensure correct spacing */}
            <div className="hidden md:block invisible">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <span className="text-sm px-4 py-2">PLACEHOLDER</span>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <span className="text-sm px-4 py-2">PLACEHOLDER</span>
                </NavigationMenuItem>
              </NavigationMenuList>
            </div>
            
            {/* Right navigation on desktop */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link 
                    to="/designers" 
                    className={`text-sm px-4 py-2 transition ${isActive('/designers') ? 'text-foreground' : 'text-foreground/80 hover:text-foreground'}`}
                  >
                    DESIGNERS
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link 
                    to="/stores" 
                    className={`text-sm px-4 py-2 transition ${isActive('/stores') ? 'text-foreground' : 'text-foreground/80 hover:text-foreground'}`}
                  >
                    STORES
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Mobile header */}
            <div className="flex items-center justify-between w-full md:hidden">
              <button 
                className="text-foreground"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu />
              </button>
              <div className="invisible">
                <Menu />
              </div>
            </div>
            
            {/* Desktop actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Sheet open={searchOpen} onOpenChange={setSearchOpen}>
                <SheetTrigger asChild>
                  <button className="text-foreground/80 hover:text-foreground transition">
                    <Search className="h-4 w-4" />
                  </button>
                </SheetTrigger>
                <SheetContent side="top" className="h-32">
                  <form onSubmit={handleSearch} className="flex items-center gap-2 pt-8">
                    <Input 
                      placeholder="Search products..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1"
                      autoFocus
                    />
                    <Button type="submit">Search</Button>
                  </form>
                </SheetContent>
              </Sheet>
              <button onClick={addToWishlist} className="text-foreground/80 hover:text-foreground transition">
                <Heart className="h-4 w-4" />
              </button>
              <Link to="/profile" className="text-foreground/80 hover:text-foreground transition">
                <User className="h-4 w-4" />
              </Link>
              <Link to="/cart" className="text-foreground/80 hover:text-foreground transition">
                <ShoppingBag className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background z-50 flex flex-col"
          >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Link to="/">
                <h1 className="text-xl font-bold tracking-tight">MAISON</h1>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex-1 container mx-auto px-4 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-8"
              >
                <Link to="/" className="block text-3xl font-display">HOME</Link>
                <Link to="/products" className="block text-3xl font-display">PRODUCTS</Link>
                <Link to="/collections" className="block text-3xl font-display">COLLECTIONS</Link>
                <Link to="/designers" className="block text-3xl font-display">DESIGNERS</Link>
                <Link to="/stores" className="block text-3xl font-display">STORES</Link>
                <Link to="/contact" className="block text-3xl font-display">CONTACT</Link>
              </motion.div>
            </div>
            
            <div className="container mx-auto px-4 py-8 space-y-6">
              <div className="flex justify-between">
                <Link to="/profile" className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
                <Link to="/cart" className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  <span>Cart</span>
                </Link>
              </div>
              
              <Button className="w-full" variant="outline" onClick={() => setMobileMenuOpen(false)}>CONTINUE SHOPPING</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
