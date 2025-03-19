
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-stories-cream dark:bg-stories-dark relative overflow-hidden pt-32 pb-20 md:py-40">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grain-pattern opacity-5"></div>
      <div className="absolute -right-24 -top-24 w-96 h-96 bg-stories-green rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-stories-green/60 rounded-full opacity-10 blur-3xl"></div> {/* Changed from stories-gold to stories-green/60 */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-stories-green/10 text-stories-green dark:bg-stories-green/20 text-sm font-medium mb-6 animate-fade-in">
            Welcome to Stories Coffee
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
            Craftin
            <span className="text-stories-green"> Stories </span>
            in Every Cup
          </h1>
          
          <p className="text-lg md:text-xl text-stories-dark/70 dark:text-white/70 mb-8 opacity-0 animate-fade-up delay-200">
            Experience our artisanal coffee, acai bowls, and more in a space where every sip and bite tells a story worth sharing.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-up delay-300">
            <Link to="/menu">
              <Button className="bg-stories-green hover:bg-stories-green/90 text-white rounded-full px-8 py-6 text-lg">
                Explore Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-stories-green text-stories-green hover:bg-stories-green/10 dark:border-stories-green dark:text-stories-green dark:hover:bg-stories-green/20">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
