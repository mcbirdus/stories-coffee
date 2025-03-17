
import React, { useState, useEffect, useRef } from 'react';
import { Coffee, Cake, Utensils, Wine, ShoppingBag, Gift, Compass, Map, Heart, Star } from 'lucide-react';
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
    name: 'Coffee',
    icon: Coffee,
    description: 'Our premium coffee selection',
    slug: 'coffee',
  },
  {
    id: 2,
    name: 'Pastries',
    icon: Cake,
    description: 'Freshly baked pastries daily',
    slug: 'pastries',
  },
  {
    id: 3,
    name: 'Breakfast',
    icon: Utensils,
    description: 'Start your day right',
    slug: 'breakfast',
  },
  {
    id: 4,
    name: 'Lunch',
    icon: Utensils,
    description: 'Delicious lunch options',
    slug: 'lunch',
  },
  {
    id: 5,
    name: 'Beverages',
    icon: Wine,
    description: 'Refreshing drink selection',
    slug: 'beverages',
  },
  {
    id: 6,
    name: 'Retail',
    icon: ShoppingBag,
    description: 'Coffee beans and merchandise',
    slug: 'retail',
  },
  {
    id: 7,
    name: 'Gifts',
    icon: Gift,
    description: 'Perfect presents for coffee lovers',
    slug: 'gifts',
  },
  {
    id: 8,
    name: 'Locations',
    icon: Map,
    description: 'Find us across the city',
    slug: 'locations',
  },
  {
    id: 9,
    name: 'Our Story',
    icon: Heart,
    description: 'Learn about our journey',
    slug: 'our-story',
  },
  {
    id: 10,
    name: 'Events',
    icon: Star,
    description: 'Join our special events',
    slug: 'events',
  },
  {
    id: 11,
    name: 'Catering',
    icon: Utensils,
    description: 'For your special occasions',
    slug: 'catering',
  },
  {
    id: 12,
    name: 'Explore',
    icon: Compass,
    description: 'Discover more about us',
    slug: 'explore',
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
                "bg-stories-light-gray dark:bg-stories-dark/60 rounded-xl p-4 text-center hover-lift hover:bg-white dark:hover:bg-stories-dark/80 border border-transparent hover:border-stories-green/20 dark:hover:border-stories-green/20 transition-all duration-500",
                isVisible && "opacity-0 animate-fade-up",
                isVisible && `delay-${Math.min(index * 100, 500)}`
              )}
            >
              <div className="bg-stories-green/10 dark:bg-stories-green/20 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <category.icon className="h-6 w-6 text-stories-green" />
              </div>
              <h3 className="text-lg font-bold mb-1 font-playfair">{category.name}</h3>
              <p className="text-xs text-stories-dark/70 dark:text-white/70">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
