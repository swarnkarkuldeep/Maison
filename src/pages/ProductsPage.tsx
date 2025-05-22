import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { allProducts } from "@/data/products";
import { Filter, X, ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

const sports = [
  { id: 1, name: "Tennis" },
  { id: 2, name: "Basketball" },
  { id: 3, name: "Football" },
  { id: 4, name: "Golf" },
  { id: 5, name: "Swimming" },
  { id: 6, name: "Running" },
];

// Price ranges for filtering
const priceRanges = [
  { id: "price-1", label: "Under $50", min: 0, max: 50 },
  { id: "price-2", label: "$50 - $100", min: 50, max: 100 },
  { id: "price-3", label: "$100 - $200", min: 100, max: 200 },
  { id: "price-4", label: "$200 - $500", min: 200, max: 500 },
  { id: "price-5", label: "Over $500", min: 500, max: 10000 },
];

// Colors for filtering
const colors = [
  { id: "color-1", name: "Black" },
  { id: "color-2", name: "White" },
  { id: "color-3", name: "Blue" },
  { id: "color-4", name: "Red" },
  { id: "color-5", name: "Green" },
  { id: "color-6", name: "Yellow" },
];

export default function ProductsPage() {
  const [selectedSport, setSelectedSport] = useState("All");
  const [visibleProducts, setVisibleProducts] = useState(allProducts);
  const [animateProducts, setAnimateProducts] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("featured");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  
  // Parse price from string format "$XX.XX"
  const parsePrice = (priceStr: string) => {
    return parseFloat(priceStr.replace(/[^\d.-]/g, ''));
  };

  useEffect(() => {
    // Initial animation
    setTimeout(() => {
      setAnimateProducts(true);
    }, 300);
  }, []);
  
  useEffect(() => {
    setAnimateProducts(false);
    setTimeout(() => {
      let filtered = allProducts;
      
      // Filter by sport
      if (selectedSport !== "All") {
        filtered = filtered.filter(product => product.category === selectedSport);
      }
      
      // Filter by price range selections
      if (selectedPriceRanges.length > 0) {
        filtered = filtered.filter(product => {
          const price = parsePrice(product.price);
          return selectedPriceRanges.some(rangeId => {
            const range = priceRanges.find(r => r.id === rangeId);
            return range && price >= range.min && price <= range.max;
          });
        });
      }
      
      // Filter by price slider
      filtered = filtered.filter(product => {
        const price = parsePrice(product.price);
        return price >= priceRange[0] && price <= priceRange[1];
      });
      
      // Apply sorting
      if (sortOption === "price-low") {
        filtered = [...filtered].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      } else if (sortOption === "price-high") {
        filtered = [...filtered].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      } else if (sortOption === "name-asc") {
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortOption === "name-desc") {
        filtered = [...filtered].sort((a, b) => b.name.localeCompare(a.name));
      }
      
      setVisibleProducts(filtered);
      setTimeout(() => setAnimateProducts(true), 100);
    }, 300);
  }, [selectedSport, selectedPriceRanges, priceRange, sortOption]);

  const handlePriceRangeToggle = (rangeId: string) => {
    setSelectedPriceRanges(prev => {
      if (prev.includes(rangeId)) {
        return prev.filter(id => id !== rangeId);
      } else {
        return [...prev, rangeId];
      }
    });
  };

  const handleColorToggle = (colorId: string) => {
    setSelectedColors(prev => {
      if (prev.includes(colorId)) {
        return prev.filter(id => id !== colorId);
      } else {
        return [...prev, colorId];
      }
    });
  };

  const resetFilters = () => {
    setSelectedSport("All");
    setSelectedColors([]);
    setSelectedPriceRanges([]);
    setPriceRange([0, 3000]);
    setSortOption("featured");
  };

  // Filter sidebar for desktop
  const FilterSidebar = () => (
    <div className="w-64 pr-8 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-lg">Filters</h2>
        <button 
          onClick={resetFilters}
          className="text-sm text-primary hover:underline"
        >
          Reset All
        </button>
      </div>
      
      <Separator />
      
      <div>
        <Accordion type="multiple" defaultValue={["category", "price", "color"]}>
          <AccordionItem value="category">
            <AccordionTrigger className="text-base font-medium">Sport</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-1">
                <div className="flex items-center">
                  <Checkbox 
                    id="all-sports" 
                    checked={selectedSport === "All"} 
                    onCheckedChange={() => setSelectedSport("All")}
                  />
                  <label 
                    htmlFor="all-sports" 
                    className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    All Sports
                  </label>
                </div>

                {sports.map((sport) => (
                  <div key={sport.id} className="flex items-center">
                    <Checkbox 
                      id={`sport-${sport.id}`} 
                      checked={selectedSport === sport.name} 
                      onCheckedChange={() => setSelectedSport(sport.name)}
                    />
                    <label 
                      htmlFor={`sport-${sport.id}`} 
                      className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {sport.name}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="price">
            <AccordionTrigger className="text-base font-medium">Price</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <div key={range.id} className="flex items-center">
                      <Checkbox 
                        id={range.id} 
                        checked={selectedPriceRanges.includes(range.id)} 
                        onCheckedChange={() => handlePriceRangeToggle(range.id)}
                      />
                      <label 
                        htmlFor={range.id} 
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {range.label}
                      </label>
                    </div>
                  ))}
                </div>
                
                <div className="pt-2 px-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">${priceRange[0]}</span>
                    <span className="text-sm">${priceRange[1]}</span>
                  </div>
                  <Slider
                    defaultValue={[0, 3000]}
                    value={priceRange}
                    max={3000}
                    step={10}
                    onValueChange={(value) => setPriceRange(value)}
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="color">
            <AccordionTrigger className="text-base font-medium">Color</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-1">
                {colors.map((color) => (
                  <div key={color.id} className="flex items-center">
                    <Checkbox 
                      id={color.id} 
                      checked={selectedColors.includes(color.id)} 
                      onCheckedChange={() => handleColorToggle(color.id)}
                    />
                    <label 
                      htmlFor={color.id} 
                      className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {color.name}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );

  // Mobile filter sheet
  const MobileFilter = () => (
    <Sheet open={mobileFilterOpen} onOpenChange={setMobileFilterOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          className="gap-2"
          onClick={() => setMobileFilterOpen(true)}
        >
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:max-w-md overflow-auto">
        <SheetHeader className="mb-4">
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>
            Refine your product search with these filters
          </SheetDescription>
        </SheetHeader>
        
        <div className="space-y-6">
          <Accordion type="multiple" defaultValue={["category", "price", "color"]}>
            <AccordionItem value="category">
              <AccordionTrigger className="text-base font-medium">Sport</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 pt-1">
                  <div className="flex items-center">
                    <Checkbox 
                      id="mobile-all-sports" 
                      checked={selectedSport === "All"} 
                      onCheckedChange={() => {
                        setSelectedSport("All");
                      }}
                    />
                    <label 
                      htmlFor="mobile-all-sports" 
                      className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      All Sports
                    </label>
                  </div>

                  {sports.map((sport) => (
                    <div key={`mobile-${sport.id}`} className="flex items-center">
                      <Checkbox 
                        id={`mobile-sport-${sport.id}`} 
                        checked={selectedSport === sport.name} 
                        onCheckedChange={() => {
                          setSelectedSport(sport.name);
                        }}
                      />
                      <label 
                        htmlFor={`mobile-sport-${sport.id}`} 
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {sport.name}
                      </label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="price">
              <AccordionTrigger className="text-base font-medium">Price</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    {priceRanges.map((range) => (
                      <div key={`mobile-${range.id}`} className="flex items-center">
                        <Checkbox 
                          id={`mobile-${range.id}`} 
                          checked={selectedPriceRanges.includes(range.id)} 
                          onCheckedChange={() => handlePriceRangeToggle(range.id)}
                        />
                        <label 
                          htmlFor={`mobile-${range.id}`} 
                          className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {range.label}
                        </label>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-3 px-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">${priceRange[0]}</span>
                      <span className="text-sm">${priceRange[1]}</span>
                    </div>
                    <Slider
                      defaultValue={[0, 3000]}
                      value={priceRange}
                      max={3000}
                      step={10}
                      onValueChange={(value) => setPriceRange(value)}
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="color">
              <AccordionTrigger className="text-base font-medium">Color</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 pt-1">
                  {colors.map((color) => (
                    <div key={`mobile-${color.id}`} className="flex items-center">
                      <Checkbox 
                        id={`mobile-${color.id}`} 
                        checked={selectedColors.includes(color.id)} 
                        onCheckedChange={() => handleColorToggle(color.id)}
                      />
                      <label 
                        htmlFor={`mobile-${color.id}`} 
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {color.name}
                      </label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <SheetFooter className="absolute bottom-0 left-0 right-0 bg-background border-t p-4 flex gap-4">
          <Button 
            variant="outline" 
            className="flex-1" 
            onClick={resetFilters}
          >
            Reset All
          </Button>
          <SheetClose asChild>
            <Button className="flex-1">Apply Filters</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="font-display text-6xl md:text-7xl fashion-header mb-6">PREMIUM SPORTS GEAR</h1>
            <p className="text-foreground/70 max-w-xl">
              Experience the perfect fusion of athletic performance and luxury design with our expertly crafted sports equipment and apparel.
            </p>
          </motion.div>
          
          <div className="block md:hidden mb-6">
            <MobileFilter />
          </div>
          
          <div className="flex flex-col md:flex-row">
            {/* Filter sidebar - desktop only */}
            <div className="hidden md:block">
              <FilterSidebar />
            </div>
            
            {/* Product grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <p className="text-sm">{visibleProducts.length} products</p>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm mr-1">Sort by:</span>
                  <select 
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="text-sm border border-input bg-transparent rounded px-2 py-1"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name-asc">Name: A to Z</option>
                    <option value="name-desc">Name: Z to A</option>
                  </select>
                </div>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
              >
                {visibleProducts.length > 0 ? (
                  visibleProducts.map((product, index) => (
                    <motion.div 
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={animateProducts ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="product-card"
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
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-20">
                    <p className="text-foreground/70 text-lg mb-4">No products match your current filters.</p>
                    <Button onClick={resetFilters} variant="white">Reset Filters</Button>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
}
