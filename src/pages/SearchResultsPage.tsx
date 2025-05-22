import { useEffect, useState, useCallback } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search as SearchIcon, X, ShoppingCart, Loader2, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { allProducts as allProductsData, Product as BaseProduct } from '@/data/products';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

// Extend the base Product type to include description
interface Product extends BaseProduct {
  description?: string;
}

// Cast the imported products to our extended type
const allProducts = allProductsData as Product[];

// Price ranges for filtering
const priceRanges = [
  { id: 'price-1', label: 'Under $50', min: 0, max: 50 },
  { id: 'price-2', label: '$50 - $100', min: 50, max: 100 },
  { id: 'price-3', label: '$100 - $200', min: 100, max: 200 },
  { id: 'price-4', label: '$200 - $500', min: 200, max: 500 },
  { id: 'price-5', label: 'Over $500', min: 500, max: 10000 },
];

// Colors for filtering
const colors = [
  { id: 'color-1', name: 'Black' },
  { id: 'color-2', name: 'White' },
  { id: 'color-3', name: 'Blue' },
  { id: 'color-4', name: 'Red' },
  { id: 'color-5', name: 'Green' },
  { id: 'color-6', name: 'Yellow' },
];

// Sports categories
const sports = [
  { id: 1, name: 'Tennis' },
  { id: 2, name: 'Basketball' },
  { id: 3, name: 'Football' },
  { id: 4, name: 'Golf' },
  { id: 5, name: 'Swimming' },
  { id: 6, name: 'Running' },
];

