import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <header className="relative bg-gradient-to-b from-background to-background/95 dark:from-background dark:to-background/95 w-full min-h-screen flex items-center">
      {/* Background gradient blob */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-[120px] rounded-full transform rotate-12 animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-indigo-500/30 to-pink-500/30 blur-[120px] rounded-full transform -rotate-12 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Your Health,{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Our Priority
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Experience modern healthcare with our cutting-edge medical facilities and 
              compassionate care. Book your appointment today and take the first step 
              towards better health.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/book">Book Appointment</Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-muted"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Join <span className="text-foreground font-semibold">2,000+</span> patients
                who trust us with their health
              </p>
            </div>
          </div>

          {/* Add the image here */}
          <div className="relative animate-fade-in bg-gradient-to-r from-purple-100/10 to-blue-100/10 dark:from-purple-900/10 dark:to-blue-900/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=2000"
              className="aspect-[1.78] object-cover w-full mt-20 max-md:max-w-full max-md:mt-10 shadow-2xl rounded-2xl"
              alt="Modern Hospital Facility"
            />
          </div>
        </div>
      </div>
    </header>
  );
};