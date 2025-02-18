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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const Portal = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      // Mock authentication for now
      console.log("Login attempt with:", values);
      
      toast({
        title: "Demo Mode",
        description: "Authentication will be implemented later.",
      });
      
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred",
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSignUp() {
    const values = form.getValues();
    try {
      setIsLoading(true);
      // Mock signup for now
      console.log("Signup attempt with:", values);
      
      toast({
        title: "Demo Mode",
        description: "Registration will be implemented later.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred",
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function handlePasswordReset() {
    const email = form.getValues("email");
    if (!email) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter your email address",
      });
      return;
    }

    try {
      setIsLoading(true);
      // Mock password reset for now
      console.log("Password reset attempt for:", email);
      
      toast({
        title: "Demo Mode",
        description: "Password reset will be implemented later.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred",
      });
    } finally {
      setIsLoading(false);
    }
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
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </Button>

                  <div className="text-center space-y-2 pt-4">
                    <button
                      type="button"
                      onClick={handlePasswordReset}
                      className="block w-full text-sm text-blue-600 hover:text-blue-800"
                      disabled={isLoading}
                    >
                      Forgot Password?
                    </button>
                    <div className="text-sm text-gray-600">
                      Don't have an account?{" "}
                      <button
                        type="button"
                        onClick={handleSignUp}
                        className="text-blue-600 hover:text-blue-800"
                        disabled={isLoading}
                      >
                        Register here
                      </button>
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