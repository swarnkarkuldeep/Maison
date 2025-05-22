
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Sustainability initiatives data
const initiatives = [
  {
    id: 1,
    title: "RECYCLED MATERIALS",
    description: "By 2026, 80% of our products will be made from recycled or renewable materials. We've already achieved 65% across our premium collections.",
    metric: "65%",
    metricLabel: "Materials Recycled",
    image: "https://images.unsplash.com/photo-1586952205448-a5717505c09b?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "CARBON NEUTRAL",
    description: "Our operations are carbon neutral since 2022, with a commitment to reduce absolute emissions by 50% by 2028.",
    metric: "50%",
    metricLabel: "Emission Reduction Goal",
    image: "https://images.unsplash.com/photo-1613119351785-b13a44d3f3a3?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "WATER CONSERVATION",
    description: "Our innovative dyeing process uses 95% less water than conventional methods, saving millions of gallons annually.",
    metric: "95%",
    metricLabel: "Less Water Usage",
    image: "https://images.unsplash.com/photo-1553901753-dbc95ffd2344?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    title: "FAIR LABOR",
    description: "100% of our manufacturing partners are regularly audited for fair labor practices and safe working conditions.",
    metric: "100%",
    metricLabel: "Fair Labor Compliant",
    image: "https://images.unsplash.com/photo-1604802427103-11a13904145f?auto=format&fit=crop&q=80&w=600",
  },
];

// FAQ data
const faqs = [
  {
    question: "How does MAISON ensure ethical sourcing of materials?",
    answer: "All our raw materials are sourced through our rigorous Ethical Sourcing Program. This includes traceability requirements, third-party certifications, and regular supplier audits for environmental and social compliance. We publicly disclose our tier 1 and tier 2 suppliers and are working toward complete supply chain transparency by 2027."
  },
  {
    question: "What happens to unsold MAISON products?",
    answer: "We employ a carefully planned production strategy to minimize overproduction. Any unsold products are either donated to sports programs in underserved communities or, if worn or returned, are refurbished through our MAISON Renew program. No MAISON products are ever incinerated or sent to landfill."
  },
  {
    question: "How is MAISON reducing its carbon footprint?",
    answer: "We're tackling our carbon footprint through multiple strategies: (1) Renewable energy in all owned facilities, (2) Localized production to reduce shipping emissions, (3) Transition to low-carbon materials, (4) Optimization of logistics, and (5) Carbon offsets for remaining emissions while we work on absolute reductions."
  },
  {
    question: "Are MAISON products designed for longevity?",
    answer: "Yes, durability is core to our sustainability approach. Our products undergo rigorous testing to ensure they maintain performance through extended use. We also offer repair services and provide care guides to extend product lifespan. Our warranty program covers manufacturing defects, and we're developing specialized recycling for products at end-of-life."
  },
  {
    question: "Does MAISON use animal-derived materials?",
    answer: "We've eliminated all exotic animal skins and fur from our products. For items that traditionally used leather, we've transitioned to either responsibly sourced leather with LWG certification or innovative plant-based alternatives. All down insulation is certified to the Responsible Down Standard, and we're increasing our use of synthetic alternatives."
  }
];

