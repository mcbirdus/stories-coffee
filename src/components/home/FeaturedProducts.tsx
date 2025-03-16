
import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  rating: number;
  featured: boolean;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Macchiato",
    category: "Coffee",
    price: "$5.00",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.7,
    featured: true
  },
  {
    id: 2,
    name: "Açaí Coconut Flakes",
    category: "Açaí",
    price: "$15.95",
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1741916520/mitch-fox-5pk7ZB1xyjU-unsplash_l67ua1.jpg",
    rating: 4.9,
    featured: true
  },
  {
    id: 3,
    name: "Ham, Cheese & Avocado Toast",
    category: "Sandwiches",
    price: "$14.00",
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1741914161/monteverdo-barnsley-BXNctQYqPOc-unsplash_ae6rfh.jpg",
    rating: 4.8,
    featured: true
  },
  {
    id: 4,
    name: "Lemongrass Ginger",
    category: "Teas",
    price: "$5.00",
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1741914081/pariwat-pannium-EgDkl00Hiqw-unsplash_qlnjjs.jpg",
    rating: 4.6,
    featured: true
  }
];

const FeaturedProducts = () => {
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
    <section className="section-padding bg-stories-cream/50 dark:bg-stories-dark/90 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-grain-pattern opacity-5"></div>
      
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-stories-green/10 text-stories-green dark:bg-stories-green/20 text-sm font-medium mb-4">
            Customer Favorites
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Featured Offerings</h2>
          <p className="text-stories-dark/70 dark:text-white/70">
            Discover our most loved menu items, crafted with care and premium ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className={cn(
                "bg-white dark:bg-stories-dark rounded-xl overflow-hidden shadow-md hover-lift",
                isVisible && "opacity-0 animate-fade-up",
                isVisible && `delay-${Math.min(index * 100, 500)}`
              )}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-stories-green font-medium">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold mt-1 mb-2 font-playfair">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">{product.price}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-stories-gold fill-stories-gold" />
                    <span className="ml-1 text-sm text-stories-dark/70 dark:text-white/70">
                      {product.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/menu">
            <Button className="bg-stories-green hover:bg-stories-green/90 text-white rounded-full px-8">
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
