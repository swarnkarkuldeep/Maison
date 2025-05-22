
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast({
      title: "Thanks for subscribing!",
      description: "You'll now receive our newsletter updates.",
    });
    
    setEmail("");
  };

  return (
    <footer className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Link to="/" className="inline-block mb-8">
              <h2 className="text-3xl font-bold">MAISON</h2>
            </Link>
            
            <p className="text-foreground/70 mb-8">
              Premium sports equipment and apparel designed for elite performance and luxury style.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <h3 className="font-medium">Join our newsletter</h3>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent"
                  required
                />
                <Button type="submit" variant="outline">
                  Submit
                </Button>
              </div>
            </form>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-medium mb-4">Shop</h3>
            <ul className="space-y-2 text-foreground/70">
              <li><Link to="/products" className="hover:text-foreground transition-colors">All Products</Link></li>
              <li><Link to="/collections" className="hover:text-foreground transition-colors">Collections</Link></li>
              <li><Link to="/designers" className="hover:text-foreground transition-colors">Designers</Link></li>
              <li><Link to="/stores" className="hover:text-foreground transition-colors">Stores</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-medium mb-4">Help</h3>
            <ul className="space-y-2 text-foreground/70">
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-foreground transition-colors">Shipping</Link></li>
              <li><Link to="#" className="hover:text-foreground transition-colors">Returns</Link></li>
              <li><Link to="#" className="hover:text-foreground transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-medium mb-4">About</h3>
            <ul className="space-y-2 text-foreground/70">
              <li><Link to="#" className="hover:text-foreground transition-colors">Our Story</Link></li>
              <li><Link to="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link to="/press" className="hover:text-foreground transition-colors">Press</Link></li>
              <li><Link to="/sustainability" className="hover:text-foreground transition-colors">Sustainability</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-foreground/70">
              <li><Link to="#" className="hover:text-foreground transition-colors">Terms & Conditions</Link></li>
              <li><Link to="#" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-foreground transition-colors">Cookies</Link></li>
              <li><Link to="#" className="hover:text-foreground transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-foreground/10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} MAISON. All rights reserved.</p>
          
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="hover:text-foreground transition-colors">Facebook</a>
            <a href="#" className="hover:text-foreground transition-colors">Pinterest</a>
          </div>
        </div>
        
        <div className="mt-12 mb-8 p-6 bg-muted/50 rounded-lg text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl font-bold mb-4">Built in just 7 hours!</p>
            <p className="text-foreground/80 mb-4">
              Yes, you read that right! This entire e-commerce experience was crafted in a single day's work. 
              From design to deployment, I built it with ❤️, Coffee, and a few too many keyboard smashes.
            </p>
            <p className="text-foreground/70 italic">
              Found a bug? That's not a bug, it's a "feature in progress" and will be fixed with time.
            </p>
          </div>
        </div>

        <div className="mt-8 text-xs text-foreground/50 text-center">
          <p className="max-w-4xl mx-auto">
            This website is created solely for demonstration and web development purposes. All content, including but not limited to images, text, graphics, and code, is intended for illustrative and educational use only. No commercial activity is conducted through this website, and no profit is derived from its operation.

            All images, brand names, logos, and trademarks featured on this website are the property of their respective owners. Their use is strictly for illustrative purposes and does not imply any affiliation with, endorsement by, or sponsorship from the respective owners. No copyright infringement is intended, and all intellectual property rights remain with their rightful holders.

            The products, services, and entities depicted on this website are either fictitious or used in a purely illustrative manner. Any resemblance to actual products, services, companies, persons (living or dead), or actual events is purely coincidental and unintentional.

            This website does not offer any goods or services for sale, nor does it collect payment or personal information for commercial purposes. The information provided herein is not intended as professional advice, and users should not rely on it for any real-world decision-making.
          </p>
          <p className="mt-2">All the images are taken from Pinterest and are not at all mine.</p>
        </div>
      </div>
    </footer>
  );
}
