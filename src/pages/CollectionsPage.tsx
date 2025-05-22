
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const collections = [
  {
    id: 1,
    name: "VOYOU CHAIN",
    season: "SPRING 24",
    description: "Chain joins the house's hit handbags, conveying a feeling of temptation and desire for sophisticated nonchalance",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1024",
    products: [
      {
        id: 101,
        name: "Chain Link Performance Jacket",
        price: "$895.00",
        image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&q=80&w=600"
      },
      {
        id: 102,
        name: "Chain Detail Track Pants",
        price: "$595.00",
        image: "https://images.unsplash.com/photo-1542574621-e088a4464f7e?auto=format&fit=crop&q=80&w=600"
      },
      {
        id: 103,
        name: "Chain Embellished Cap",
        price: "$350.00",
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=600"
      }
    ]
  },
  {
    id: 2,
    name: "AVENIR LINE",
    season: "SPRING 24",
    description: "A modern take on classic tailoring, blending structure with fluidity for the contemporary wardrobe",
    image: "https://images.unsplash.com/photo-1549062572-544a64fb0c56?auto=format&fit=crop&q=80&w=1024",
    products: [
      {
        id: 201,
        name: "Structured Performance Blazer",
        price: "$1,250.00",
        image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?auto=format&fit=crop&q=80&w=600"
      },
      {
        id: 202,
        name: "Fluid Track Jacket",
        price: "$850.00",
        image: "https://images.unsplash.com/photo-1565128938515-952687784ae1?auto=format&fit=crop&q=80&w=600"
      },
      {
        id: 203,
        name: "Technical Cargo Pants",
        price: "$495.00",
        image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&q=80&w=600"
      }
    ]
  },
  {
    id: 3,
    name: "ALTITUDE SERIES",
    season: "WINTER 23",
    description: "Performance meets elevation in our mountain-inspired collection, designed for peak performance and alpine style",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=1024",
    products: [
      {
        id: 301,
        name: "Alpine Performance Jacket",
        price: "$1,450.00",
        image: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?auto=format&fit=crop&q=80&w=600"
      },
      {
        id: 302,
        name: "Summit Insulated Pants",
        price: "$795.00",
        image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80&w=600"
      },
      {
        id: 303,
        name: "Mountain Base Layer",
        price: "$350.00",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600"
      }
    ]
  },
  {
    id: 4,
    name: "OCEAN CURRENT",
    season: "SUMMER 23",
    description: "Dive into aquatic luxury with pieces inspired by the powerful movement and tranquil beauty of ocean currents",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1024",
    products: [
      {
        id: 401,
        name: "Wave Performance Swim Short",
        price: "$395.00",
        image: "https://images.unsplash.com/photo-1617952385804-7b9a54f67c36?auto=format&fit=crop&q=80&w=600"
      },
      {
        id: 402,
        name: "Current Technical Rashguard",
        price: "$295.00",
        image: "https://images.unsplash.com/photo-1564652518878-669c5d2e4c1c?auto=format&fit=crop&q=80&w=600"
      },
      {
        id: 403,
        name: "Aquatic Performance Cap",
        price: "$195.00",
        image: "https://images.unsplash.com/photo-1521079299535-94854b0a7b27?auto=format&fit=crop&q=80&w=600"
      }
    ]
  },
  {
    id: 5,
    name: "MOMENTUM SHIFT",
    season: "FALL 23",
    description: "Our celebration of dynamic movement, designed for athletes who push boundaries in style and performance",
    image: "https://images.unsplash.com/photo-1583440302902-c3e2ede46ba2?auto=format&fit=crop&q=80&w=1024",
    products: [
      {
        id: 501,
        name: "Kinetic Performance Jacket",
        price: "$795.00",
        image: "https://images.unsplash.com/photo-1547349376-2b62134567c9?auto=format&fit=crop&q=80&w=600"
      },
      {
        id: 502,
        name: "Dynamic Training Tights",
        price: "$395.00",
        image: "https://images.unsplash.com/photo-1556863402-a0eaf5b9efe6?auto=format&fit=crop&q=80&w=600"
      },
      {
        id: 503,
        name: "Motion Compression Top",
        price: "$325.00",
        image: "https://images.unsplash.com/photo-1536922246289-88c42f957773?auto=format&fit=crop&q=80&w=600"
      }
    ]
  },
  {
    id: 6,
    name: "COURT VISION",
    season: "SPRING 23",
    description: "Tennis-inspired silhouettes reimagined for both on and off court presence with uncompromising quality",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=1024",
    products: [
      {
        id: 601,
        name: "Court Performance Polo",
        price: "$350.00",
        image: "https://images.unsplash.com/photo-1581952976147-5a2d15560349?auto=format&fit=crop&q=80&w=600"
      },
      {
        id: 602,
        name: "Vision Tennis Shorts",
        price: "$295.00",
        image: "https://images.unsplash.com/photo-1518082593638-b6e73b35d39a?auto=format&fit=crop&q=80&w=600"
      },
      {
        id: 603,
        name: "Match Performance Visor",
        price: "$175.00",
        image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=600"
      }
    ]
  }
];

export default function CollectionsPage() {
  const [expandedCollection, setExpandedCollection] = useState<number | null>(null);

  const toggleCollection = (collectionId: number) => {
    if (expandedCollection === collectionId) {
      setExpandedCollection(null);
    } else {
      setExpandedCollection(collectionId);
    }
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
            className="mb-16"
          >
            <h1 className="font-display text-6xl md:text-7xl fashion-header mb-6">COLLECTIONS</h1>
            <p className="text-foreground/70 max-w-xl">
              Explore our seasonal collections that blend luxury craftsmanship with superior athletic performance.
            </p>
          </motion.div>
          
          <div className="space-y-32">
            {collections.map((collection, index) => (
              <motion.div 
                key={collection.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="space-y-16"
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                  <div className="flex-1 group">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img 
                        src={collection.image} 
                        alt={collection.name}
                        className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-6">
                    <span className="text-sm text-foreground/70">{collection.season}</span>
                    <h2 className="font-display text-4xl md:text-5xl fashion-header">{collection.name}</h2>
                    <Separator className="bg-foreground/20" />
                    <p className="text-foreground/70 text-lg">
                      {collection.description}
                    </p>
                    <Button 
                      variant="minimal" 
                      className="mt-8 font-display fashion-subheader text-sm"
                      onClick={() => toggleCollection(collection.id)}
                    >
                      {expandedCollection === collection.id ? "HIDE COLLECTION" : "EXPLORE COLLECTION"}
                    </Button>
                  </div>
                </div>
                
                {expandedCollection === collection.id && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                  >
                    {collection.products.map(product => (
                      <Link to={`/products/${product.id}`} key={product.id} className="group">
                        <Card className="border-0 overflow-hidden bg-card">
                          <div className="h-80 overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                            />
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-medium text-lg mb-2 group-hover:text-primary/90 transition-colors">{product.name}</h3>
                            <p className="font-display text-xl">{product.price}</p>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
}
