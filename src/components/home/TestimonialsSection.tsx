
import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Regular Customer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    text: "Stories Coffee is my daily ritual! Their açaí bowls are the perfect balance of flavors and textures, and the staff always remembers my name and order.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Food Blogger",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    text: "As someone who reviews cafés professionally, I can say that Stories Coffee stands out for their attention to detail and commitment to quality in every single cup.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Local Artist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
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
                "bg-white dark:bg-stories-dark p-8 rounded-xl shadow-md relative glass",
                isVisible && "opacity-0 animate-fade-up",
                isVisible && `delay-${Math.min(index * 100, 300)}`
              )}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-stories-dark rounded-full p-1">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              
              <div className="mt-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-stories-gold fill-stories-gold" />
                  ))}
                </div>
                
                <p className="text-stories-dark/80 dark:text-white/80 italic mb-6">
                  "{testimonial.text}"
                </p>
                
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                <p className="text-sm text-stories-dark/60 dark:text-white/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
