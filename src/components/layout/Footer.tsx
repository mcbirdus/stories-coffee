
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stories-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo and about */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src="https://res.cloudinary.com/dkuvvyaly/image/upload/v1742093718/STORIES_COFFEE_co_ya1q35.png"
                alt="Stories Coffee"
                className="h-16"
              />
            </Link>
            <p className="text-gray-400 mb-4">
              Crafting creative coffee and amazing acai bowls in the heart of Sydney.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-stories-green transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-stories-green transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-stories-green transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-stories-green transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Quick Links - moved more toward center with padding-left */}
          <div className="pl-4 md:pl-20">
            <h3 className="text-lg font-bold mb-4 font-playfair">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-stories-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-stories-green transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-stories-green transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-400 hover:text-stories-green transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-stories-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-stories-green transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-playfair">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-stories-green mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  World Square, Pitt Street, Sydney, NSW 2000
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-stories-green mr-2 flex-shrink-0" />
                <a
                  href="tel:(02) 8959 9728"
                  className="text-gray-400 hover:text-stories-green transition-colors"
                >
                  (02) 8959 9728
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-stories-green mr-2 flex-shrink-0" />
                <a
                  href="mailto:info@storiescoffee.com"
                  className="text-gray-400 hover:text-stories-green transition-colors"
                >
                  info@storiescoffee.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} Stories Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
