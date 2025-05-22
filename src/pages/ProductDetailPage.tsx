
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { useWishlist } from "@/contexts/WishlistContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, ChevronDown, ChevronUp, Star, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { allProducts } from "@/data/products";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const { toast } = useToast();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  // Find product from all products list
  const product = allProducts.find(p => p.id === parseInt(productId || "0", 10));
  
  // Update wishlist status when product changes
  useEffect(() => {
    if (product) {
      setIsWishlisted(isInWishlist(product.id));
    }
  }, [product, isInWishlist]);
  
  // If product not found
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-medium mb-4">Product not found</h1>
        <Button asChild>
          <Link to="/products">Return to Products</Link>
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize && product.category !== "Swimming" && product.category !== "Golf") {
      toast({
        title: "Please select a size",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWishlistToggle = () => {
    if (!product) return;
    
    if (isWishlisted) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      });
    } else {
      // Convert price to number if it's a string with $ sign
      const priceValue = typeof product.price === 'string' 
        ? parseFloat(product.price.replace(/[^0-9.-]+/g, '')) 
        : product.price;
        
      addToWishlist({
        id: product.id,
        name: product.name,
        price: typeof priceValue === 'number' ? `$${priceValue.toFixed(2)}` : product.price,
        image: product.image, // Using the single image from the product
        category: product.category
      });
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`,
      });
    }
    setIsWishlisted(!isWishlisted);
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  // Check if product needs size selection
  const needsSizeSelection = () => {
    // Items that definitely don't need sizes
    const noSizeItems = [
      'basketball', 'tennis', 'golf', 'football', 'racket', 'club', 'ball',
      'goggles', 'cap', 'hat', 'gloves', 'socks', 'towel', 'bag', 'accessory'
    ];
    
    // Check if product is in categories that need sizes
    const needsSizeCategories = ['clothing', 'apparel', 'shirt', 'pants', 'shorts', 'jacket', 'hoodie', 'jersey'];
    
    // Check if product name contains size-requiring keywords
    const isWearable = needsSizeCategories.some(keyword => 
      product.name.toLowerCase().includes(keyword) ||
      product.category.toLowerCase().includes(keyword)
    );
    
    // Check if product is a shoe
    const isShoe = ['shoes', 'sneakers', 'boots', 'footwear', 'cleats'].some(keyword => 
      product.name.toLowerCase().includes(keyword) ||
      product.category.toLowerCase().includes(keyword)
    );
    
    // Check if product is explicitly marked as not needing sizes
    const isNoSizeItem = noSizeItems.some(keyword => 
      product.name.toLowerCase().includes(keyword) ||
      product.category.toLowerCase().includes(keyword)
    );
    
    return isWearable || isShoe || !isNoSizeItem;
  };

  // Get size type based on product
  const getSizeType = () => {
    const shoeKeywords = ['shoes', 'sneakers', 'boots', 'footwear', 'cleats'];
    const isShoe = shoeKeywords.some(keyword => 
      product.name.toLowerCase().includes(keyword) ||
      product.category.toLowerCase().includes(keyword)
    );
    
    return isShoe ? 'US' : 'Size';
  };

  // Available sizes based on product type
  const getSizes = () => {
    const shoeSizes = [
      '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '13'
    ];
    
    const clothingSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    
    // Check if it's a shoe
    const isShoe = ['shoes', 'sneakers', 'boots', 'footwear', 'cleats'].some(keyword => 
      product.name.toLowerCase().includes(keyword) ||
      product.category.toLowerCase().includes(keyword)
    );
    
    // Check if it's clothing
    const isClothing = [
      'jersey', 'shirt', 'top', 't-shirt', 'pants', 'shorts', 'jacket',
      'hoodie', 'sweater', 'tracksuit', 'tank', 'polo'
    ].some(keyword => 
      product.name.toLowerCase().includes(keyword) ||
      product.category.toLowerCase().includes(keyword)
    );
    
    // Return appropriate sizes
    if (isShoe) return shoeSizes;
    if (isClothing) return clothingSizes;
    
    // No sizes for equipment
    return [];
  };

  const availableSizes = getSizes();
  const showSizeSelector = needsSizeSelection() && availableSizes.length > 0;
  const sizeType = getSizeType();
  const colors = ["Black", "White", "Red", "Navy", "Gray", "Green"];
  
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-muted aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="aspect-square bg-muted/50 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={`${product.name} angle ${i+1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <span className="text-sm text-foreground/60">{product.category}</span>
                <h1 className="font-display text-4xl md:text-5xl my-2">{product.name}</h1>
                <div className="flex items-center space-x-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-foreground" />
                  ))}
                  <span className="text-sm text-foreground/60">(24 reviews)</span>
                </div>
                <p className="font-display text-3xl">{product.price}</p>
              </div>
              
              <Separator />
              
              {/* Size Selector */}
              {showSizeSelector && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Select {sizeType} Size</h3>
                    <button 
                      className="text-sm underline hover:no-underline"
                      onClick={() => {
                        // Show size guide based on product type
                        const guideUrl = sizeType === 'US' 
                          ? '/size-guide/shoes' 
                          : '/size-guide/clothing';
                        // In a real app, you would navigate to the size guide
                        console.log('Navigate to:', guideUrl);
                      }}
                    >
                      Size Guide
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                    {availableSizes.map(size => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-2 text-sm border rounded-sm text-center ${
                          selectedSize === size 
                            ? 'border-foreground bg-foreground text-background' 
                            : 'border-foreground/20 hover:border-foreground/60 transition-colors'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Color Selector */}
              <div className="space-y-4">
                <h3 className="font-medium">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border ${
                        selectedColor === color 
                          ? 'border-foreground bg-foreground text-background' 
                          : 'border-foreground/20 hover:border-foreground/80'
                      } transition-colors`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity Selector */}
              <div className="space-y-4">
                <h3 className="font-medium">Quantity</h3>
                <div className="flex items-center border border-foreground/20">
                  <button 
                    onClick={() => handleQuantityChange(-1)}
                    className="px-4 py-2 text-foreground/60 hover:text-foreground transition-colors"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  
                  <span className="w-12 text-center">{quantity}</span>
                  
                  <button 
                    onClick={() => handleQuantityChange(1)}
                    className="px-4 py-2 text-foreground/60 hover:text-foreground transition-colors"
                  >
                    <ChevronUp className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-foreground text-background hover:bg-foreground/90"
                >
                  ADD TO CART
                </Button>
                
                <Button 
                  onClick={handleWishlistToggle}
                  variant={isWishlisted ? "default" : "outline"}
                  className={`flex-1 ${isWishlisted ? 'bg-black hover:bg-black/90' : 'border-foreground/20'}`}
                >
                  {isWishlisted ? (
                    <>
                      <Check className="mr-2 h-4 w-4" /> ADDED TO WISHLIST
                    </>
                  ) : (
                    <>
                      <Heart className="mr-2 h-4 w-4" /> ADD TO WISHLIST
                    </>
                  )}
                </Button>
              </div>
              
              {/* Product Details */}
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
                  <TabsTrigger 
                    value="description" 
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent"
                  >
                    Description
                  </TabsTrigger>
                  <TabsTrigger 
                    value="details" 
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent"
                  >
                    Details
                  </TabsTrigger>
                  <TabsTrigger 
                    value="shipping" 
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent"
                  >
                    Shipping
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="description" className="pt-4">
                  <p className="text-foreground/80 leading-relaxed">
                    Crafted with precision and designed for optimal performance, the {product.name} offers unparalleled quality for professional athletes and enthusiasts alike. Engineered using cutting-edge technology and premium materials, this product delivers exceptional performance in every aspect of your game.
                  </p>
                </TabsContent>
                
                <TabsContent value="details" className="pt-4">
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Premium materials for extended durability</li>
                    <li>• Engineered for professional performance</li>
                    <li>• Exclusive MAISON design and craftsmanship</li>
                    <li>• Precision balanced for optimal control</li>
                    <li>• Endorsed by professional athletes</li>
                  </ul>
                </TabsContent>
                
                <TabsContent value="shipping" className="pt-4">
                  <p className="text-foreground/80 leading-relaxed">
                    Free standard shipping on all orders over $100. Express shipping available for an additional fee. International shipping available to select countries. See our shipping policy for more details.
                  </p>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
          
          {/* Related Products */}
          <section className="mt-24">
            <h2 className="font-display text-3xl md:text-4xl mb-8">You May Also Like</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {allProducts
                .filter(p => p.category === product.category && p.id !== product.id)
                .slice(0, 4)
                .map(relatedProduct => (
                  <motion.div
                    key={relatedProduct.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Link to={`/products/${relatedProduct.id}`}>
                      <div className="aspect-square overflow-hidden bg-muted mb-4">
                        <img 
                          src={relatedProduct.image} 
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="font-medium group-hover:text-primary/90 transition-colors">{relatedProduct.name}</h3>
                      <p className="font-display mt-1">{relatedProduct.price}</p>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
}
