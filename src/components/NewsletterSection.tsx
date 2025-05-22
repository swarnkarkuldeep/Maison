
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically connect to a newsletter service
    toast({
      title: "Subscription successful!",
      description: "Thank you for subscribing to our newsletter.",
      duration: 3000,
    });
    
    setEmail("");
  };

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="w-full h-full bg-gradient-to-b from-transparent to-background/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl fashion-header mb-6">JOIN THE MAISON COMMUNITY</h2>
          <p className="text-foreground/70 mb-8">
            Subscribe to receive exclusive offers, early access to new collections, and invitations to MAISON events.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 bg-background/50 border border-foreground/20 focus:border-foreground/50 outline-none transition-colors"
            />
            <Button 
              type="submit"
              className="border border-foreground px-8 py-3 font-display fashion-subheader text-sm bg-foreground text-background hover:bg-transparent hover:text-foreground transition-colors"
            >
              SUBSCRIBE
            </Button>
          </form>
          
          <p className="mt-4 text-xs text-foreground/50">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from MAISON.
          </p>
        </div>
      </div>
    </section>
  );
}
