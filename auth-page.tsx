import { useState } from "react";
import { useLocation } from "wouter";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";

import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

interface AuthPageProps {
  mode: "login" | "register";
}

const loginSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const registerSchema = loginSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export default function AuthPage({ mode = "login" }: AuthPageProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [, navigate] = useLocation();
  const { login, register: registerUser, error: authError } = useAuth();
  const { toast } = useToast();

  // Determine which schema to use based on mode
  const schema = mode === "login" ? loginSchema : registerSchema;
  
  type FormValues = z.infer<typeof schema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      password: "",
      ...(mode === "register" ? { email: "", confirmPassword: "" } : {}),
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    try {
      let success = false;
      
      if (mode === "login") {
        success = await login(values.username, values.password);
      } else {
        // Type assertion to access email and confirmPassword
        const { username, email, password } = values as z.infer<typeof registerSchema>;
        success = await registerUser(username, email, password);
      }

      if (success) {
        toast({
          title: mode === "login" ? "Login successful" : "Registration successful",
          description: "Redirecting to dashboard...",
        });
        
        // Redirect to welcome screen for new users or dashboard for existing users
        navigate(mode === "register" ? "/welcome" : "/dashboard");
      } else {
        toast({
          variant: "destructive",
          title: "Authentication failed",
          description: authError || "Please check your credentials and try again",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Please try again later",
      });
      console.error("Auth error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left side - Form */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16"
        >
          <div className="max-w-md mx-auto w-full">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">
                {mode === "login" ? "Welcome back" : "Create an account"}
              </h1>
              <p className="text-muted-foreground">
                {mode === "login"
                  ? "Enter your credentials to access your account"
                  : "Sign up to get started with NarratixAI"}
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {mode === "register" && (
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {mode === "register" && (
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin mr-2"></div>
                      <span>{mode === "login" ? "Logging in..." : "Creating account..."}</span>
                    </div>
                  ) : mode === "login" ? (
                    "Log in"
                  ) : (
                    "Create account"
                  )}
                </Button>
              </form>
            </Form>

            <div className="mt-6 text-center">
              {mode === "login" ? (
                <p>
                  Don't have an account?{" "}
                  <Button variant="link" className="p-0" onClick={() => navigate("/register")}>
                    Sign up
                  </Button>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <Button variant="link" className="p-0" onClick={() => navigate("/login")}>
                    Log in
                  </Button>
                </p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Right side - Decorative */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:block md:w-1/2 bg-gray-800 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30"></div>
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="max-w-lg text-center">
              <h2 className="text-3xl font-bold mb-4">
                AI-Powered Ad Creation
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Create compelling, targeted ad campaigns with just a few clicks.
                Let AI handle the heavy lifting while you focus on strategy.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}