
import { useState, useEffect, useRef } from "react";
import { Coffee, Leaf, Salad, Cherry, Sandwich, BookOpen, GlassWater, CakeSlice } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface Category {
  id: number;
  name: string;
  icon: React.ElementType;
  slug: string;
  description: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Açaí",
    icon: Cherry,
    slug: "acai",
  },
  {
    id: 2,
    name: "Main Menu",
    icon: BookOpen,
    slug: "main-menu",
  },
  {
    id: 3,
    name: "Sandwiches",
    icon: Sandwich,
    slug: "sandwiches",
  },
  {
    id: 4,
    name: "Coffee",
    icon: Coffee,
    slug: "coffee",
  },
  {
    id: 5,
    name: "Iced Coffee",
    icon: GlassWater,
    slug: "iced-coffee",
  },
  {
    id: 6,
    name: "Teas",
    icon: Leaf,
    slug: "teas",
  },
  {
    id: 7,
    name: "Smoothies",
    icon: GlassWater,
    slug: "smoothies",
  },
  {
    id: 8,
    name: "Speciality",
    icon: GlassWater,
    slug: "speciality",
  },
  {
    id: 9,
    name: "Cold Pressed Juices",
    icon: GlassWater,
    slug: "cold-pressed-juices",
  },
  {
    id: 10,
    name: "Kombucha",
    icon: GlassWater,
    slug: "kombucha",
  },
  {
    id: 11,
    name: "Flavoured Sparkling",
    icon: GlassWater,
    slug: "flavoured-sparkling",
  },
  {
    id: 11,
    name: "Catering",
    icon: Sandwich,
    slug: "catering",
  },
];

const CategoriesSection = () => {
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
    <section className="section-padding bg-white dark:bg-stories-dark relative" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Menu Categories</h2>
          <p className="text-stories-dark/70 dark:text-white/70">
            Discover our wide range of handcrafted offerings, from specialty coffee to fresh smoothies and more.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/menu#${category.slug}`}
              className={cn(
                "bg-stories-light-gray dark:bg-stories-dark/60 rounded-xl p-6 text-center hover-lift hover:bg-white dark:hover:bg-stories-dark/80 border border-transparent hover:border-stories-green/20 dark:hover:border-stories-green/20 transition-all duration-500",
                isVisible && "opacity-0 animate-fade-up",
                isVisible && `delay-${Math.min(index * 100, 500)}`
              )}
            >
              <div className="bg-stories-green/10 dark:bg-stories-green/20 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <category.icon className="h-8 w-8 text-stories-green" />
              </div>
              <h3 className="text-xl font-bold mb-1 font-playfair">{category.name}</h3>
              <p className="text-sm text-stories-dark/70 dark:text-white/70">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
