
import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1516486392848-8b67ef89f113?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "coffee",
    caption: "Barista art in every cup"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "coffee",
    caption: "Freshly roasted beans"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "food",
    caption: "Colorful acai bowls"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "coffee",
    caption: "Pour-over perfection"
  },
  {
    id: 5,
    url: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742105430/jamie-street-qpN5MLx1uwk-unsplash_csnj6u.jpg",
    category: "interior",
    caption: "Cozy atmosphere"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "coffee",
    caption: "Espresso craft"
  },
  {
    id: 7,
    url: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742102673/mariana-medvedeva-fk6IiypMWss-unsplash_bp3bas.jpg",
    category: "food",
    caption: "Breakfast delights"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "coffee",
    caption: "Coffee preparations"
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "interior",
    caption: "Warm lighting and decor"
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "food",
    caption: "Avocado toast brunch"
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "coffee",
    caption: "Morning coffee ritual"
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "interior",
    caption: "Reading corner"
  }
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading images
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === activeFilter));
    }
  }, [activeFilter]);

  const filters = [
    { id: "all", label: "All" },
    { id: "coffee", label: "Coffee" },
    { id: "food", label: "Food" },
    { id: "interior", label: "Interior" }
  ];

  return (
    <>
      <Header />
      <main className="pt-36 pb-16"> {/* Increased top padding for more margin */}
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-stories-green/10 text-stories-green dark:bg-stories-green/20 text-sm font-medium mb-4">
              Our Gallery
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Visual Stories</h1>
            <p className="text-stories-dark/70 dark:text-white/70">
              Explore our vibrant space, delicious offerings, and the warm, inviting atmosphere that makes Stories Coffee unique.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={cn(
                  "px-4 py-2 rounded-full transition-all duration-300",
                  activeFilter === filter.id
                    ? "bg-stories-green text-white"
                    : "bg-stories-light-gray dark:bg-stories-dark/60 text-stories-dark/70 dark:text-white/70 hover:bg-stories-green/10 dark:hover:bg-stories-green/20"
                )}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={cn(
                  "aspect-square overflow-hidden rounded-xl group relative transition-all duration-300 opacity-0 animate-scale-up",
                  isLoading ? "opacity-0" : `delay-${Math.min(index * 100, 1000)}`
                )}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <p className="text-white font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
