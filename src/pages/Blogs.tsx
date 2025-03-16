
import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Crafting the Perfect Espresso",
    excerpt: "Explore the science and skill behind brewing the perfect shot of espresso, from bean selection to extraction techniques.",
    author: "Sonya Glen",
    date: "June 15, 2023",
    category: "Coffee Brewing",
    readTime: "5 min read",
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742114865/mohamed-shaffaf-RZJRWMnd0DM-unsplash_cppefr.jpg",
    featured: true
  },
  {
    id: 2,
    title: "The Health Benefits of Açaí: Superfood or Hype?",
    excerpt: "Discover the nutritional profile of açaí berries and the scientific evidence behind their purported health benefits.",
    author: "James Wilson",
    date: "May 28, 2023",
    category: "Nutrition",
    readTime: "7 min read",
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742122252/jakob-owens-e3FJ-KVZvEw-unsplash_kcqppz.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Sustainable Coffee: From Farm to Cup",
    excerpt: "An in-depth look at the coffee supply chain and how sustainable practices benefit farmers, consumers, and the planet.",
    author: "Sarah Johnson",
    date: "April 10, 2023",
    category: "Sustainability",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "A Beginner's Guide to Coffee Tasting",
    excerpt: "Learn how to develop your palate and identify flavor notes in coffee, just like professional cuppers do.",
    author: "Michael Lee",
    date: "March 22, 2023",
    category: "Coffee Tips",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "The Rise of Specialty Coffee in Sydney",
    excerpt: "Charting the evolution of Sydney's coffee scene and the cultural influences that shaped today's vibrant café culture.",
    author: "Emily Chen",
    date: "February 15, 2023",
    category: "Coffee Culture",
    readTime: "8 min read",
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742114614/sameer-waskar-mcAekN2kBw4-unsplash_od5vu8.jpg"
  },
  {
    id: 6,
    title: "5 Creative Recipes to Elevate Your Morning Coffee",
    excerpt: "Try these innovative techniques and ingredients to transform your daily coffee routine into a gourmet experience.",
    author: "James Wilson",
    date: "January 30, 2023",
    category: "Recipes",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Cold Brew vs. Iced Coffee: What's the Difference?",
    excerpt: "Understanding the distinct brewing methods, flavor profiles, and caffeine content of these popular cold coffee beverages.",
    author: "Michael Lee",
    date: "December 12, 2022",
    category: "Coffee Brewing",
    readTime: "4 min read",
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742115332/jisu-han-TVoeqhWz2mE-unsplash_fmjoyv.jpg"
  },
  {
    id: 8,
    title: "Building Community Through Coffee",
    excerpt: "How coffee shops serve as social hubs and foster connection in an increasingly digital world.",
    author: "Sarah Johnson",
    date: "November 8, 2022",
    category: "Coffee Culture",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const categories = [
  "All",
  "Coffee Brewing",
  "Nutrition",
  "Sustainability",
  "Coffee Tips",
  "Coffee Culture",
  "Recipes"
];

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  const [isLoading, setIsLoading] = useState(true);

  // Featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <>
      <Header />
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="bg-stories-cream dark:bg-stories-dark/90 py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-grain-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1 rounded-full bg-stories-green/10 text-stories-green dark:bg-stories-green/20 text-sm font-medium mb-4 animate-fade-in">
                Our Blog
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">Coffee Stories</h1>
              <p className="text-lg text-stories-dark/70 dark:text-white/70 mb-8 opacity-0 animate-fade-up delay-200">
                Insights, tips, and stories from the world of coffee and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 font-playfair">Featured Articles</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <div 
                  key={post.id}
                  className={cn(
                    "bg-white dark:bg-stories-dark/60 rounded-xl overflow-hidden shadow-md group hover-lift",
                    !isLoading && "opacity-0 animate-fade-in",
                    !isLoading && `delay-${index * 200}`
                  )}
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-stories-green/10 text-stories-green text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="mx-2 text-stories-dark/40 dark:text-white/40">•</span>
                      <span className="flex items-center text-stories-dark/60 dark:text-white/60 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-stories-dark/70 dark:text-white/70 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="h-4 w-4 text-stories-green mr-2" />
                        <span className="text-sm text-stories-dark/70 dark:text-white/70">{post.author}</span>
                      </div>
                      <span className="text-sm text-stories-dark/60 dark:text-white/60">{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-16 bg-stories-light-gray dark:bg-stories-dark/60">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0 font-playfair">All Articles</h2>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "px-3 py-1 rounded-full text-sm transition-all duration-300",
                      selectedCategory === category
                        ? "bg-stories-green text-white"
                        : "bg-white dark:bg-stories-dark text-stories-dark/70 dark:text-white/70 hover:bg-stories-green/10 dark:hover:bg-stories-green/20"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <div 
                  key={post.id}
                  className={cn(
                    "bg-white dark:bg-stories-dark rounded-xl overflow-hidden shadow-md group hover-lift",
                    !isLoading && "opacity-0 animate-fade-in",
                    !isLoading && `delay-${Math.min(index * 100, 500)}`
                  )}
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center mb-3">
                      <span className="bg-stories-green/10 text-stories-green text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="mx-2 text-stories-dark/40 dark:text-white/40">•</span>
                      <span className="flex items-center text-stories-dark/60 dark:text-white/60 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                    <p className="text-stories-dark/70 dark:text-white/70 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-stories-dark/60 dark:text-white/60">{post.date}</span>
                      <Button variant="link" className="p-0 h-auto text-stories-green flex items-center">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-stories-dark/70 dark:text-white/70">
                  No articles found in this category.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => setSelectedCategory("All")}
                  className="mt-4 border-stories-green text-stories-green hover:bg-stories-green/10"
                >
                  View All Articles
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Banner */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-stories-green rounded-xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjxwYXRoIGQ9Ik0xNiA0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHoiLz48cGF0aCBkPSJNMzYgMTRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
              
              <div className="text-center max-w-3xl mx-auto relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Stay Updated</h2>
                <p className="text-white/80 mb-8">
                  Subscribe to our newsletter for the latest articles, coffee tips, and exclusive offers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white focus-visible:border-white"
                  />
                  <Button className="bg-white text-stories-green hover:bg-white/90">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blogs;
