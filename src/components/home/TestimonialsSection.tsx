
import { useEffect, useRef, useState } from "react";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Regular Customer",
    text: "Stories Coffee is my daily ritual! Their açaí bowls are the perfect balance of flavors and textures, and the staff always remembers my name and order.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Food Blogger",
    text: "As someone who reviews cafés professionally, I can say that Stories Coffee stands out for their attention to detail and commitment to quality in every single cup.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Local Artist",
    text: "I come to Stories Coffee to find inspiration. The atmosphere is perfect for creativity, and their seasonal menu always has something new to discover.",
    rating: 5
  }
];

const TestimonialsSection = () => {
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
    <section className="section-padding bg-stories-green/5 dark:bg-stories-green/10 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-grain-pattern opacity-10"></div>
      
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-stories-green/10 text-stories-green dark:bg-stories-green/20 text-sm font-medium mb-4">
            What People Say
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Customer Stories</h2>
          <p className="text-stories-dark/70 dark:text-white/70">
            Don't just take our word for it. Here's what our community has to say about their Stories Coffee experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "bg-white dark:bg-stories-dark/80 p-8 rounded-xl shadow-md relative overflow-hidden",
                isVisible && "opacity-0 animate-fade-up",
                isVisible && `delay-${Math.min(index * 100, 300)}`
              )}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-stories-green/5 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-stories-green/5 rounded-tr-full"></div>
              
              <div className="relative z-10">
                {/* Quote icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-stories-green/10 dark:bg-stories-green/20 h-12 w-12 rounded-full flex items-center justify-center">
                    <Quote className="h-6 w-6 text-stories-green" />
                  </div>
                </div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-stories-gold fill-stories-gold" />
                  ))}
                </div>
                
                <p className="text-stories-dark/80 dark:text-white/80 italic mb-6 text-center">
                  "{testimonial.text}"
                </p>
                
                <div className="text-center">
                  <div className="w-12 h-1 bg-stories-green mx-auto mb-4"></div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-stories-dark/60 dark:text-white/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
