
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

// Career opportunities data
const careers = [
  {
    id: 1,
    title: "Sports Product Designer",
    department: "Product Development",
    location: "Paris, France",
    type: "Full-time",
    description: "Lead the design of innovative sports equipment that combines luxury materials with maximum performance.",
  },
  {
    id: 2,
    title: "Senior Marketing Manager",
    department: "Marketing",
    location: "New York, USA",
    type: "Full-time",
    description: "Develop and implement global marketing strategies for our premium sports collections.",
  },
  {
    id: 3,
    title: "Retail Experience Director",
    department: "Retail",
    location: "Milan, Italy",
    type: "Full-time",
    description: "Create exceptional in-store experiences that embody the MAISON luxury sports ethos.",
  },
  {
    id: 4,
    title: "Materials Innovation Specialist",
    department: "R&D",
    location: "Tokyo, Japan",
    type: "Full-time",
    description: "Research and develop next-generation materials that elevate athletic performance and luxury.",
  },
  {
    id: 5,
    title: "Digital Experience Designer",
    department: "Digital",
    location: "London, UK",
    type: "Full-time",
    description: "Shape our digital presence to reflect our commitment to excellence and innovation.",
  },
  {
    id: 6,
    title: "Athlete Relations Manager",
    department: "Partnerships",
    location: "Los Angeles, USA",
    type: "Full-time",
    description: "Cultivate relationships with elite athletes and sports organizations globally.",
  }
];

// Company values data
const values = [
  { 
    title: "EXCELLENCE",
    description: "We pursue perfection in everything we create. Our standards exceed industry norms because our community expects nothing less."
  },
  { 
    title: "INNOVATION",
    description: "We constantly push boundaries, combining cutting-edge technology with artisanal craftsmanship to create products that define the future of sport."
  },
  { 
    title: "PERFORMANCE",
    description: "We design for elite athleticism, creating equipment and apparel that enables peak human achievement, without compromising on style."
  },
  { 
    title: "SUSTAINABILITY",
    description: "We create with consciousness, implementing responsible practices throughout our supply chain while maintaining our luxury standards."
  },
];

export default function CareersPage() {
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
                className="lg:col-span-7 lg:order-2 relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=1000" 
                    alt="MAISON Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-8 -right-8 bg-background p-6 md:p-8 w-64 shadow-lg">
                  <p className="text-sm text-foreground/70 mb-1">OUR TEAM</p>
                  <p className="font-display text-xl">
                    Join a diverse team of innovators, athletes, and creators.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:col-span-5 lg:order-1"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-display text-6xl md:text-7xl xl:text-8xl fashion-header mb-6">
                  SHAPE THE FUTURE OF SPORT
                </h1>
                <p className="text-foreground/70 text-lg mb-8 max-w-xl">
                  At MAISON, we're seeking passionate individuals who share our vision of redefining luxury sports equipment and apparel for the modern athlete.
                </p>
                <Button className="px-8">VIEW OPEN POSITIONS</Button>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-display text-4xl md:text-5xl fashion-header mb-6">OUR VALUES</h2>
              <p className="text-foreground/70 text-lg">
                These principles guide everything we do, from product design to team building.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background p-8 h-full flex flex-col"
                >
                  <h3 className="font-display text-2xl mb-4">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Asymmetric Why Join Us Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div 
                className="lg:col-span-5"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display text-5xl md:text-6xl fashion-header mb-8">WHY JOIN MAISON</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Global Influence</h3>
                    <p className="text-foreground/70">
                      Work on products used by elite athletes around the world, shaping the future of sports performance.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">Creative Freedom</h3>
                    <p className="text-foreground/70">
                      Innovation is at our core—we encourage bold ideas and revolutionary approaches.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">Growth & Development</h3>
                    <p className="text-foreground/70">
                      Continuous learning is built into our culture, with mentorship from industry leaders.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">Work-Life Balance</h3>
                    <p className="text-foreground/70">
                      We value wellbeing and provide flexible working arrangements to support your lifestyle.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:col-span-7 grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=500" 
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden row-span-2">
                  <img 
                    src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?auto=format&fit=crop&q=80&w=500" 
                    alt="Design process"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden col-span-2">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                    alt="Office space"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Open Positions Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="font-display text-5xl md:text-6xl fashion-header mb-6">OPEN POSITIONS</h2>
              <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                Join our team of visionaries shaping the future of luxury sports equipment and apparel.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {careers.map((job, index) => (
                <motion.div 
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription>{job.department}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-foreground/80 mb-4">{job.description}</p>
                      <div className="flex space-x-2 text-sm">
                        <span className="bg-secondary/50 px-2 py-1 rounded">{job.location}</span>
                        <span className="bg-secondary/50 px-2 py-1 rounded">{job.type}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Apply Now</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-foreground text-background p-8 md:p-16 text-center"
            >
              <h2 className="font-display text-4xl md:text-5xl mb-6">DON'T SEE THE RIGHT POSITION?</h2>
              <p className="text-background/80 text-lg max-w-2xl mx-auto mb-8">
                We're always looking for exceptional talent. Send us your resume and tell us how you can contribute to the MAISON vision.
              </p>
              <Button variant="outline" className="border-background text-background hover:bg-background hover:text-foreground">
                Submit Spontaneous Application
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </motion.div>
  );
}
