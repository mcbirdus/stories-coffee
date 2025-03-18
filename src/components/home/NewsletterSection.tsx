
import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, SendHorizonal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes - in a real implementation you would send to an API endpoint
      console.log("Subscribing email to laith@nexusbyte.com.au:", email);
      
      toast.success("Newsletter subscription successful!", {
        description: "Thank you for subscribing to our newsletter!"
      });
      
      setEmail("");
    } catch (error) {
      toast.error("Subscription failed", {
        description: "Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-stories-cream/50 dark:bg-stories-dark/90 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-grain-pattern opacity-5"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Location & Contact */}
          <div className={cn(
            isVisible ? "opacity-0 animate-fade-in" : "opacity-0"
          )}>
            <span className="inline-block px-4 py-1 rounded-full bg-stories-green/10 text-stories-green dark:bg-stories-green/20 text-sm font-medium mb-4">
              Find Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Us Today</h2>
            
            <div className="mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8069452924373!2d151.2052942!3d-33.8748277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3dc9433bbf%3A0xcaddf10a1cdfe08!2sWorld%20Square%2C%20Pitt%20St%2C%20Sydney%20NSW%202000!5e0!3m2!1sen!2sau!4v1637123456789!5m2!1sen!2sau"
                width="100%"
                height="300"
                className="rounded-xl"
                loading="lazy"
                title="Stories Coffee Location"
              ></iframe>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-stories-green mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Address</h3>
                  <p className="text-stories-dark/70 dark:text-white/70">
                    World Square, Pitt Street, Sydney, NSW 2000
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-stories-green mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <p className="text-stories-dark/70 dark:text-white/70">
                    (02) 8959 9728
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-stories-green mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-stories-dark/70 dark:text-white/70">
                    <a href="mailto:laith@nexusbyte.com.au" className="hover:text-stories-green transition-colors">
                      laith@nexusbyte.com.au
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className={cn(
            "bg-white dark:bg-stories-dark p-6 sm:p-8 md:p-12 rounded-xl shadow-md glass-dark",
            isVisible ? "opacity-0 animate-fade-in delay-300" : "opacity-0"
          )}>
            <span className="inline-block px-4 py-1 rounded-full bg-stories-green/10 text-stories-green dark:bg-stories-green/20 text-sm font-medium mb-4">
              Stay Updated
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Join Our Newsletter</h2>
            <p className="text-stories-dark/70 dark:text-white/70 mb-8">
              Subscribe to receive updates on our latest offers, new menu items, and exclusive events.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="newsletter-email" className="block font-medium">
                  Email Address
                </label>
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="youremail@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg focus:ring-stories-green focus:border-stories-green"
                  disabled={isSubmitting}
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-stories-green hover:bg-stories-green/90 text-white rounded-lg py-4 sm:py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Subscribing...
                  </span>
                ) : (
                  <>
                    Subscribe
                    <SendHorizonal className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
              
              <p className="text-xs text-stories-dark/60 dark:text-white/60 text-center">
                By subscribing, you agree to receive marketing emails from Stories Coffee. 
                You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
