
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blogs", path: "/blogs" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 lg:px-8",
        isScrolled
          ? "bg-white/80 dark:bg-stories-dark/90 glass py-2 shadow-md"
          : "bg-transparent py-4"
      )}
    >
      {/* App coming soon banner */}
      <div className="bg-stories-green text-white py-2 px-4 text-center text-sm font-medium">
        Our app is coming soon, stay tuned!
      </div>

      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="inline-block">
            <img
              src="https://res.cloudinary.com/dkuvvyaly/image/upload/v1742093718/STORIES_COFFEE_co_ya1q35.png"
              alt="Stories Coffee"
              className="h-14 lg:h-16 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "font-medium transition-all duration-300 hover:text-stories-green dark:hover:text-stories-green relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-stories-green hover:after:w-full after:transition-all after:duration-300",
                  location.pathname === link.path
                    ? "text-stories-green dark:text-stories-green after:w-full"
                    : "text-stories-dark/80 dark:text-white/80"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            <Link to="/menu">
              <Button
                variant="default"
                className="rounded-full bg-stories-green hover:bg-stories-green/90 text-white"
              >
                Our Menu
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-stories-dark dark:text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-stories-dark border-t border-gray-200 dark:border-gray-800 animate-fade-in">
          <nav className="container mx-auto py-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "py-3 px-4 font-medium",
                  location.pathname === link.path
                    ? "text-stories-green dark:text-stories-green"
                    : "text-stories-dark/80 dark:text-white/80"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/menu"
              className="py-3 px-4 mt-2 font-medium text-stories-green dark:text-stories-green"
            >
              Our Menu
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
