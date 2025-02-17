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
const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
const Portal = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Login attempt",
      description: "This is a demo. No actual login functionality yet.",
    });
    console.log(values);
  }
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <div className="bg-gradient-soft w-full px-16 py-28 overflow-hidden max-md:max-w-full max-md:px-5">
          <div className="max-w-md mx-auto">
            <h1 className="text-4xl font-bold mb-6">
              Patient
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Portal
              </span>
            </h1>
            <p className="text-lg mb-12">
              Access your medical records, appointments, and more through our secure
              patient portal.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Enter your password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600"
                  >
                    Login
                  </Button>
                  <div className="text-center space-y-2 pt-4">
                    <a
                      href="#"
                      className="block text-sm text-blue-600 hover:text-blue-800"
                    >
                      Forgot Password?
                    </a>
                    <div className="text-sm text-gray-600">
                      Don't have an account?{" "}
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Register here
                      </a>
                    </div>
                  </div>
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
export default Portal;