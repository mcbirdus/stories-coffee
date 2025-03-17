
import React, { useState, useEffect, useRef } from 'react';
import { Coffee, Cherry, Leaf, GlassWater, Sandwich, BookOpen, CakeSlice } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

// Define the Category type with description property
type Category = {
  id: number;
  name: string;
  icon: React.ForwardRefExoticComponent<any>;
  description: string; // Added description property
  slug: string;
};

const categories: Category[] = [
  {
    id: 1,
    name: "Açaí",
    icon: Cherry,
    description: "Fresh bowls with super fruits",
    slug: "acai",
  },
  {
    id: 2,
    name: "Main Menu",
    icon: BookOpen,
    description: "Our popular breakfast options",
    slug: "main-menu",
  },
  {
    id: 3,
    name: "Sandwiches",
    icon: Sandwich,
    description: "Fresh and tasty sandwiches",
    slug: "sandwiches",
  },
  {
    id: 4,
    name: "Coffee",
    icon: Coffee,
    description: "Premium coffee selection",
    slug: "coffee",
  },
  {
    id: 5,
    name: "Iced Coffee",
    icon: Coffee,
    description: "Refreshing iced coffee drinks",
    slug: "iced-coffee",
  },
  {
    id: 6,
    name: "Teas",
    icon: Leaf,
    description: "Quality loose leaf teas",
    slug: "teas",
  },
  {
    id: 7,
    name: "Smoothies",
    icon: GlassWater,
    description: "Healthy fruit smoothies",
    slug: "smoothies",
  },
  {
    id: 8,
    name: "Speciality",
    icon: GlassWater,
    description: "Unique signature drinks",
    slug: "speciality",
  },
  {
    id: 9,
    name: "Cold Pressed Juices",
    icon: GlassWater,
    description: "Fresh pressed juice selection",
    slug: "cold-pressed-juices",
  },
  {
    id: 10,
    name: "Kombucha",
    icon: GlassWater,
    description: "Fermented probiotic tea",
    slug: "kombucha",
  },
  {
    id: 11,
    name: "Flavoured Sparkling",
    icon: GlassWater,
    description: "Refreshing sparkling beverages",
    slug: "flavoured-sparkling",
  },
  {
    id: 12,
    name: "Catering",
    icon: Sandwich,
    description: "For your events and meetings",
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
                "bg-stories-light-gray dark:bg-stories-dark/60 rounded-xl p-3 text-center hover-lift hover:bg-white dark:hover:bg-stories-dark/80 border border-transparent hover:border-stories-green/20 dark:hover:border-stories-green/20 transition-all duration-500",
                isVisible && "opacity-0 animate-fade-up",
                isVisible && `delay-${Math.min(index * 100, 500)}`
              )}
            >
              <div className="bg-stories-green/10 dark:bg-stories-green/20 h-10 w-10 rounded-full flex items-center justify-center mx-auto mb-2">
                <category.icon className="h-5 w-5 text-stories-green" />
              </div>
              <h3 className="text-sm font-bold mb-1 font-playfair">{category.name}</h3>
              <p className="text-xs text-stories-dark/70 dark:text-white/70">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
