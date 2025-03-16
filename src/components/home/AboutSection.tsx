
import { useEffect, useRef, useState } from "react";
import { Coffee, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section className="section-padding relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-grain-pattern opacity-5"></div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Stories Coffee Experience"
                className={cn(
                  "w-full h-auto rounded-2xl object-cover",
                  isVisible ? "opacity-0 animate-fade-in" : "opacity-0"
                )}
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-36 h-36 md:w-48 md:h-48 bg-stories-green rounded-2xl p-6 glass flex flex-col justify-center text-white shadow-lg">
              <Coffee className="h-8 w-8 mb-2" />
              <span className="text-lg md:text-xl font-bold">Est. 2025</span>
              <p className="text-sm text-white/80">Serving Sydney's finest coffee</p>
            </div>
          </div>
          
          <div>
            <span className={cn(
              "inline-block px-4 py-1 rounded-full bg-stories-green/10 text-stories-green dark:bg-stories-green/20 text-sm font-medium mb-4",
              isVisible ? "opacity-0 animate-fade-up" : "opacity-0"
            )}>
              Our Story
            </span>
            
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-6",
              isVisible ? "opacity-0 animate-fade-up delay-100" : "opacity-0"
            )}>
              Crafting Memorable <span className="text-stories-green">Coffee Experiences</span>
            </h2>
            
            <p className={cn(
              "text-stories-dark/70 dark:text-white/70 mb-6",
              isVisible ? "opacity-0 animate-fade-up delay-200" : "opacity-0"
            )}>
              Stories Coffee was founded in 2025 with a deep passion for coffee and food, backed by decades of experience.
              We’ve perfected the art of brewing exceptional coffee and creating delicious, wholesome dishes like açaí bowls, smoothies, and sandwiches.
            </p>
            
            <p className={cn(
              "text-stories-dark/70 dark:text-white/70 mb-8",
              isVisible ? "opacity-0 animate-fade-up delay-300" : "opacity-0"
            )}>
              Our commitment to quality is at the heart of everything we do, ensuring every bite and sip reflects our dedication to craftsmanship.
              More than just a café, Stories Coffee is a space where great flavors and community come together to create memorable moments.
            </p>
            
            <Link to="/about">
              <Button className={cn(
                "bg-stories-green hover:bg-stories-green/90 text-white rounded-full",
                isVisible ? "opacity-0 animate-fade-up delay-400" : "opacity-0"
              )}>
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
