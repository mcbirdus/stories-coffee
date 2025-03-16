
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Brewing Perfect Coffee at Home",
    excerpt: "Discover the secrets to brewing café-quality coffee in your own kitchen with our expert tips and techniques.",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Brewing Guides",
    date: "May 15, 2023",
    author: "James Wilson",
    featured: true
  },
  {
    id: 2,
    title: "The Health Benefits of Açaí Bowls",
    excerpt: "Learn why açaí bowls are more than just a delicious treat - they're packed with nutrients that support your overall wellbeing.",
    image: "https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Health & Wellness",
    date: "April 28, 2023",
    author: "Sarah Johnson",
    featured: false
  },
  {
    id: 3,
    title: "Coffee Origins: Exploring Ethiopian Beans",
    excerpt: "Take a journey to the birthplace of coffee and discover what makes Ethiopian beans so special and sought-after.",
    image: "https://images.unsplash.com/photo-1486328228599-85db4443971f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Coffee Origins",
    date: "April 10, 2023",
    author: "Michael Chen",
    featured: false
  },
  {
    id: 4,
    title: "The Perfect Breakfast Pairings for Your Coffee",
    excerpt: "Elevate your morning routine with these expertly crafted food and coffee combinations that complement each other perfectly.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Food & Coffee",
    date: "March 22, 2023",
    author: "Emma Wilson",
    featured: false
  },
  {
    id: 5,
    title: "Sustainable Coffee: From Farm to Cup",
    excerpt: "Learn about our commitment to sustainability and how we ensure our coffee is ethically sourced and environmentally friendly.",
    image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sustainability",
    date: "March 8, 2023",
    author: "David Lee",
    featured: true
  },
  {
    id: 6,
    title: "The Science Behind the Perfect Espresso Shot",
    excerpt: "Delve into the chemistry and physics that create the perfect balance of flavors in an expertly pulled espresso shot.",
    image: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Coffee Science",
    date: "February 14, 2023",
    author: "Alex Rodriguez",
    featured: false
  }
];

const Blogs = () => {
  const [visiblePosts, setVisiblePosts] = useState(4);

  const loadMorePosts = () => {
    setVisiblePosts(prev => Math.min(prev + 2, blogPosts.length));
  };

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured).slice(0, visiblePosts);

  return (
    <>
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-stories-green/10 text-stories-green dark:bg-stories-green/20 text-sm font-medium mb-4">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Stories & Insights</h1>
            <p className="text-stories-dark/70 dark:text-white/70">
              Dive into our collection of articles about coffee culture, brewing techniques, recipes, and more.
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <div className="bg-white dark:bg-stories-dark rounded-xl overflow-hidden shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-3 h-64 md:h-auto relative">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-stories-green text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  </div>
                  <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center text-stories-dark/60 dark:text-white/60 text-sm mb-3">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredPost.date}
                      </span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </span>
                    </div>
                    <span className="text-stories-green text-sm font-medium mb-2">
                      {featuredPost.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                    <p className="text-stories-dark/70 dark:text-white/70 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <Link to={`/blog/${featuredPost.id}`}>
                      <Button className="bg-stories-green hover:bg-stories-green/90 text-white rounded-full px-6">
                        Read More
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {regularPosts.map((post, index) => (
              <div
                key={post.id}
                className={cn(
                  "bg-white dark:bg-stories-dark rounded-xl overflow-hidden shadow-md hover-lift transition-all duration-300 opacity-0 animate-fade-up",
                  `delay-${Math.min(index * 100, 500)}`
                )}
              >
                <div className="h-56 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-stories-dark/60 dark:text-white/60 text-sm mb-3">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </span>
                  </div>
                  <span className="text-stories-green text-sm font-medium mb-2">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                  <p className="text-stories-dark/70 dark:text-white/70 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`} className="text-stories-green font-medium flex items-center hover:underline">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visiblePosts < blogPosts.length && (
            <div className="text-center">
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 border-stories-green text-stories-green hover:bg-stories-green/10 dark:border-stories-green dark:text-stories-green dark:hover:bg-stories-green/20"
                onClick={loadMorePosts}
              >
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blogs;
