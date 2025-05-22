import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const designers = [
  {
    id: 1,
    name: "Elise Laurent",
    role: "Creative Director",
    bio: "Former protégé of the legendary Jean-Paul Gaultier, Elise brings her visionary approach to MAISON's design philosophy. Her signature blend of architectural forms and fluid silhouettes has redefined luxury sportswear.",
    image: "https://i.pinimg.com/736x/c0/db/cb/c0dbcbe1b971af7b7e14b9c2d730f3b0.jpg",
    specialty: "Apparel Design",
    quote: "I don't design clothes for the body; I design them for movement and performance."
  },
  {
    id: 2,
    name: "Akira Tanaka",
    role: "Technical Director",
    bio: "With an engineering background from Tokyo Institute of Technology and design experience at Yohji Yamamoto, Akira creates revolutionary technical fabrics that combine performance with sustainability.",
    image: "https://i.pinimg.com/736x/02/97/1f/02971f694797cae3962ba78c6ea24797.jpg",
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
            className="mb-20 text-center"
          >
            <h1 className="font-display text-6xl md:text-7xl fashion-header mb-6">
              MASTER CRAFTSMEN
            </h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Meet the visionary minds behind MAISON's revolutionary blend of high fashion and athletic performance.
            </p>
          </motion.div>

          <div className="space-y-24">
            {designers.map((designer, index) => (
              <motion.div
                key={designer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-8 items-start"
              >
                <div className="w-full max-w-md mx-auto">
                  <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={designer.image}
                      alt={designer.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="space-y-6 p-4">
                  <div className="space-y-2">
                    <h2 className="font-display text-3xl md:text-4xl fashion-header">{designer.name}</h2>
                    <p className="text-foreground/70 text-base md:text-lg">{designer.role}</p>
                  </div>

                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm font-medium text-foreground/60 mb-1">SPECIALTY</p>
                    <p className="text-foreground font-medium">{designer.specialty}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-foreground/90 leading-relaxed">{designer.bio}</p>
                    <blockquote className="relative pl-6 border-l-2 border-primary/30 italic text-foreground/80">
                      <span className="absolute left-0 top-0 text-4xl text-primary/30 leading-none">&ldquo;</span>
                      <p className="pl-4 pt-2">{designer.quote}</p>
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
}
