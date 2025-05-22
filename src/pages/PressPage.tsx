
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle
} from "@/components/ui/card";
import { ArrowRight, Download, ExternalLink } from "lucide-react";

// Press releases data
const pressReleases = [
  {
    id: 1,
    title: "MAISON Announces Collaboration with Olympic Gold Medalist",
    date: "May 15, 2025",
    excerpt: "Luxury sports brand MAISON unveils exclusive collection designed with five-time Olympic champion.",
    image: "https://i.pinimg.com/736x/1a/b2/e5/1ab2e51870039ba1269fd22347d28b39.jpg",
  },
  {
    id: 2,
    title: "Revolutionary Performance Fabric Unveiled for Summer Collection",
    date: "April 3, 2025",
    excerpt: "MAISON introduces proprietary textile technology that enhances athletic performance while maintaining luxury aesthetics.",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "MAISON Opens Flagship Store in Paris",
    date: "March 10, 2025",
    excerpt: "New concept store on Avenue Montaigne merges luxury retail experience with athletic performance testing facilities.",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Annual Tennis Collection Launches with Sustainable Focus",
    date: "February 24, 2025",
    excerpt: "This year's tennis line features 85% recycled materials without compromising on MAISON's signature performance and style.",
    image: "https://i.pinimg.com/736x/84/3d/40/843d40dc70a144286a0cbb82fcea8b8a.jpg",
  },
];

// Media features data
const mediaFeatures = [
  {
    id: 1,
    publication: "Vogue",
    title: "How MAISON is Redefining Luxury Athletic Wear",
    date: "April 2025",
    link: "#",
  },
  {
    id: 2,
    publication: "Forbes",
    title: "MAISON: The Fastest Growing Luxury Sports Brand of the Year",
    date: "March 2025",
    link: "#",
  },
  {
    id: 3,
    publication: "GQ",
    title: "The Perfect Blend of Style and Performance: MAISON's New Collection",
    date: "March 2025",
    link: "#",
  },
  {
    id: 4,
    publication: "Sports Illustrated",
    title: "Pro Athletes Increasingly Choose MAISON for Competition Gear",
    date: "February 2025",
    link: "#",
  },
  {
    id: 5,
    publication: "Esquire",
    title: "MAISON's Design Team on Creating the Ultimate Sports Luxury Experience",
    date: "January 2025",
    link: "#",
  },
  {
    id: 6,
    publication: "Wallpaper",
    title: "Inside MAISON's Architecturally Stunning New Headquarters",
    date: "January 2025",
    link: "#",
  },
];

