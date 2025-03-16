
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
              <span className="text-lg md:text-xl font-bold">Est. 2016</span>
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
              Stories Coffee was born from a simple idea: that every cup of coffee has a story to tell. 
              Founded in 2016 in the heart of Sydney, we set out to create a space where 
              exceptional coffee, delicious food, and memorable moments come together.
            </p>
            
            <p className={cn(
              "text-stories-dark/70 dark:text-white/70 mb-8",
              isVisible ? "opacity-0 animate-fade-up delay-300" : "opacity-0"
            )}>
              Our commitment to quality drives everything we do - from sourcing the finest beans 
              directly from farmers, to handcrafting each beverage with precision and care, 
              to serving nourishing food made with locally-sourced ingredients.
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
