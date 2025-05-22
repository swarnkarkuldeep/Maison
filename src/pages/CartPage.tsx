
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Trash2, Plus, Minus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Sample cart items
const initialCartItems = [
  {
    id: 1,
    name: "Elite Performance Tennis Racket",
    price: 495,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1617229921943-8c3e4eefc7f0?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: 4,
    name: "Signature Series Basketball Shoes",
    price: 380,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=300",
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const { toast } = useToast();
  
  const updateQuantity = (id: number, change: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };
  
  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart",
    });
  };
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 25;
  const total = subtotal + shipping;
  
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
            <h1 className="font-display text-5xl md:text-6xl fashion-header mb-6">YOUR CART</h1>
          </motion.div>
          
          {cartItems.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6 py-6 border-b border-foreground/10"
                  >
                    <div className="w-24 h-24 bg-secondary overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="font-display">${item.price.toFixed(2)}</p>
                      </div>
                      
                      <div className="mt-4 flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)} 
                            className="w-8 h-8 flex items-center justify-center border border-foreground/20 rounded-full"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          
                          <span>{item.quantity}</span>
                          
                          <button 
                            onClick={() => updateQuantity(item.id, 1)} 
                            className="w-8 h-8 flex items-center justify-center border border-foreground/20 rounded-full"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-foreground/60 hover:text-foreground transition"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                <div className="py-6">
                  <Link to="/products">
                    <Button variant="outline" className="text-sm">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card p-8 h-fit space-y-6"
              >
                <h2 className="font-display text-2xl">ORDER SUMMARY</h2>
                <Separator className="bg-foreground/10" />
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <p className="text-foreground/70">Subtotal</p>
                    <p>${subtotal.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex justify-between">
                    <p className="text-foreground/70">Shipping</p>
                    <p>${shipping.toFixed(2)}</p>
                  </div>
                  
                  <Separator className="bg-foreground/10" />
                  
                  <div className="flex justify-between font-medium">
                    <p>Total</p>
                    <p className="font-display text-xl">${total.toFixed(2)}</p>
                  </div>
                </div>
                
                <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
                  CHECKOUT
                </Button>
              </motion.div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 space-y-6"
            >
              <p className="text-xl text-foreground/70">Your cart is currently empty.</p>
              <Button asChild>
                <Link to="/products">SHOP NOW</Link>
              </Button>
            </motion.div>
          )}
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
}