export default function PressPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Header />
      
      <main className="overflow-hidden">
        {/* Hero Section with Asymmetric Layout */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div 
                className="lg:col-span-6 lg:order-1"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-display text-6xl md:text-7xl xl:text-8xl fashion-header mb-6">
                  PRESS & MEDIA
                </h1>
                <p className="text-foreground/70 text-lg mb-8 max-w-xl">
                  Discover the latest news, press releases, and media coverage of MAISON's innovations in luxury sports equipment and apparel.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="px-8">PRESS KIT</Button>
                  <Button variant="outline" className="px-8">CONTACT PR</Button>
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:col-span-6 lg:order-2 relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://i.pinimg.com/736x/6f/62/8d/6f628d3b69692d73fee60a6d42bbb19d.jpg" 
                    alt="MAISON Press Conference"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-8 -left-8 bg-foreground text-background p-6 md:p-8 w-64 shadow-lg">
                  <p className="text-sm text-background/70 mb-1">LATEST NEWS</p>
                  <p className="font-display text-xl">
                    MAISON announces partnership with Paris 2025
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Press Releases Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="font-display text-4xl md:text-5xl fashion-header mb-6">PRESS RELEASES</h2>
              <p className="text-foreground/70 text-lg">
                The latest announcements from MAISON.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pressReleases.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="border-0 overflow-hidden bg-background h-full flex flex-col">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-8 flex-grow">
                      <p className="text-sm text-foreground/60 mb-2">{item.date}</p>
                      <h3 className="font-medium text-2xl mb-4 group-hover:text-primary/90 transition-colors">{item.title}</h3>
                      <p className="text-foreground/70">{item.excerpt}</p>
                    </CardContent>
                    <CardFooter className="p-8 pt-0">
                      <Button variant="outline" className="group-hover:bg-foreground group-hover:text-background transition-colors">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="flex justify-center mt-12">
              <Button variant="outline" size="lg" className="px-8">
                View All Press Releases
              </Button>
            </div>
          </div>
        </section>
        
        {/* Media Kit Section with Asymmetric Layout */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div 
                className="lg:col-span-7 grid grid-cols-6 gap-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="col-span-3 aspect-[1/1.2] overflow-hidden">
                  <img 
                    src="https://i.pinimg.com/736x/35/23/c9/3523c9779ec3fe12698f18ce669e806b.jpg" 
                    alt="MAISON Product Brochure"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-3 aspect-[1/1.2] overflow-hidden self-end">
                  <img 
                    src="https://i.pinimg.com/736x/3c/7b/38/3c7b383b17e0af63a003e22c73106160.jpg" 
                    alt="MAISON Logo Guidelines"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-6 aspect-[16/9] overflow-hidden">
                  <img 
                    src="https://i.pinimg.com/736x/9d/81/99/9d819923ec61af6ba612c9c356a2b95c.jpg" 
                    alt="MAISON Brand Assets"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:col-span-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="font-display text-5xl md:text-6xl fashion-header mb-8">MEDIA KIT</h2>
                <p className="text-foreground/70 text-lg mb-8">
                  Download official MAISON assets including logos, product images, executive headshots, and brand guidelines for media use.
                </p>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 border border-foreground/20 hover:bg-muted/30 transition-colors">
                    <span className="font-medium">Brand Guidelines</span>
                    <Button variant="ghost" size="icon">
                      <Download className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 border border-foreground/20 hover:bg-muted/30 transition-colors">
                    <span className="font-medium">Logo Package</span>
                    <Button variant="ghost" size="icon">
                      <Download className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 border border-foreground/20 hover:bg-muted/30 transition-colors">
                    <span className="font-medium">Product Images</span>
                    <Button variant="ghost" size="icon">
                      <Download className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 border border-foreground/20 hover:bg-muted/30 transition-colors">
                    <span className="font-medium">Executive Headshots</span>
                    <Button variant="ghost" size="icon">
                      <Download className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 border border-foreground/20 hover:bg-muted/30 transition-colors">
                    <span className="font-medium">Fact Sheet</span>
                    <Button variant="ghost" size="icon">
                      <Download className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Media Coverage Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="font-display text-5xl md:text-6xl fashion-header mb-6">MEDIA COVERAGE</h2>
              <p className="text-foreground/70 text-lg max-w-2xl">
                Recent features and articles about MAISON from leading publications.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaFeatures.map((item, index) => (
                <motion.a 
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background p-6 hover:bg-foreground hover:text-background transition-colors group"
                >
                  <p className="text-sm mb-1 text-foreground/60 group-hover:text-background/60">{item.date}</p>
                  <p className="font-medium text-lg mb-4 group-hover:text-background">{item.title}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-display">{item.publication}</span>
                    <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-foreground text-background p-8 md:p-16 text-center"
            >
              <h2 className="font-display text-4xl md:text-5xl mb-6">PRESS INQUIRIES</h2>
              <p className="text-background/80 text-lg max-w-2xl mx-auto mb-8">
                For media inquiries, interview requests, or additional information, please contact our PR team.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button variant="outline" className="border-background text-background hover:bg-background hover:text-foreground px-8">
                  press@maison.com
                </Button>
                <Button variant="outline" className="border-background text-background hover:bg-background hover:text-foreground px-8">
                  +1 (800) 555-1234
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </motion.div>
  );
}
