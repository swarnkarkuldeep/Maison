
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, ChevronDown, ChevronUp, Star } from "lucide-react";
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
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  
  // Find product from all products list
  const product = allProducts.find(product => product.id === parseInt(productId || "0", 10));
  
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

  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  // Available sizes based on category
  const getSizes = () => {
    switch (product.category) {
      case "Tennis":
      case "Basketball":
      case "Football":
      case "Running":
        return ["XS", "S", "M", "L", "XL", "XXL"];
      case "Swimming":
        return [];
      case "Golf":
        return [];
      default:
        return ["S", "M", "L", "XL"];
    }
  };

  const availableSizes = getSizes();
  const colors = ["Black", "White", "Red", "Blue", "Green"];
  
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
              {availableSizes.length > 0 && (
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Size</h3>
                    <button className="text-sm underline">Size Guide</button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {availableSizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border ${
                          selectedSize === size 
                            ? 'border-foreground bg-foreground text-background' 
                            : 'border-foreground/20 hover:border-foreground/80'
                        } transition-colors`}
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
                  onClick={handleAddToWishlist}
                  variant="outline" 
                  className="flex-1 border-foreground/20"
                >
                  <Heart className="mr-2 h-4 w-4" /> WISHLIST
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