export default function SustainabilityPage() {
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
                className="lg:col-span-5 lg:order-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-display text-6xl md:text-7xl xl:text-8xl fashion-header mb-6">
                  OUR COMMITMENT TO THE PLANET
                </h1>
                <p className="text-foreground/70 text-lg mb-8 max-w-xl">
                  At MAISON, we believe that luxury and sustainability go hand in hand. We are dedicated to creating exceptional sports products while minimizing our environmental impact.
                </p>
                <Button className="px-8">
                  SUSTAINABILITY REPORT
                </Button>
              </motion.div>
              
              <motion.div 
                className="lg:col-span-7 lg:order-1 relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1531010666344-93d941596260?auto=format&fit=crop&q=80&w=1000" 
                    alt="MAISON Sustainability"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-8 -right-8 bg-foreground text-background p-6 md:p-8 w-64 shadow-lg">
                  <p className="text-sm text-background/70 mb-1">COMMITTED TO</p>
                  <p className="font-display text-xl">
                    Carbon neutrality by 2028
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Our Approach Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-display text-4xl md:text-5xl fashion-header mb-6">OUR APPROACH</h2>
              <p className="text-foreground/70 text-lg">
                Our sustainability strategy is built on four key pillars that guide everything we do, from design to manufacturing to distribution.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {initiatives.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row gap-8"
                >
                  <div className="w-full md:w-32 overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 md:h-32 object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-display text-4xl">{item.metric}</span>
                      <span className="text-sm text-foreground/70 leading-tight">{item.metricLabel}</span>
                    </div>
                    <h3 className="font-display text-xl mb-3">{item.title}</h3>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Sustainable Materials Section with Asymmetric Layout */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div 
                className="lg:col-span-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display text-5xl md:text-6xl fashion-header mb-8">SUSTAINABLE MATERIALS</h2>
                
                <div className="space-y-6 text-foreground/70">
                  <p>
                    At MAISON, we're committed to using the most innovative and sustainable materials available without compromising on performance or luxury.
                  </p>
                  
                  <p>
                    Our materials team works with suppliers and research labs to develop exclusive fabrics that meet our exacting standards for both sustainability and performance.
                  </p>
                  
                  <div className="space-y-4 mt-8">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-foreground"></div>
                      <span className="font-medium text-foreground">Recycled Ocean Plastic</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-foreground"></div>
                      <span className="font-medium text-foreground">Bio-Based Performance Polymers</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-foreground"></div>
                      <span className="font-medium text-foreground">Regenerated Nylon and Polyester</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-foreground"></div>
                      <span className="font-medium text-foreground">Natural Rubber Alternatives</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-foreground"></div>
                      <span className="font-medium text-foreground">Low-Impact Dyeing Processes</span>
                    </div>
                  </div>
                </div>
                
                <Button className="mt-8" variant="outline">
                  MATERIALS INNOVATION LAB
                </Button>
              </motion.div>
              
              <motion.div 
                className="lg:col-span-7 grid grid-cols-12 gap-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="col-span-7 aspect-square overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1606388591052-f8c1c3d3df31?auto=format&fit=crop&q=80&w=600" 
                    alt="Sustainable materials"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-5 aspect-square overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1602532647357-f069af9751a4?auto=format&fit=crop&q=80&w=600" 
                    alt="Material research"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-5 aspect-square overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1605546122746-16bbe139afb1?auto=format&fit=crop&q=80&w=600" 
                    alt="Material testing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-7 aspect-square overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1604754742629-3e5728249d73?auto=format&fit=crop&q=80&w=600" 
                    alt="Sustainable production"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Impact Report Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="font-display text-5xl md:text-6xl fashion-header mb-6">IMPACT REPORT</h2>
              <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                Transparency is key to our sustainability journey. We publish annual impact reports detailing our progress and challenges.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-background p-8 flex flex-col"
              >
                <h3 className="font-display text-xl mb-4">ENVIRONMENTAL IMPACT</h3>
                <div className="flex-grow">
                  <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-6">
                    <li>45% reduction in carbon emissions since 2020</li>
                    <li>100% renewable energy in owned facilities</li>
                    <li>Water usage decreased by 38% per product</li>
                    <li>Zero waste to landfill in our production</li>
                    <li>65% recycled materials across all collections</li>
                  </ul>
                </div>
                <Separator className="mb-6" />
                <Button variant="outline" className="w-full">FULL REPORT</Button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-background p-8 flex flex-col"
              >
                <h3 className="font-display text-xl mb-4">SOCIAL RESPONSIBILITY</h3>
                <div className="flex-grow">
                  <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-6">
                    <li>Fair labor practices across 100% of suppliers</li>
                    <li>Living wages for all factory workers</li>
                    <li>75% gender balance in management positions</li>
                    <li>28,000 youth reached through sports programs</li>
                    <li>$3.6M invested in community initiatives</li>
                  </ul>
                </div>
                <Separator className="mb-6" />
                <Button variant="outline" className="w-full">FULL REPORT</Button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-background p-8 flex flex-col"
              >
                <h3 className="font-display text-xl mb-4">CIRCULAR ECONOMY</h3>
                <div className="flex-grow">
                  <ul className="list-disc list-inside space-y-2 text-foreground/70 mb-6">
                    <li>15,000+ products repaired through our service</li>
                    <li>Take-back program launched in 12 countries</li>
                    <li>8 tonnes of materials recycled from used products</li>
                    <li>25% of new designs use mono-materials</li>
                    <li>Extended product warranties implemented</li>
                  </ul>
                </div>
                <Separator className="mb-6" />
                <Button variant="outline" className="w-full">FULL REPORT</Button>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="font-display text-5xl md:text-6xl fashion-header mb-6">FREQUENTLY ASKED QUESTIONS</h2>
              <p className="text-foreground/70 text-lg max-w-2xl">
                Answers to the most common questions about our sustainability initiatives.
              </p>
            </motion.div>
            
            <div className="max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <AccordionItem value={`faq-${index}`}>
                      <AccordionTrigger className="text-lg font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-foreground text-background p-8 md:p-16 text-center"
            >
              <h2 className="font-display text-4xl md:text-5xl mb-6">JOIN OUR MISSION</h2>
              <p className="text-background/80 text-lg max-w-2xl mx-auto mb-8">
                Be part of the change. Join us in creating a more sustainable future for sports and fashion.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="outline" className="border-background text-background hover:bg-background hover:text-foreground">
                  DOWNLOAD SUSTAINABILITY REPORT
                </Button>
                <Button variant="outline" className="border-background text-background hover:bg-background hover:text-foreground">
                  CONTACT SUSTAINABILITY TEAM
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
