
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Coffee, Cherry, Leaf, GlassWater, Sandwich, BookOpen, CakeSlice } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Category {
  id: number;
  name: string;
  icon: React.ElementType;
  slug: string;
}

interface MenuItem {
  id: number;
  name: string;
  price: string;
  description: string;
  category: string;
  isNew?: boolean;
  isPopular?: boolean;
  image?: string;
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
    name: "Coffee",
    icon: Coffee,
    slug: "coffee",
  },
  {
    id: 3,
    name: "Teas",
    icon: Leaf,
    slug: "teas",
  },
  {
    id: 4,
    name: "Smoothies",
    icon: GlassWater,
    slug: "smoothies",
  },
  {
    id: 5,
    name: "Sandwiches",
    icon: Sandwich,
    slug: "sandwiches",
  },
  {
    id: 6,
    name: "Main Menu",
    icon: BookOpen,
    slug: "main-menu",
  },
  {
    id: 7,
    name: "Iced Drinks",
    icon: GlassWater,
    slug: "iced-drinks",
  },
  {
    id: 8,
    name: "Pastries",
    icon: CakeSlice,
    slug: "pastries",
  }
];

const menuItems: MenuItem[] = [
  // Açaí Items
  {
    id: 1,
    name: "Classic Açaí Bowl",
    price: "$14.50",
    description: "Organic açaí blended with banana, topped with granola, banana, strawberries and honey",
    category: "acai",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Tropical Açaí Bowl",
    price: "$15.50",
    description: "Organic açaí blended with mango and pineapple, topped with coconut flakes, fresh fruits and chia seeds",
    category: "acai",
    image: "https://images.unsplash.com/photo-1608032364895-84c5a9a04585?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Protein Açaí Bowl",
    price: "$16.50",
    description: "Organic açaí blended with banana and protein powder, topped with almond butter, cacao nibs, and hemp seeds",
    category: "acai",
    isNew: true,
    image: "https://images.unsplash.com/photo-1598532213105-82606fde0feb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  
  // Coffee Items
  {
    id: 4,
    name: "Espresso",
    price: "$4.00",
    description: "Single shot of our signature house blend espresso",
    category: "coffee",
    image: "https://images.unsplash.com/photo-1585075368945-25f859d8e4ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Flat White",
    price: "$5.00",
    description: "Double shot of espresso with velvety steamed milk",
    category: "coffee",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1555778586-061e5dee1f7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Cold Brew",
    price: "$5.50",
    description: "Slow steeped for 24 hours, smooth and naturally sweet",
    category: "coffee",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Stories Signature Latte",
    price: "$6.00",
    description: "Double shot espresso with house-made vanilla syrup and cinnamon",
    category: "coffee",
    isNew: true,
    image: "https://images.unsplash.com/photo-1572286258217-140a383d75c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  
  // Teas
  {
    id: 8,
    name: "Matcha Latte",
    price: "$5.50",
    description: "Premium Japanese matcha whisked with steamed milk",
    category: "teas",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    name: "Earl Grey",
    price: "$4.50",
    description: "Black tea flavored with bergamot oil",
    category: "teas",
    image: "https://images.unsplash.com/photo-1565067958898-7218283fa18c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    name: "Chai Tea Latte",
    price: "$5.50",
    description: "Black tea infused with spices, steamed with milk",
    category: "teas",
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  
  // Smoothies
  {
    id: 11,
    name: "Berry Bliss",
    price: "$8.50",
    description: "Mixed berries, banana, yogurt, and honey",
    category: "smoothies",
    image: "https://images.unsplash.com/photo-1553530666-5f4afd542f38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    name: "Green Machine",
    price: "$9.00",
    description: "Spinach, kale, banana, pineapple, and coconut water",
    category: "smoothies",
    isNew: true,
    image: "https://images.unsplash.com/photo-1622597081555-83b655147591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 13,
    name: "Mango Tango",
    price: "$8.50",
    description: "Mango, pineapple, banana, and orange juice",
    category: "smoothies",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  
  // Sandwiches
  {
    id: 14,
    name: "Avocado & Halloumi",
    price: "$12.00",
    description: "Smashed avocado, grilled halloumi, roasted tomatoes, and spinach on sourdough",
    category: "sandwiches",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1621800043295-a73fe2f57a11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 15,
    name: "Chicken Pesto",
    price: "$13.00",
    description: "Grilled free-range chicken, basil pesto, roasted peppers, and mozzarella on ciabatta",
    category: "sandwiches",
    image: "https://images.unsplash.com/photo-1554433607-66b5efe9d304?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  
  // Main Menu Items
  {
    id: 16,
    name: "Smashed Avocado Toast",
    price: "$14.00",
    description: "Smashed avocado on sourdough with Persian feta, cherry tomatoes, and dukkah",
    category: "main-menu",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1603046891744-56236a36fe5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 17,
    name: "Eggs Benedict",
    price: "$18.00",
    description: "Poached eggs with hollandaise sauce and spinach on sourdough",
    category: "main-menu",
    image: "https://images.unsplash.com/photo-1608039790095-d8bea47485cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 18,
    name: "Buddha Bowl",
    price: "$16.00",
    description: "Quinoa, roasted vegetables, avocado, chickpeas, and tahini dressing",
    category: "main-menu",
    isNew: true,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  
  // Iced Drinks
  {
    id: 19,
    name: "Iced Coffee",
    price: "$5.50",
    description: "Double shot of espresso over ice with milk and optional syrup",
    category: "iced-drinks",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1499961024600-ad094db305cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 20,
    name: "Iced Matcha",
    price: "$6.00",
    description: "Premium Japanese matcha whisked with cold milk over ice",
    category: "iced-drinks",
    image: "https://images.unsplash.com/photo-1567190538221-922ae677c3c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  
  // Pastries
  {
    id: 21,
    name: "Almond Croissant",
    price: "$5.50",
    description: "Flaky croissant filled with almond frangipane",
    category: "pastries",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 22,
    name: "Banana Bread",
    price: "$6.00",
    description: "House-made with walnuts and honey, served with butter",
    category: "pastries",
    image: "https://images.unsplash.com/photo-1605286978633-2dec93ff88a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 23,
    name: "Cinnamon Scroll",
    price: "$5.00",
    description: "Fresh baked swirl of cinnamon sugar, topped with cream cheese frosting",
    category: "pastries",
    isNew: true,
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
];

const Menu = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Check if a category hash is in the URL
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && categories.some(c => c.slug === hash)) {
      setSelectedCategory(hash);
      
      // Scroll to menu items after a short delay
      setTimeout(() => {
        if (menuRef.current) {
          menuRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, [location]);

  // Filter menu items when category changes
  useEffect(() => {
    if (selectedCategory) {
      setFilteredItems(menuItems.filter(item => item.category === selectedCategory));
    } else {
      setFilteredItems([]);
    }
  }, [selectedCategory]);

  // Animation on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 opacity-0 animate-fade-in">
            <span className="inline-block px-4 py-1 rounded-full bg-stories-green/10 text-stories-green dark:bg-stories-green/20 text-sm font-medium mb-4">
              Our Menu
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Culinary Delights</h1>
            <p className="text-stories-dark/70 dark:text-white/70">
              Discover our exceptional selection of handcrafted coffee, açaí bowls, and delicious food items made with love and the finest ingredients.
            </p>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 opacity-0 animate-fade-in delay-200">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.slug)}
                className={cn(
                  "bg-stories-light-gray dark:bg-stories-dark/60 rounded-xl p-6 text-center hover-lift hover:bg-white dark:hover:bg-stories-dark/80 border-2 transition-all duration-300",
                  selectedCategory === category.slug 
                    ? "border-stories-green" 
                    : "border-transparent hover:border-stories-green/20 dark:hover:border-stories-green/20",
                  isVisible && `delay-${Math.min(index * 100, 500)}`
                )}
              >
                <div className="bg-stories-green/10 dark:bg-stories-green/20 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="h-8 w-8 text-stories-green" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-playfair">{category.name}</h3>
              </button>
            ))}
          </div>

          {/* Menu Items */}
          {selectedCategory && (
            <div ref={menuRef} className="opacity-0 animate-fade-in delay-300">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold font-playfair">
                  {categories.find(c => c.slug === selectedCategory)?.name} Menu
                </h2>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedCategory(null)}
                  className="border-stories-green text-stories-green hover:bg-stories-green/10"
                >
                  View All Categories
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {filteredItems.map((item, index) => (
                  <div 
                    key={item.id}
                    className={cn(
                      "bg-white dark:bg-stories-dark/60 rounded-xl overflow-hidden shadow-md hover-lift group transition-all duration-300",
                      isVisible && `opacity-0 animate-fade-up delay-${Math.min(index * 100, 700)}`
                    )}
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      {item.isNew && (
                        <span className="absolute top-2 right-2 bg-stories-green text-white text-xs px-2 py-1 rounded-md">
                          New
                        </span>
                      )}
                      {item.isPopular && !item.isNew && (
                        <span className="absolute top-2 right-2 bg-stories-gold text-white text-xs px-2 py-1 rounded-md">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <span className="font-medium text-stories-green">{item.price}</span>
                      </div>
                      <p className="text-stories-dark/70 dark:text-white/70 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No Category Selected */}
          {!selectedCategory && (
            <div className="text-center max-w-2xl mx-auto mt-12 opacity-0 animate-fade-in delay-300">
              <h2 className="text-2xl font-bold mb-4">Select a Category Above</h2>
              <p className="text-stories-dark/70 dark:text-white/70 mb-6">
                Explore our diverse menu by selecting one of our categories to view all available options.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Menu;
