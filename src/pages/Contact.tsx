import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would post to an API endpoint
      console.log("Contact form submitted to laith@nexusbyte.com.au:", formData);
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      
      toast.success("Message Sent", {
        description: "Thank you for contacting us. We'll get back to you soon!",
      });
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                Contact Us
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-fade-up">Get In Touch</h1>
              <p className="text-base sm:text-lg text-stories-dark/70 dark:text-white/70 mb-8 opacity-0 animate-fade-up delay-200">
                Have questions or feedback? We'd love to hear from you. Reach out to us using any of the methods below.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form */}
              <div className="bg-white dark:bg-stories-dark/60 rounded-xl p-6 sm:p-8 shadow-md order-2 lg:order-1 animate-fade-in delay-300">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 font-playfair">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        disabled={isSubmitting}
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        disabled={isSubmitting}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block font-medium">
                        Phone Number (optional)
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone"
                        disabled={isSubmitting}
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                        disabled={isSubmitting}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={5}
                      required
                      disabled={isSubmitting}
                      className="w-full"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-stories-green hover:bg-stories-green/90 py-4 sm:py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </span>
                    )}
                  </Button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="order-1 lg:order-2 animate-fade-in">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 font-playfair">Contact Information</h2>
                <p className="text-stories-dark/70 dark:text-white/70 mb-8">
                  We're always happy to hear from our customers. Feel free to visit us, call, or send an email. We look forward to connecting with you!
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-stories-green/10 dark:bg-stories-green/20 h-12 w-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-stories-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                      <p className="text-stories-dark/70 dark:text-white/70">
                        World Square, Pitt Street<br />
                        Sydney, NSW 2000
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-stories-green/10 dark:bg-stories-green/20 h-12 w-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-stories-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Call Us</h3>
                      <p className="text-stories-dark/70 dark:text-white/70">
                        <a href="tel:(02) 8959 9728" className="hover:text-stories-green transition-colors">
                          (02) 8959 9728
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-stories-green/10 dark:bg-stories-green/20 h-12 w-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-stories-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email Us</h3>
                      <p className="text-stories-dark/70 dark:text-white/70">
                        <a href="mailto:laith@nexusbyte.com.au" className="hover:text-stories-green transition-colors">
                          laith@nexusbyte.com.au
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-stories-green/10 dark:bg-stories-green/20 h-12 w-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="h-6 w-6 text-stories-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Opening Hours</h3>
                      <p className="text-stories-dark/70 dark:text-white/70">
                        Monday - Friday: 6:30 AM - 4:00 PM<br />
                        Saturday - Sunday: 7:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div className="rounded-xl overflow-hidden h-[300px] shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8069452924373!2d151.2052942!3d-33.8748277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3dc9433bbf%3A0xcaddf10a1cdfe08!2sWorld%20Square%2C%20Pitt%20St%2C%20Sydney%20NSW%202000!5e0!3m2!1sen!2sau!4v1637123456789!5m2!1sen!2sau"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    title="Stories Coffee Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 sm:py-16 bg-stories-light-gray dark:bg-stories-dark/60">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-playfair">Frequently Asked Questions</h2>
              <p className="text-stories-dark/70 dark:text-white/70">
                Find answers to commonly asked questions about our services, products, and more.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-stories-dark rounded-xl p-5 sm:p-6 shadow-sm hover-lift">
                <h3 className="font-bold text-lg sm:text-xl mb-2">Do you offer catering services?</h3>
                <p className="text-stories-dark/70 dark:text-white/70">
                  Yes, we offer catering for events of all sizes. Please contact us directly for more information and to discuss your specific requirements.
                </p>
              </div>
              <div className="bg-white dark:bg-stories-dark rounded-xl p-5 sm:p-6 shadow-sm hover-lift">
                <h3 className="font-bold text-lg sm:text-xl mb-2">Are your ingredients organic?</h3>
                <p className="text-stories-dark/70 dark:text-white/70">
                  We source organic ingredients whenever possible and prioritize local, sustainable suppliers for all our menu items.
                </p>
              </div>
              <div className="bg-white dark:bg-stories-dark rounded-xl p-5 sm:p-6 shadow-sm hover-lift">
                <h3 className="font-bold text-lg sm:text-xl mb-2">Do you have vegan options?</h3>
                <p className="text-stories-dark/70 dark:text-white/70">
                  Absolutely! We have a wide range of plant-based milks and vegan food options. Just ask our staff for recommendations.
                </p>
              </div>
              <div className="bg-white dark:bg-stories-dark rounded-xl p-5 sm:p-6 shadow-sm hover-lift">
                <h3 className="font-bold text-lg sm:text-xl mb-2">Is there parking available?</h3>
                <p className="text-stories-dark/70 dark:text-white/70">
                  World Square has a parking garage, and there are several public parking options nearby. We're also easily accessible by public transport.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
