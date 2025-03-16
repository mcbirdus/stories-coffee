
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Utensils, Clock, Mail, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  eventDate: z.string().min(1, { message: "Please provide the event date." }),
  guestCount: z.string().min(1, { message: "Please specify the number of guests." }),
  eventType: z.string().min(1, { message: "Please select an event type." }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const CateringFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      guestCount: "",
      eventType: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call with timeout
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      form.reset();
      toast.success("Catering request submitted", {
        description: "We'll get back to you within 1 business hour.",
      });
    }, 1000);
  };

  return (
    <section className="bg-stories-light-gray dark:bg-stories-dark/60 py-16 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-stories-green/10 text-stories-green dark:bg-stories-green/20 text-sm font-medium mb-4">
              Catering Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair">
              Let Us Cater Your Next Event
            </h2>
            <p className="text-stories-dark/70 dark:text-white/70 text-lg">
              From intimate gatherings to corporate events, we offer custom catering services tailored to your needs. Fill out the form and we'll get back to you within 1 business hour.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="bg-stories-green/10 dark:bg-stories-green/20 h-10 w-10 rounded-full flex items-center justify-center">
                  <Utensils className="h-5 w-5 text-stories-green" />
                </div>
                <div>
                  <h3 className="font-bold">Custom Menus</h3>
                  <p className="text-stories-dark/70 dark:text-white/70">Tailored to your preferences and dietary needs</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-stories-green/10 dark:bg-stories-green/20 h-10 w-10 rounded-full flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-stories-green" />
                </div>
                <div>
                  <h3 className="font-bold">All Occasions</h3>
                  <p className="text-stories-dark/70 dark:text-white/70">Corporate events, weddings, birthdays, and more</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-stories-green/10 dark:bg-stories-green/20 h-10 w-10 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-stories-green" />
                </div>
                <div>
                  <h3 className="font-bold">Quick Response</h3>
                  <p className="text-stories-dark/70 dark:text-white/70">We'll get back to you within 1 business hour</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Form */}
          <div className="bg-white dark:bg-stories-dark rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-6">Request Catering Information</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="eventDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="guestCount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Guests</FormLabel>
                        <FormControl>
                          <Input placeholder="Estimated guest count" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="corporate">Corporate</SelectItem>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="birthday">Birthday</SelectItem>
                          <SelectItem value="graduation">Graduation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us more about your event, special requests, dietary restrictions, etc."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  className="w-full bg-stories-green hover:bg-stories-green/90 mt-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Catering Information"}
                </Button>
                
                <p className="text-xs text-center text-stories-dark/50 dark:text-white/50">
                  We'll respond to your inquiry within 1 business hour
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CateringFormSection;
