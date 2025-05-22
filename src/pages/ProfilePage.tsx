
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Package, Heart, Clock, User, MapPin, CreditCard, LogOut } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Sample order history
const orderHistory = [
  {
    id: "ORD-7829",
    date: "May 15, 2025",
    total: "$875.00",
    status: "Delivered",
    items: [
      { name: "Elite Performance Tennis Racket", quantity: 1 },
      { name: "Premium Court Shoes", quantity: 1 }
    ]
  },
  {
    id: "ORD-6531",
    date: "April 3, 2025",
    total: "$380.00",
    status: "Delivered",
    items: [
      { name: "Signature Series Basketball Shoes", quantity: 1 }
    ]
  }
];

// Sample wishlist
const wishlistItems = [
  {
    id: 6,
    name: "Carbon Fiber Golf Clubs Set",
    price: "$2,950.00",
    image: "https://images.unsplash.com/photo-1535131749006-b7d58e7896b5?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: 8,
    name: "Ultralight Running Shoes",
    price: "$290.00",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=300",
  }
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("account");
  const { toast } = useToast();
  
  const handleSaveChanges = () => {
    toast({
      title: "Changes saved",
      description: "Your profile has been updated successfully",
    });
  };
  
  const handleAddToCart = (id: number) => {
    toast({
      title: "Added to cart",
      description: "Item has been added to your cart",
    });
  };
  
  const handleRemoveFromWishlist = (id: number) => {
    toast({
      title: "Removed from wishlist",
      description: "Item has been removed from your wishlist",
    });
  };
  
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
            <h1 className="font-display text-5xl md:text-6xl fashion-header mb-6">MY ACCOUNT</h1>
          </motion.div>
          
          <div className="grid lg:grid-cols-4 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="space-y-6">
                <div className="p-6 bg-secondary text-center">
                  <div className="w-20 h-20 rounded-full bg-background/20 mx-auto flex items-center justify-center">
                    <User className="h-10 w-10" />
                  </div>
                  <h2 className="mt-4 font-medium text-lg">Alex Morgan</h2>
                  <p className="text-sm text-foreground/70">Premium Member</p>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    variant={activeTab === "account" ? "default" : "ghost"} 
                    className="w-full justify-start gap-2"
                    onClick={() => setActiveTab("account")}
                  >
                    <User className="h-4 w-4" />
                    Account Details
                  </Button>
                  
                  <Button 
                    variant={activeTab === "orders" ? "default" : "ghost"} 
                    className="w-full justify-start gap-2"
                    onClick={() => setActiveTab("orders")}
                  >
                    <Package className="h-4 w-4" />
                    Order History
                  </Button>
                  
                  <Button 
                    variant={activeTab === "wishlist" ? "default" : "ghost"} 
                    className="w-full justify-start gap-2"
                    onClick={() => setActiveTab("wishlist")}
                  >
                    <Heart className="h-4 w-4" />
                    Wishlist
                  </Button>
                  
                  <Button 
                    variant={activeTab === "address" ? "default" : "ghost"} 
                    className="w-full justify-start gap-2"
                    onClick={() => setActiveTab("address")}
                  >
                    <MapPin className="h-4 w-4" />
                    Address Book
                  </Button>
                  
                  <Button 
                    variant={activeTab === "payment" ? "default" : "ghost"} 
                    className="w-full justify-start gap-2"
                    onClick={() => setActiveTab("payment")}
                  >
                    <CreditCard className="h-4 w-4" />
                    Payment Methods
                  </Button>
                  
                  <Separator className="my-4" />
                  
                  <Button variant="ghost" className="w-full justify-start gap-2 text-foreground/70">
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-3"
            >
              {activeTab === "account" && (
                <div className="space-y-8">
                  <div>
                    <h2 className="font-display text-2xl mb-6">Account Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="Alex" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Morgan" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" defaultValue="alex.morgan@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="font-display text-2xl mb-6">Change Password</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button onClick={handleSaveChanges}>Save Changes</Button>
                  </div>
                </div>
              )}
              
              {activeTab === "orders" && (
                <div className="space-y-8">
                  <h2 className="font-display text-2xl mb-6">Order History</h2>
                  
                  {orderHistory.map((order, index) => (
                    <div key={order.id} className="border border-foreground/10 rounded-md overflow-hidden">
                      <div className="bg-card p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">{order.id}</p>
                          <p className="text-sm text-foreground/70">{order.date}</p>
                        </div>
                        <div>
                          <span className="px-3 py-1 bg-background text-foreground text-xs rounded-full">{order.status}</span>
                        </div>
                      </div>
                      <div className="p-4 space-y-2">
                        {order.items.map((item, i) => (
                          <div key={i} className="flex justify-between">
                            <p>{item.name}</p>
                            <p className="text-foreground/70">Qty: {item.quantity}</p>
                          </div>
                        ))}
                        <Separator className="my-2" />
                        <div className="flex justify-between font-medium">
                          <p>Total</p>
                          <p>{order.total}</p>
                        </div>
                      </div>
                      <div className="bg-card p-4 flex justify-end">
                        <Button variant="outline" size="sm">View Order Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === "wishlist" && (
                <div className="space-y-8">
                  <h2 className="font-display text-2xl mb-6">My Wishlist</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {wishlistItems.map((item) => (
                      <div key={item.id} className="flex gap-4 border border-foreground/10 p-4 rounded-md">
                        <div className="w-20 h-20 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-foreground/70">{item.price}</p>
                          <div className="flex gap-2 mt-2">
                            <Button size="sm" variant="outline" onClick={() => handleAddToCart(item.id)}>Add to Cart</Button>
                            <Button size="sm" variant="ghost" onClick={() => handleRemoveFromWishlist(item.id)}>Remove</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === "address" && (
                <div className="space-y-8">
                  <h2 className="font-display text-2xl mb-6">Address Book</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-foreground/10 p-6 rounded-md">
                      <div className="flex justify-between mb-4">
                        <h3 className="font-medium">Default Shipping Address</h3>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </div>
                      <div className="space-y-1 text-foreground/80">
                        <p>Alex Morgan</p>
                        <p>123 Main Street</p>
                        <p>Apt 4B</p>
                        <p>New York, NY 10001</p>
                        <p>United States</p>
                        <p>+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="border border-foreground/10 p-6 rounded-md">
                      <div className="flex justify-between mb-4">
                        <h3 className="font-medium">Default Billing Address</h3>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </div>
                      <div className="space-y-1 text-foreground/80">
                        <p>Alex Morgan</p>
                        <p>123 Main Street</p>
                        <p>Apt 4B</p>
                        <p>New York, NY 10001</p>
                        <p>United States</p>
                        <p>+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button>Add New Address</Button>
                  </div>
                </div>
              )}
              
              {activeTab === "payment" && (
                <div className="space-y-8">
                  <h2 className="font-display text-2xl mb-6">Payment Methods</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-foreground/10 p-6 rounded-md">
                      <div className="flex justify-between mb-4">
                        <h3 className="font-medium">Visa ending in 4242</h3>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </div>
                      <div className="space-y-1 text-foreground/80">
                        <p>Expires: 05/26</p>
                        <p>Default payment method</p>
                      </div>
                    </div>
                    
                    <div className="border border-foreground/10 p-6 rounded-md flex items-center justify-center">
                      <Button>+ Add Payment Method</Button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
}
