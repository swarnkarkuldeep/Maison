
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const designers = [
  {
    id: 1,
    name: "Elise Laurent",
    role: "Creative Director",
    bio: "Former protégé of the legendary Jean-Paul Gaultier, Elise brings her visionary approach to MAISON's design philosophy. Her signature blend of architectural forms and fluid silhouettes has redefined luxury sportswear.",
    image: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?auto=format&fit=crop&q=80&w=800",
    specialty: "Apparel Design",
    quote: "I don't design clothes for the body; I design them for movement and performance."
  },
  {
    id: 2,
    name: "Akira Tanaka",
    role: "Technical Director",
    bio: "With an engineering background from Tokyo Institute of Technology and design experience at Yohji Yamamoto, Akira creates revolutionary technical fabrics that combine performance with sustainability.",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=800",
    specialty: "Technical Fabrics",
    quote: "The future of sportswear is zero-compromise: maximum performance with minimal environmental impact."
  },
  {
    id: 3,
    name: "Marcus Williams",
    role: "Equipment Designer",
    bio: "Former professional basketball player turned designer, Marcus brings first-hand experience to creating performance equipment that meets the demands of elite athletes while maintaining MAISON's signature aesthetic.",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&q=80&w=800",
    specialty: "Sports Equipment",
    quote: "Equipment should feel like an extension of the athlete's body - present in performance, invisible in sensation."
  },
  {
    id: 4,
    name: "Sofia Mendoza",
    role: "Footwear Design Lead",
    bio: "With 15 years of experience designing for top athletic brands and a background in podiatric medicine, Sofia creates footwear that combines cutting-edge support technology with fashion-forward silhouettes.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=800",
    specialty: "Footwear",
    quote: "The foot is the foundation of human movement. When we perfect footwear, we perfect potential."
  },
  {
    id: 5,
    name: "Henri Dubois",
    role: "Accessories Director",
    bio: "Trained in traditional leather crafting at a historic Parisian maison before branching into technical materials, Henri brings old-world craftsmanship to contemporary performance accessories.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
    specialty: "Accessories",
    quote: "Accessories are not afterthoughts - they are the finishing touches that complete both the aesthetic and function."
  }
];

export default function DesignersPage() {
  const [selectedTab, setSelectedTab] = useState<string>(designers[0].id.toString());
  
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
            <h1 className="font-display text-6xl md:text-7xl fashion-header mb-6">MASTER CRAFTSMEN</h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Meet the visionary minds behind MAISON's revolutionary blend of high fashion and athletic performance.
            </p>
          </motion.div>
          
          <Tabs
            defaultValue={selectedTab}
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="w-full max-w-5xl mx-auto"
          >
            <div className="overflow-x-auto pb-4">
              <TabsList className="bg-transparent border-b border-foreground/20 rounded-none w-full justify-start space-x-8">
                {designers.map((designer) => (
                  <TabsTrigger
                    key={designer.id}
                    value={designer.id.toString()}
                    className="border-b-2 border-transparent data-[state=active]:border-foreground pb-4 rounded-none"
                  >
                    {designer.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {designers.map((designer) => (
              <TabsContent
                key={designer.id}
                value={designer.id.toString()}
                className="mt-12"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-2 gap-12 items-center"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={designer.image}
                      alt={designer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-display text-4xl fashion-header">{designer.name}</h2>
                      <p className="text-foreground/70 text-lg">{designer.role}</p>
                    </div>
                    
                    <p className="text-sm text-foreground/60">SPECIALTY</p>
                    <p className="font-medium">{designer.specialty}</p>
                    
                    <p className="text-lg">{designer.bio}</p>
                    
                    <blockquote className="border-l-2 border-foreground/20 pl-4 italic text-foreground/80 text-lg">
                      "{designer.quote}"
                    </blockquote>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
}
