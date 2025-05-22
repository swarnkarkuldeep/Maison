
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Globe, ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We've received your message and will respond shortly.",
    });
    // Reset form
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
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
            className="mb-16 text-center"
          >
            <h1 className="font-display text-6xl md:text-7xl fashion-header mb-6">CONTACT US</h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              We're here to assist with any questions, feedback, or inquiries about our products and services.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="font-display text-3xl fashion-header mb-8">GET IN TOUCH</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-foreground/70" />
                  <div>
                    <h3 className="font-medium mb-1">Global Headquarters</h3>
                    <p className="text-foreground/70">21 Rue Saint-Honoré, 75001 Paris, France</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Phone className="h-6 w-6 text-foreground/70" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-foreground/70">+33 1 42 61 10 10</p>
                    <p className="text-foreground/70">Monday - Friday, 9am - 6pm (CET)</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Mail className="h-6 w-6 text-foreground/70" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-foreground/70">customer.service@maison.com</p>
                    <p className="text-foreground/70">press@maison.com</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Globe className="h-6 w-6 text-foreground/70" />
                  <div>
                    <h3 className="font-medium mb-1">Social Media</h3>
                    <div className="flex gap-4 mt-2">
                      <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Instagram</a>
                      <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Twitter</a>
                      <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">YouTube</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="font-display text-3xl fashion-header mb-8">SEND A MESSAGE</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select onValueChange={setSubject} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="customer-service">Customer Service</SelectItem>
                      <SelectItem value="product-inquiry">Product Inquiry</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                      <SelectItem value="press">Press Inquiry</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    rows={5}
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    required 
                  />
                </div>
                
                <Button type="submit" className="mt-4 group">
                  SEND MESSAGE
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
}
