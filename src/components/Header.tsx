
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, Menu, X, User, Heart as HeartIcon } from "lucide-react";
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
import { useSearch } from "@/context/SearchContext";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { searchQuery, setSearchQuery, handleSearch } = useSearch();
  const location = useLocation();
  const { toast } = useToast();
  const { wishlist } = useWishlist();
  const { cartCount } = useCart();

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

  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    handleSearch(e, navigate);
    setSearchOpen(false);
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
          <div className="flex items-center justify-between relative">
            {/* Left navigation on desktop */}
            <NavigationMenu className="hidden md:flex flex-1">
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

            {/* Logo - always centered on desktop */}
            <div className="flex-1 flex justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10">
              <Link to="/" className="text-2xl font-bold tracking-tight">
                MAISON
              </Link>
            </div>

            {/* Right navigation and actions on desktop */}
            <div className="hidden md:flex flex-1 justify-end items-center space-x-4">
              <NavigationMenu>
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
              <div className="flex items-center space-x-2 ml-4">
                <Sheet open={searchOpen} onOpenChange={setSearchOpen}>
                  <SheetTrigger asChild>
                    <button className="text-foreground/80 hover:text-foreground transition">
                      <Search className="h-4 w-4" />
                    </button>
                  </SheetTrigger>
                  <SheetContent side="top" className="h-32">
                    <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 pt-8">
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
                <Link to="/wishlist" className="relative p-2 text-foreground/80 hover:text-foreground transition-colors">
                  <HeartIcon className={`h-5 w-5 ${wishlist.length > 0 ? 'fill-current' : ''}`} />
                  <span className="sr-only">Wishlist</span>
                  {wishlist.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-foreground text-background text-xs h-5 w-5 rounded-full flex items-center justify-center">
                      {wishlist.length}
                    </span>
                  )}
                </Link>
                <Link to="/cart" className="relative p-2 text-foreground/80 hover:text-foreground transition-colors">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="sr-only">Cart</span>
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-foreground text-background text-xs h-5 w-5 rounded-full flex items-center justify-center">
                      {cartCount > 9 ? '9+' : cartCount}
                    </span>
                  )}
                </Link>
              </div>
            </div>

            {/* Mobile header */}
            <div className="flex items-center justify-between w-full md:hidden">
              <button 
                className="text-foreground"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu />
              </button>
              <div className="flex-1 flex justify-center">
                <Link to="/" className="text-2xl font-bold tracking-tight">
                  MAISON
                </Link>
              </div>
              <div className="invisible">
                <Menu />
              </div>
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
