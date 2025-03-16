
import { useEffect, useRef, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Coffee, Award, Users, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { 
    id: 1, 
    value: "25+", 
    label: "Years of Experience", 
    icon: Coffee,
    description: "With over 2 decades in the food industry" 
  },
  { 
    id: 2, 
    value: "10k+", 
    label: "Happy Customers", 
    icon: Users,
    description: "And counting every day" 
  },
  { 
    id: 3, 
    value: "20+", 
    label: "Specialty Drinks", 
    icon: Award,
    description: "Unique handcrafted recipes" 
  },
  { 
    id: 4, 
    value: "100%", 
    label: "Sustainable Sourcing", 
    icon: Heart,
    description: "Supporting local farmers" 
  }
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("story");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <>
      <Header />
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="bg-stories-cream dark:bg-stories-dark/90 py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-grain-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1 rounded-full bg-stories-green/10 text-stories-green dark:bg-stories-green/20 text-sm font-medium mb-4 animate-fade-in">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">Our Story</h1>
              <p className="text-lg text-stories-dark/70 dark:text-white/70 mb-8 opacity-0 animate-fade-up delay-200">
                From bean to cup, discover the passion and craftsmanship behind Stories Coffee.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16" ref={sectionRef}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className={cn(
                "rounded-xl overflow-hidden relative h-[400px] lg:h-[600px]",
                isVisible ? "opacity-0 animate-fade-in" : "opacity-0"
              )}>
                <img 
                  src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Stories Coffee Shop" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              </div>

              {/* Tabs Content */}
              <div className={cn(
                isVisible ? "opacity-0 animate-fade-in delay-300" : "opacity-0"
              )}>
                {/* Tabs Navigation */}
                <div className="flex border-b border-stories-green/20 mb-8">
                  <button 
                    className={cn(
                      "py-3 px-6 font-medium transition-all duration-300 border-b-2 -mb-[1px]",
                      activeTab === "story" 
                        ? "border-stories-green text-stories-green" 
                        : "border-transparent text-stories-dark/70 dark:text-white/70 hover:text-stories-green"
                    )}
                    onClick={() => setActiveTab("story")}
                  >
                    Our Story
                  </button>
                  <button 
                    className={cn(
                      "py-3 px-6 font-medium transition-all duration-300 border-b-2 -mb-[1px]",
                      activeTab === "mission" 
                        ? "border-stories-green text-stories-green" 
                        : "border-transparent text-stories-dark/70 dark:text-white/70 hover:text-stories-green"
                    )}
                    onClick={() => setActiveTab("mission")}
                  >
                    Mission & Values
                  </button>
                  <button 
                    className={cn(
                      "py-3 px-6 font-medium transition-all duration-300 border-b-2 -mb-[1px]",
                      activeTab === "team" 
                        ? "border-stories-green text-stories-green" 
                        : "border-transparent text-stories-dark/70 dark:text-white/70 hover:text-stories-green"
                    )}
                    onClick={() => setActiveTab("team")}
                  >
                    Our Team
                  </button>
                </div>

                {/* Our Story Tab */}
                {activeTab === "story" && (
                  <div className="animate-fade-in">
                    <h2 className="text-3xl font-bold mb-6 font-playfair">The Stories Behind the Cups</h2>
                    <p className="text-stories-dark/70 dark:text-white/70 mb-6">
                    Though Stories Coffee was founded just recently in 2025, our founders bring decades of experience in the coffee and food industries. We've spent years perfecting our craft, from expertly brewing coffee to creating delicious, healthy bowls and drinks. Our journey has given us an in-depth understanding of what makes great food and drink, and we’ve poured that knowledge and passion into every item we offer.

Each Açaí bowl, sandwich, smoothie, and coffee is made with the utmost care and attention to detail. Every recipe is crafted from years of experience, ensuring that every bite and sip not only tastes amazing but reflects our commitment to quality. At Stories Coffee, we may be new, but our expertise is deep, and we know how to create the perfect balance of flavors to make your visit unforgettable.
                    </p>
                    <p className="text-stories-dark/70 dark:text-white/70">
                      Today, Stories Coffee has evolved into more than just a café. It's a community hub where the art of coffee is celebrated alongside nutritious açaí bowls and wholesome food, all served in a space designed to inspire conversation and creativity.
                    </p>
                  </div>
                )}

                {/* Mission & Values Tab */}
                {activeTab === "mission" && (
                  <div className="animate-fade-in">
                    <h2 className="text-3xl font-bold mb-6 font-playfair">Our Mission & Values</h2>
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-2">Mission</h3>
                      <p className="text-stories-dark/70 dark:text-white/70">
                        To create a space where exceptional coffee and food bring people together, fostering connection and conversation. With decades of experience in the industry, we’ve carefully crafted every aspect of our menu to ensure quality and flavor. We are committed to supporting sustainable practices throughout our supply chain, so you can enjoy every bite and sip knowing that we’re dedicated to both your experience and the planet.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold mb-2">Core Values</h3>
                      <div className="flex items-start">
                        <div className="bg-stories-green/10 dark:bg-stories-green/20 h-8 w-8 rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-stories-green font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Quality Without Compromise</h4>
                          <p className="text-stories-dark/70 dark:text-white/70">
                            We source the finest beans and ingredients, never cutting corners in our pursuit of excellence.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-stories-green/10 dark:bg-stories-green/20 h-8 w-8 rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-stories-green font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Sustainability</h4>
                          <p className="text-stories-dark/70 dark:text-white/70">
                            From compostable packaging to ethical sourcing, we strive to minimize our environmental footprint.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-stories-green/10 dark:bg-stories-green/20 h-8 w-8 rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-stories-green font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Community</h4>
                          <p className="text-stories-dark/70 dark:text-white/70">
                            We believe in creating spaces where people feel welcome and connections thrive.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-stories-green/10 dark:bg-stories-green/20 h-8 w-8 rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-stories-green font-bold">4</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Innovation</h4>
                          <p className="text-stories-dark/70 dark:text-white/70">
                            We continuously explore new flavors, techniques, and ideas to enhance the coffee experience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Our Team Tab */}
                {/* 
                {activeTab === "team" && (
                  <div className="animate-fade-in">
                    <h2 className="text-3xl font-bold mb-6 font-playfair">The Faces Behind Stories</h2>
                    <p className="text-stories-dark/70 dark:text-white/70 mb-6">
                      Our team is made up of passionate individuals who love what they do. From our skilled baristas to our creative chefs, everyone brings their unique expertise and personality to Stories Coffee.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                      <div className="text-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                          <img 
                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                            alt="Emily Chen" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="font-bold text-lg">Emily Chen</h3>
                        <p className="text-stories-green text-sm mb-2">Co-Founder & Coffee Director</p>
                        <p className="text-stories-dark/70 dark:text-white/70 text-sm">
                          A certified Q-grader with a background in sustainability.
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                          <img 
                            src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                            alt="James Wilson" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="font-bold text-lg">James Wilson</h3>
                        <p className="text-stories-green text-sm mb-2">Co-Founder & Head Chef</p>
                        <p className="text-stories-dark/70 dark:text-white/70 text-sm">
                          Former restaurant chef with a passion for nutritious food.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                  */}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-stories-light-gray dark:bg-stories-dark/60">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.id}
                  className={cn(
                    "bg-white dark:bg-stories-dark rounded-xl p-6 text-center hover-lift",
                    isVisible && "opacity-0 animate-fade-up",
                    isVisible && `delay-${index * 100}`
                  )}
                >
                  <div className="bg-stories-green/10 dark:bg-stories-green/20 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-stories-green" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-stories-green">{stat.value}</h3>
                  <p className="font-medium mb-1">{stat.label}</p>
                  <p className="text-sm text-stories-dark/70 dark:text-white/70">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
