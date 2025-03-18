
import { useState, useEffect, useRef } from "react";
import MenuItemCard from "./MenuItemCard";
import AddOnsCard from "./AddOnsCard";

// Define the data structure
interface MenuItem {
  name: string;
  description?: string;
  price: string;
  image?: string;
}

interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
  addOns?: { name: string; price: string }[];
}

// Menu data
const menuData: MenuCategory[] = [
  {
    id: "acai",
    name: "Açaí",
    items: [
      { 
        name: "Classic Açaí Bowl", 
        description: "Organic açaí, banana, granola, and honey", 
        price: "$14.50",
        image: "https://images.unsplash.com/photo-1638436397919-2e4be2ebe744?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Berry Blast Açaí", 
        description: "Açaí, mixed berries, coconut, and chia seeds", 
        price: "$15.50",
        image: "https://images.unsplash.com/photo-1615283119466-2037b76a524e?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Tropical Açaí", 
        description: "Açaí, mango, pineapple, and passion fruit", 
        price: "$16.00",
        image: "https://images.unsplash.com/photo-1598532213298-304a4bd625f7?auto=format&q=75&fit=crop&w=256"
      }
    ],
    addOns: [
      { name: "Extra Granola", price: "$1.50" },
      { name: "Mixed Berries", price: "$2.00" },
      { name: "Peanut Butter", price: "$1.00" },
      { name: "Honey", price: "$0.50" }
    ]
  },
  {
    id: "main-menu",
    name: "Main Menu",
    items: [
      { 
        name: "Avocado Toast", 
        description: "Sourdough bread, smashed avocado, cherry tomatoes, and microgreens", 
        price: "$12.50",
        image: "https://images.unsplash.com/photo-1588137378633-dea1288d6dfd?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Breakfast Burrito", 
        description: "Scrambled eggs, black beans, avocado, cheese, and salsa", 
        price: "$13.00",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Granola Bowl", 
        description: "House-made granola, Greek yogurt, fresh berries, and honey", 
        price: "$10.50",
        image: "https://images.unsplash.com/photo-1623428187425-873f16e10554?auto=format&q=75&fit=crop&w=256"
      }
    ],
    addOns: [
      { name: "Extra Avocado", price: "$2.50" },
      { name: "Gluten-Free Bread", price: "$1.50" },
      { name: "Bacon", price: "$3.00" },
      { name: "Egg", price: "$1.50" }
    ]
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    items: [
      { 
        name: "Turkey & Avocado", 
        description: "Roasted turkey, avocado, lettuce, tomato, and herb aioli on multigrain", 
        price: "$13.50",
        image: "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Caprese Sandwich", 
        description: "Fresh mozzarella, tomatoes, basil, and balsamic glaze on ciabatta", 
        price: "$12.00",
        image: "https://images.unsplash.com/photo-1624376605546-6a1ce6085991?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Chicken Pesto", 
        description: "Grilled chicken, pesto, roasted red peppers, and provolone on sourdough", 
        price: "$14.00",
        image: "https://images.unsplash.com/photo-1521986329282-0436c1f1e212?auto=format&q=75&fit=crop&w=256"
      }
    ],
    addOns: [
      { name: "Extra Cheese", price: "$1.50" },
      { name: "Avocado", price: "$2.00" },
      { name: "Gluten-Free Bread", price: "$1.50" },
      { name: "Side Salad", price: "$4.00" },
      { name: "Side Chips", price: "$2.50" }
    ]
  },
  {
    id: "coffee",
    name: "Coffee",
    items: [
      { 
        name: "Espresso", 
        description: "Single shot of our signature blend", 
        price: "$3.50",
        image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Cappuccino", 
        description: "Espresso with steamed milk and velvety foam", 
        price: "$4.50",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Flat White", 
        description: "Double espresso with micro-foamed milk", 
        price: "$4.75",
        image: "https://images.unsplash.com/photo-1544066871-7dcbd52a580f?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Latte", 
        description: "Espresso with steamed milk", 
        price: "$5.00",
        image: "https://images.unsplash.com/photo-1581996323777-9659ef6288de?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Americano", 
        description: "Espresso with hot water", 
        price: "$4.00",
        image: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?auto=format&q=75&fit=crop&w=256"
      }
    ],
    addOns: [
      { name: "Extra Shot", price: "$1.00" },
      { name: "Almond Milk", price: "$0.75" },
      { name: "Oat Milk", price: "$0.75" },
      { name: "Soy Milk", price: "$0.75" },
      { name: "Vanilla Syrup", price: "$0.50" },
      { name: "Caramel Syrup", price: "$0.50" },
      { name: "Hazelnut Syrup", price: "$0.50" }
    ]
  },
  {
    id: "iced-coffee",
    name: "Iced Coffee",
    items: [
      { 
        name: "Iced Latte", 
        description: "Espresso with cold milk and ice", 
        price: "$5.50",
        image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Iced Americano", 
        description: "Espresso with cold water and ice", 
        price: "$4.50",
        image: "https://images.unsplash.com/photo-1583165874479-51a7fe3eaa66?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Cold Brew", 
        description: "Slow-steeped for 12 hours for smooth, rich flavor", 
        price: "$5.75",
        image: "https://images.unsplash.com/photo-1578314675291-a1a0a901c7d0?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Iced Mocha", 
        description: "Espresso, chocolate, cold milk, and ice", 
        price: "$6.00",
        image: "https://images.unsplash.com/photo-1560174876-9073b5da893d?auto=format&q=75&fit=crop&w=256"
      }
    ],
    addOns: [
      { name: "Extra Shot", price: "$1.00" },
      { name: "Almond Milk", price: "$0.75" },
      { name: "Oat Milk", price: "$0.75" },
      { name: "Vanilla Syrup", price: "$0.50" },
      { name: "Caramel Syrup", price: "$0.50" }
    ]
  },
  {
    id: "teas",
    name: "Teas",
    items: [
      { 
        name: "Chai Latte", 
        description: "Spiced chai with steamed milk", 
        price: "$5.00",
        image: "https://images.unsplash.com/photo-1596705786709-c95747ee09f9?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Green Tea", 
        description: "Premium Japanese sencha", 
        price: "$4.00",
        image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Earl Grey", 
        description: "Black tea with bergamot", 
        price: "$4.00",
        image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Herbal Blend", 
        description: "Caffeine-free blend of chamomile, lavender, and rose", 
        price: "$4.25",
        image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a6?auto=format&q=75&fit=crop&w=256"
      }
    ],
    addOns: [
      { name: "Honey", price: "$0.50" },
      { name: "Lemon", price: "$0.25" },
      { name: "Almond Milk", price: "$0.75" },
      { name: "Oat Milk", price: "$0.75" }
    ]
  },
  {
    id: "smoothies",
    name: "Smoothies",
    items: [
      { 
        name: "Green Machine", 
        description: "Spinach, kale, banana, pineapple, and coconut water", 
        price: "$7.50",
        image: "https://images.unsplash.com/photo-1638439430466-b9d7673c1254?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Berry Blast", 
        description: "Mixed berries, banana, Greek yogurt, and almond milk", 
        price: "$7.50",
        image: "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Tropical Paradise", 
        description: "Mango, pineapple, banana, and coconut milk", 
        price: "$7.50",
        image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Protein Power", 
        description: "Banana, peanut butter, chocolate protein, and almond milk", 
        price: "$8.00",
        image: "https://images.unsplash.com/photo-1594213114663-d94db9b17125?auto=format&q=75&fit=crop&w=256"
      }
    ],
    addOns: [
      { name: "Protein Powder", price: "$1.50" },
      { name: "Spirulina", price: "$1.00" },
      { name: "Chia Seeds", price: "$0.75" },
      { name: "Flax Seeds", price: "$0.75" },
      { name: "Peanut Butter", price: "$1.00" }
    ]
  },
  {
    id: "specialty",
    name: "Specialty",
    items: [
      { 
        name: "Golden Milk Latte", 
        description: "Turmeric, ginger, cinnamon, and steamed milk", 
        price: "$5.50",
        image: "https://images.unsplash.com/photo-1620360289812-0d4cee8e76da?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Matcha Latte", 
        description: "Ceremonial grade matcha with steamed milk", 
        price: "$5.75",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Beetroot Latte", 
        description: "Beetroot powder with steamed milk", 
        price: "$5.50",
        image: "https://images.unsplash.com/photo-1563252590-5f6f99c59a9c?auto=format&q=75&fit=crop&w=256"
      }
    ],
    addOns: [
      { name: "Almond Milk", price: "$0.75" },
      { name: "Oat Milk", price: "$0.75" },
      { name: "Honey", price: "$0.50" },
      { name: "Extra Shot", price: "$1.00" }
    ]
  },
  {
    id: "cold-pressed-juices",
    name: "Cold Pressed Juices",
    items: [
      { 
        name: "Green Detox", 
        description: "Cucumber, celery, apple, kale, lemon, and ginger", 
        price: "$8.00",
        image: "https://images.unsplash.com/photo-1622597468620-656aa78689c9?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Carrot Zinger", 
        description: "Carrot, orange, and ginger", 
        price: "$7.50",
        image: "https://images.unsplash.com/photo-1565591452825-67d6b7df1d47?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Watermelon Refresh", 
        description: "Watermelon, lime, and mint", 
        price: "$7.50",
        image: "https://images.unsplash.com/photo-1587383378486-83530fc1e846?auto=format&q=75&fit=crop&w=256"
      }
    ],
    addOns: [
      { name: "Ginger Shot", price: "$2.50" },
      { name: "Turmeric Shot", price: "$2.50" },
      { name: "Wheatgrass Shot", price: "$3.00" }
    ]
  },
  {
    id: "kombucha",
    name: "Kombucha",
    items: [
      { 
        name: "Original Kombucha", 
        description: "House-fermented original flavor", 
        price: "$6.00",
        image: "https://images.unsplash.com/photo-1595983239524-b08cbdbcca9d?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Ginger Kombucha", 
        description: "With fresh ginger for extra kick", 
        price: "$6.50",
        image: "https://images.unsplash.com/photo-1628626258272-280e4a68c60d?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Berry Kombucha", 
        description: "Infused with mixed berries", 
        price: "$6.50",
        image: "https://images.unsplash.com/photo-1553835569-25a4116413c2?auto=format&q=75&fit=crop&w=256"
      }
    ],
    addOns: [
      { name: "Chia Seeds", price: "$0.75" },
      { name: "Fresh Fruit", price: "$1.00" },
      { name: "Extra Ginger", price: "$0.50" }
    ]
  },
  {
    id: "flavored-sparkling",
    name: "Flavored Sparkling",
    items: [
      { 
        name: "Lemon Mint Sparkler", 
        description: "Sparkling water with fresh lemon and mint", 
        price: "$4.50",
        image: "https://images.unsplash.com/photo-1623885643272-134ec4341851?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Cucumber Lime Fizz", 
        description: "Sparkling water with cucumber and lime", 
        price: "$4.50",
        image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&q=75&fit=crop&w=256"
      },
      { 
        name: "Berry Splash", 
        description: "Sparkling water with mixed berry infusion", 
        price: "$4.75",
        image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&q=75&fit=crop&w=256"
      }
    ],
    addOns: [
      { name: "Fresh Fruit", price: "$1.00" },
      { name: "Extra Citrus", price: "$0.50" },
      { name: "Herb Infusion", price: "$0.75" }
    ]
  }
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const menuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    // Default to first category if none selected
    if (!activeCategory && menuData.length > 0) {
      setActiveCategory(menuData[0].id);
    }
  }, [activeCategory]);

  useEffect(() => {
    // Scroll to category when selected
    if (activeCategory && menuRefs.current[activeCategory]) {
      menuRefs.current[activeCategory]?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [activeCategory]);

  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar Categories */}
          <div className="md:w-1/4 lg:w-1/5 mb-8 md:mb-0 md:pr-6">
            <div className="bg-white dark:bg-stories-dark/60 p-4 rounded-xl shadow-sm sticky top-24">
              <h2 className="text-xl font-bold mb-4 font-playfair">Categories</h2>
              <div className="space-y-2">
                {menuData.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeCategory === category.id
                        ? "bg-stories-green text-white"
                        : "hover:bg-stories-green/10 dark:hover:bg-stories-green/20"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="md:w-3/4 lg:w-4/5">
            <div className="space-y-12">
              {menuData.map((category) => (
                <div 
                  key={category.id} 
                  id={category.id}
                  ref={(el) => (menuRefs.current[category.id] = el)}
                  className="scroll-mt-24"
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 font-playfair border-b-2 border-stories-green/30 pb-2">
                    {category.name}
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {category.items.map((item, idx) => (
                      <MenuItemCard
                        key={idx}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                      />
                    ))}
                  </div>
                  
                  {category.addOns && category.addOns.length > 0 && (
                    <AddOnsCard items={category.addOns} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
