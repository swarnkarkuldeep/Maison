
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
    name: "COURT MASTERS",
    season: "SS 2024",
    description: "High-performance tennis apparel designed for agility and style on the court. Engineered for champions who demand both form and function.",
    image: "https://i.pinimg.com/736x/b9/f1/8e/b9f18eb111c5b69f5a15fe41cee2d28a.jpg",
    products: [
      {
        id: 101,
        name: "Aero-Dry Tennis Polo",
        price: "$89.99",
        image: "https://i.pinimg.com/736x/3c/0f/e2/3c0fe28b4579d8e75148140ad5ef1d26.jpg"
      },
      {
        id: 102,
        name: "Tournament Ready Skirt",
        price: "$75.00",
        image: "https://i.pinimg.com/736x/d9/71/ad/d971ad6f00240fb1298cc8f776cc9fe5.jpg"
      },
      {
        id: 103,
        name: "Pro Performance Wristbands",
        price: "$24.99",
        image: "https://i.pinimg.com/736x/83/6e/49/836e494598b5b130e13886eaca0c0286.jpg"
      },
      {
        id: 104,
        name: "Elite Tennis Dress",
        price: "$120.00",
        image: "https://i.pinimg.com/736x/8d/a8/cf/8da8cfdf05c5ed4ff2e870d2db6e2414.jpg"
      },
      {
        id: 105,
        name: "Performance Tennis Socks (3-Pack)",
        price: "$35.00",
        image: "https://i.pinimg.com/736x/99/90/1f/99901fb8734fb979f6bd289114c0aa5e.jpg"
      },
      {
        id: 106,
        name: "Tournament Tennis Bag",
        price: "$150.00",
        image: "https://i.pinimg.com/736x/83/8f/97/838f9795c279f112fe4e47d28eacebe6.jpg"
      }
    ]
  },
  {
    id: 2,
    name: "URBAN HOOPS",
    season: "SS 2024",
    description: "Street-ready basketball gear that transitions from the court to the city. Performance meets urban style in every piece.",
    image: "https://i.pinimg.com/736x/34/f5/3c/34f53ce2c963bec2c3e825ec790e9316.jpg",
    products: [
      {
        id: 201,
        name: "Elite Basketball Jersey",
        price: "$129.99",
        image: "https://i.pinimg.com/736x/b8/5b/1e/b85b1ef574ef073db446de6c4f07bf24.jpg"
      },
      {
        id: 202,
        name: "Performance Basketball Shorts",
        price: "$69.99",
        image: "https://i.pinimg.com/736x/5f/98/1b/5f981bbe6b8902150948d2bc9f93391b.jpg"
      },
      {
        id: 203,
        name: "High-Top Basketball Shoes",
        price: "$149.99",
        image: "https://i.pinimg.com/736x/59/7a/c1/597ac151939fc89cd45681d96d2874f5.jpg"
      },
      {
        id: 204,
        name: "Shooting Sleeve & Armband Set",
        price: "$45.00",
        image: "https://i.pinimg.com/736x/65/cc/bc/65ccbc121b046d40504a52b763ba0c04.jpg"
      },
      {
        id: 205,
        name: "Basketball Backpack",
        price: "$85.00",
        image: "https://i.pinimg.com/736x/fe/30/29/fe30292a664912d1bd2b407d7d280b47.jpg"
      },
      {
        id: 206,
        name: "Elite Basketball Socks (3-Pack)",
        price: "$39.99",
        image: "https://i.pinimg.com/736x/99/90/1f/99901fb8734fb979f6bd289114c0aa5e.jpg"
      }
    ]
  },
  {
    id: 3,
    name: "ELITE RUNNERS",
    season: "SPRING 24",
    description: "Lightweight, breathable running gear designed for maximum performance. Engineered to help you break personal records in style.",
    image: "https://i.pinimg.com/736x/7d/c4/e0/7dc4e0300aa890dd9bb4ad3bf83d597b.jpg",
    products: [
      {
        id: 301,
        name: "Aero-Dry Running Tee",
        price: "$59.99",
        image: "https://i.pinimg.com/736x/cb/83/59/cb83594474243b67184d0384f82e43d9.jpg"
      },
      {
        id: 302,
        name: "Performance Running Shorts",
        price: "$49.99",
        image: "https://i.pinimg.com/736x/fe/30/29/fe30292a664912d1bd2b407d7d280b47.jpg"
      },
      {
        id: 303,
        name: "Elite Running Socks (3-Pack)",
        price: "$34.99",
        image: "https://i.pinimg.com/736x/99/90/1f/99901fb8734fb979f6bd289114c0aa5e.jpg"
      },
      {
        id: 304,
        name: "Long Distance Running Tights",
        price: "$89.99",
        image: "https://i.pinimg.com/736x/83/8f/97/838f9795c279f112fe4e47d28eacebe6.jpg"
      },
      {
        id: 305,
        name: "Running Windbreaker Jacket",
        price: "$120.00",
        image: "https://i.pinimg.com/736x/f7/b2/78/f7b278c9ab56e0e9be268b079ddd99e8.jpg"
      },
      {
        id: 306,
        name: "Hydration Running Belt",
        price: "$45.00",
        image: "https://i.pinimg.com/736x/65/cc/bc/65ccbc121b046d40504a52b763ba0c04.jpg"
      }
    ]
  },
  {
    id: 4,
    name: "POOL CHAMPIONS",
    season: "SUMMER 24",
    description: "High-performance swimwear designed for competitive swimmers. Engineered for speed, durability, and maximum hydrodynamics in the water.",
    image: "https://i.pinimg.com/736x/18/5b/75/185b758a876d58882e2c8fea17bf42ab.jpg",
    products: [
      {
        id: 401,
        name: "Wave Performance Swim Short",
        price: "$395.00",
        image: "https://i.pinimg.com/736x/d7/b1/f3/d7b1f3f41a6ceae60e5ea81a779fbcb6.jpg"
      },
      {
        id: 402,
        name: "Current Technical Rashguard",
        price: "$295.00",
        image: "https://i.pinimg.com/736x/2e/2c/2c/2e2c2cc2011e7dbd32c560f71531c527.jpg"
      },
      {
        id: 403,
        name: "Aquatic Performance Cap",
        price: "$195.00",
        image: "https://i.pinimg.com/736x/81/da/3e/81da3e15849f28c9c6fbd88af2c89e4b.jpg"
      },
      {
        id: 404,
        name: "Competition Swim Goggles",
        price: "$75.00",
        image: "https://i.pinimg.com/736x/3c/0f/e2/3c0fe28b4579d8e75148140ad5ef1d26.jpg"
      },
      {
        id: 405,
        name: "Hydrodynamic Swim Fins",
        price: "$120.00",
        image: "https://i.pinimg.com/736x/b3/58/b9/b358b99f254556b945c75f4bd0b84a1b.jpg"
      },
      {
        id: 406,
        name: "Swim Training Pull Buoy",
        price: "$45.00",
        image: "https://i.pinimg.com/736x/99/90/1f/99901fb8734fb979f6bd289114c0aa5e.jpg"
      }
    ]
  },
  {
    id: 5,
    name: "MOMENTUM SHIFT",
    season: "FALL 23",
    description: "Our celebration of dynamic movement, designed for athletes who push boundaries in style and performance",
    image: "https://i.pinimg.com/736x/cd/fa/76/cdfa764b215d7a918a03a545a10b0ce5.jpg",
    products: [
      {
        id: 501,
        name: "Kinetic Performance Jacket",
        price: "$795.00",
        image: "https://i.pinimg.com/736x/f7/b2/78/f7b278c9ab56e0e9be268b079ddd99e8.jpg"
      },
      {
        id: 502,
        name: "Dynamic Training Tights",
        price: "$395.00",
        image: "https://i.pinimg.com/736x/83/8f/97/838f9795c279f112fe4e47d28eacebe6.jpg"
      },
      {
        id: 503,
        name: "Motion Compression Top",
        price: "$325.00",
        image: "https://i.pinimg.com/736x/65/cc/bc/65ccbc121b046d40504a52b763ba0c04.jpg"
      }
    ]
  },
  {
    id: 6,
    name: "TENNIS ESSENTIALS",
    season: "SPRING 24",
    description: "Tennis-inspired silhouettes reimagined for both on and off court presence with uncompromising quality",
    image: "https://i.pinimg.com/736x/8d/a8/cf/8da8cfdf05c5ed4ff2e870d2db6e2414.jpg",
    products: [
      {
        id: 601,
        name: "Court Performance Polo",
        price: "$350.00",
        image: "https://i.pinimg.com/736x/b3/58/b9/b358b99f254556b945c75f4bd0b84a1b.jpg"
      },
      {
        id: 602,
        name: "Vision Tennis Shorts",
        price: "$295.00",
        image: "https://i.pinimg.com/736x/5f/98/1b/5f981bbe6b8902150948d2bc9f93391b.jpg"
      },
      {
        id: 603,
        name: "Match Performance Visor",
        price: "$175.00",
        image: "https://i.pinimg.com/736x/08/75/4d/08754dd25daa5ef9bb0ec4a4bffa2fe7.jpg"
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
