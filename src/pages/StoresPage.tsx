
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const storeLocations = [
  {
    id: 1,
    city: "Paris",
    address: "21 Rue Saint-Honoré, 75001 Paris, France",
    phone: "+33 1 42 61 10 10",
    hours: "Mon-Sat: 10:00-19:00, Sun: Closed",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000",
    flagship: true
  },
  {
    id: 2,
    city: "New York",
    address: "611 Fifth Avenue, New York, NY 10022, USA",
    phone: "+1 212-753-4000",
    hours: "Mon-Sat: 11:00-20:00, Sun: 12:00-19:00",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1000",
    flagship: true
  },
  {
    id: 3,
    city: "Tokyo",
    address: "4-12-10 Ginza, Chuo City, Tokyo 104-0061, Japan",
    phone: "+81 3-6274-6500",
    hours: "Daily: 11:00-20:00",
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&q=80&w=1000",
    flagship: true
  },
  {
    id: 4,
    city: "London",
    address: "27-29 Old Bond Street, Mayfair, London W1S 4QE, UK",
    phone: "+44 20 7355 0088",
    hours: "Mon-Sat: 10:00-19:00, Sun: 12:00-18:00",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1000",
    flagship: false
  },
  {
    id: 5,
    city: "Dubai",
    address: "Fashion Avenue, The Dubai Mall, Dubai, UAE",
    phone: "+971 4 339 8303",
    hours: "Sun-Wed: 10:00-22:00, Thu-Sat: 10:00-24:00",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1000",
    flagship: false
  },
  {
    id: 6,
    city: "Milan",
    address: "Via Monte Napoleone, 8, 20121 Milano MI, Italy",
    phone: "+39 02 7602 9700",
    hours: "Mon-Sat: 10:00-19:00, Sun: Closed",
    image: "https://i.pinimg.com/736x/f4/f5/25/f4f525fcceaf05771af348f2b49d0271.jpg",
    flagship: false
  },
];

export default function StoresPage() {
  const [selectedTab, setSelectedTab] = useState<string>(storeLocations[0].id.toString());
  
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
            className="mb-16 text-center"
          >
            <h1 className="font-display text-6xl md:text-7xl fashion-header mb-6">OUR STORES</h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Visit our flagship boutiques around the world to experience the full MAISON luxury experience.
            </p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <Tabs
              defaultValue={selectedTab}
              value={selectedTab}
              onValueChange={setSelectedTab}
              className="w-full"
            >
              <div className="overflow-x-auto pb-4">
                <TabsList className="bg-transparent border-b border-foreground/20 rounded-none w-full justify-start space-x-8">
                  {storeLocations.map((location) => (
                    <TabsTrigger
                      key={location.id}
                      value={location.id.toString()}
                      className="border-b-2 border-transparent data-[state=active]:border-foreground pb-4 rounded-none"
                    >
                      {location.city}
                      {location.flagship && <span className="ml-2 text-xs bg-foreground text-background px-1.5 py-0.5 rounded">Flagship</span>}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {storeLocations.map((location) => (
                <TabsContent
                  key={location.id}
                  value={location.id.toString()}
                  className="mt-12"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={location.image}
                        alt={`MAISON ${location.city} Store`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="space-y-8">
                      <div>
                        <h2 className="font-display text-4xl fashion-header">{location.city}</h2>
                        {location.flagship && <span className="inline-block mt-2 text-sm bg-foreground text-background px-2 py-1">Flagship Store</span>}
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <MapPin className="h-6 w-6 text-foreground/70 mt-1" />
                          <p className="text-lg">{location.address}</p>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <Phone className="h-6 w-6 text-foreground/70 mt-1" />
                          <p className="text-lg">{location.phone}</p>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <Clock className="h-6 w-6 text-foreground/70 mt-1" />
                          <p className="text-lg">{location.hours}</p>
                        </div>
                      </div>
                      
                      <div className="pt-4 space-y-4">
                        <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
                          BOOK APPOINTMENT
                        </Button>
                        
                        <Button variant="outline" className="w-full">
                          GET DIRECTIONS
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
}
