import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  date: z.date({
    required_error: "Please select a date",
  }),
  doctor: z.string({
    required_error: "Please select a doctor",
  }),
  time: z.string({
    required_error: "Please select a time",
  }),
  description: z.string().min(10, "Please provide more details about your visit"),
});

// Available time slots
const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
];

// Sample doctors data (will be replaced with backend data later)
const sampleDoctors = [
  { id: "1", name: "John Smith", specialty: "General Medicine" },
  { id: "2", name: "Sarah Johnson", specialty: "Pediatrics" },
  { id: "3", name: "Michael Chen", specialty: "Cardiology" },
  { id: "4", name: "Emma Williams", specialty: "Dermatology" },
];

const Book = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // For now, we'll just show a success message
    toast({
      title: "Appointment Request Received",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    
    form.reset();
    console.log("Form submitted with values:", values);
  }

  return (
    <div className="min-h-screen flex flex-col dark:bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="bg-gradient-soft w-full px-16 py-28 overflow-hidden max-md:max-w-full max-md:px-5">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-foreground dark:text-white">
              Book Your Appointment
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Today
              </span>
            </h1>
            <p className="text-lg mb-12 text-foreground/90 dark:text-gray-300">
              Take the first step towards better health by scheduling your
              appointment with our medical professionals.
            </p>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground dark:text-white">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="dark:bg-gray-800 dark:text-white dark:border-gray-700" />
                        </FormControl>
                        <FormMessage className="dark:text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground dark:text-white">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            {...field}
                            className="dark:bg-gray-800 dark:text-white dark:border-gray-700"
                          />
                        </FormControl>
                        <FormMessage className="dark:text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground dark:text-white">Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="(555) 555-5555"
                            {...field}
                            className="dark:bg-gray-800 dark:text-white dark:border-gray-700"
                          />
                        </FormControl>
                        <FormMessage className="dark:text-red-400" />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="doctor"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground dark:text-white">Select Doctor</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="dark:bg-gray-800 dark:text-white dark:border-gray-700">
                                <SelectValue placeholder="Select a doctor" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="dark:bg-gray-800">
                              {sampleDoctors.map((doctor) => (
                                <SelectItem key={doctor.id} value={doctor.id} className="dark:text-white dark:focus:bg-gray-700">
                                  Dr. {doctor.name} - {doctor.specialty}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage className="dark:text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel className="text-foreground dark:text-white">Preferred Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date < new Date() ||
                                  date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage className="dark:text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground dark:text-white">Preferred Time</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="dark:bg-gray-800 dark:text-white dark:border-gray-700">
                              <SelectValue placeholder="Select preferred time" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="dark:bg-gray-800">
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time} className="dark:text-white dark:focus:bg-gray-700">
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="dark:text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground dark:text-white">Reason for Visit</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Please describe your symptoms or reason for visit"
                            {...field}
                            className="dark:bg-gray-800 dark:text-white dark:border-gray-700"
                          />
                        </FormControl>
                        <FormMessage className="dark:text-red-400" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600"
                  >
                    Book Appointment
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Book;