import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Parse price from string format "$XX.XX"
const parsePrice = (priceStr: string) => {
  return parseFloat(priceStr.replace(/[^\d.-]/g, ''));
};

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  
  // Filter states
  const [selectedSport, setSelectedSport] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState('featured');
  const [filteredResults, setFilteredResults] = useState<Product[]>([]);
  const [productsToShow, setProductsToShow] = useState(12);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const productsPerPage = 12;

  // Reset products to show when filters change
  useEffect(() => {
    setProductsToShow(productsPerPage);
  }, [selectedSport, selectedPriceRanges, priceRange, sortOption, productsPerPage]);

  // Handle search and initial filtering
  useEffect(() => {
    if (!query) {
      setSearchResults([]);
      setFilteredResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      const searchTerm = query.toLowerCase();
      
      // First filter by search term
      let results = allProducts.filter((product) => {
        return (
          product.name.toLowerCase().includes(searchTerm) ||
          (product.description?.toLowerCase().includes(searchTerm) ?? false) ||
          product.category.toLowerCase().includes(searchTerm)
        );
      });
      
      setSearchResults(results);
      setFilteredResults(results);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);
  
  // Apply filters to search results
  useEffect(() => {
    if (searchResults.length === 0) return;
    
    let filtered = [...searchResults];
    
    // Filter by sport
    if (selectedSport !== 'All') {
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
    if (sortOption === 'price-low') {
      filtered = [...filtered].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortOption === 'price-high') {
      filtered = [...filtered].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else if (sortOption === 'name-asc') {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'name-desc') {
      filtered = [...filtered].sort((a, b) => b.name.localeCompare(a.name));
    }
    
    setFilteredResults(filtered);
  }, [searchResults, selectedSport, selectedPriceRanges, priceRange, sortOption]);
  
  // Handle infinite scroll
  const loadMoreProducts = useCallback(() => {
    if (isLoadingMore || productsToShow >= filteredResults.length) return;
    
    setIsLoadingMore(true);
    
    // Simulate loading delay
    setTimeout(() => {
      setProductsToShow(prev => Math.min(prev + productsPerPage, filteredResults.length));
      setIsLoadingMore(false);
    }, 800);
  }, [isLoadingMore, productsToShow, filteredResults.length, productsPerPage]);
  
  // Set up intersection observer for infinite scroll
  useEffect(() => {
    if (isLoadingMore) return;
    
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting) {
        loadMoreProducts();
      }
    };
    
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 0.1
    });
    
    const loadMoreRef = document.getElementById('load-more');
    if (loadMoreRef) {
      observer.observe(loadMoreRef);
    }
    
    return () => {
      if (loadMoreRef) {
        observer.unobserve(loadMoreRef);
      }
    };
  }, [isLoadingMore, loadMoreProducts]);
  
  const resetFilters = useCallback(() => {
    setSelectedSport('All');
    setSelectedColors([]);
    setSelectedPriceRanges([]);
    setPriceRange([0, 3000]);
    setSortOption('featured');
  }, []);

  const displayedProducts = filteredResults.slice(0, productsToShow);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-foreground/70">Searching for "{query}"...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
    >
      <Header />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-medium">
                {filteredResults.length} results for "{query}"
              </h1>
              <Button variant="ghost" asChild>
                <Link to="/products" className="flex items-center gap-2">
                  <X className="h-4 w-4" />
                  Clear search
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              {/* Desktop filter sidebar */}
              <div className="hidden md:block w-64 flex-shrink-0">
                <div className="sticky top-28 space-y-6">
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
                                  onCheckedChange={() => {
                                    if (selectedPriceRanges.includes(range.id)) {
                                      setSelectedPriceRanges(selectedPriceRanges.filter(id => id !== range.id));
                                    } else {
                                      setSelectedPriceRanges([...selectedPriceRanges, range.id]);
                                    }
                                  }}
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
                                onCheckedChange={() => {
                                  if (selectedColors.includes(color.id)) {
                                    setSelectedColors(selectedColors.filter(id => id !== color.id));
                                  } else {
                                    setSelectedColors([...selectedColors, color.id]);
                                  }
                                }}
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
              
              {/* Main content area */}
              <div className="flex-1">
                {/* Sort and mobile filter */}
                <div className="flex justify-between items-center mb-6">
                  <div className="md:hidden">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <Filter className="h-4 w-4" />
                          Filters
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="left" className="w-72 p-0">
                        <div className="p-4">
                          <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-medium">Filters</h2>
                            <Button variant="ghost" size="sm" onClick={resetFilters}>
                              Reset All
                            </Button>
                          </div>
                          <Separator className="my-4" />
                          <div className="space-y-6">
                            <Accordion type="multiple" defaultValue={["category", "price", "color"]}>
                              <AccordionItem value="category">
                                <AccordionTrigger className="text-base font-medium">Sport</AccordionTrigger>
                                <AccordionContent>
                                  <div className="space-y-2 pt-1">
                                    <div className="flex items-center">
                                      <Checkbox 
                                        id="mobile-all-sports" 
                                        checked={selectedSport === "All"} 
                                        onCheckedChange={() => setSelectedSport("All")}
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
                                          onCheckedChange={() => setSelectedSport(sport.name)}
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
                                    <div className="space-y-2">
                                      {priceRanges.map((range) => (
                                        <div key={`mobile-${range.id}`} className="flex items-center">
                                          <Checkbox 
                                            id={`mobile-${range.id}`} 
                                            checked={selectedPriceRanges.includes(range.id)} 
                                            onCheckedChange={() => {
                                              if (selectedPriceRanges.includes(range.id)) {
                                                setSelectedPriceRanges(selectedPriceRanges.filter(id => id !== range.id));
                                              } else {
                                                setSelectedPriceRanges([...selectedPriceRanges, range.id]);
                                              }
                                            }}
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
                                    
                                    <div className="pt-2 px-1">
                                      <div className="flex justify-between mb-1">
                                        <span className="text-sm">${priceRange[0]}</span>
                                        <span className="text-sm">${priceRange[1]}</span>
                                      </div>
                                      <Slider
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
                                      <div key={`mobile-${color.id}`} className="flex items-center">
                                        <Checkbox 
                                          id={`mobile-${color.id}`} 
                                          checked={selectedColors.includes(color.id)} 
                                          onCheckedChange={() => {
                                            if (selectedColors.includes(color.id)) {
                                              setSelectedColors(selectedColors.filter(id => id !== color.id));
                                            } else {
                                              setSelectedColors([...selectedColors, color.id]);
                                            }
                                          }}
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
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Sort by:</span>
                    <select
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                      className="rounded-md border border-input bg-background px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="name-asc">Name: A to Z</option>
                      <option value="name-desc">Name: Z to A</option>
                    </select>
                  </div>
                </div>
                {displayedProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {displayedProducts.map((product, index) => (
                      <motion.div
                        key={`${product.id}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="h-full"
                      >
                        <Link to={`/products/${product.id}`} className="block h-full">
                          <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="aspect-square overflow-hidden">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <CardContent className="p-4 flex-1 flex flex-col">
                              <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                              <h3 className="font-medium text-lg mb-2 line-clamp-2">{product.name}</h3>
                              <div className="mt-auto flex justify-between items-center">
                                <span className="font-bold">{product.price}</span>
                                <Button size="sm" variant="outline" className="rounded-full">
                                  <ShoppingCart className="h-4 w-4 mr-1" />
                                  Add
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <SearchIcon className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h2 className="text-xl font-medium mb-2">No products found</h2>
                    <p className="text-muted-foreground mb-6">
                      We couldn't find any products matching your filters.
                    </p>
                    <Button onClick={resetFilters} variant="outline">
                      Clear all filters
                    </Button>
                  </div>
                )}
                
                {/* Load more trigger */}
                {productsToShow < filteredResults.length && (
                  <div className="mt-12 text-center" id="load-more">
                    <Button 
                      variant="outline" 
                      onClick={loadMoreProducts}
                      disabled={isLoadingMore}
                      className="min-w-40"
                    >
                      {isLoadingMore ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Loading...
                        </>
                      ) : (
                        'Load More'
                      )}
                    </Button>
                  </div>
                )}
              </div>
            </div>


          </div>
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default SearchResultsPage;
