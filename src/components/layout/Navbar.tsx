import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.relative')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-background h-[72px] w-full flex flex-col items-stretch justify-center px-16 max-md:max-w-full max-md:px-5 border-b">
      <div className="flex w-full items-center gap-8 justify-center flex-wrap max-md:max-w-full">
        <div className="self-stretch flex min-w-60 flex-col text-base text-foreground font-normal flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="self-stretch gap-1 my-auto hover:text-muted-foreground"
            >
              Home Page
            </Link>
            <Link
              to="/about"
              className="self-stretch gap-1 my-auto hover:text-muted-foreground"
            >
              About Us
            </Link>
            <div className="relative group">
              <button
                className="self-stretch flex flex-col w-[102px] my-auto hover:text-muted-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                More
              </button>
              <div
                className={`absolute top-full left-0 bg-background border w-[146px] overflow-hidden p-6 border-border shadow-lg ${isMenuOpen ? "block" : "hidden"} group-hover:block`}
              >
                <Link to="/contact" className="block mb-4 hover:text-muted-foreground">
                  Contact Us
                </Link>
                <Link to="/portal" className="block mb-4 hover:text-muted-foreground">
                  Patient Portal
                </Link>
                <Link to="/faq" className="block hover:text-muted-foreground">
                  FAQs
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Link to="/" className="self-stretch flex w-[84px] my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa9318598388678e3fab76ae25e2862e0b56ad73ade67345c49e4f7ef264fd6d"
            className="aspect-[2.33] object-contain w-[84px] dark:invert"
            alt="Hospital Logo"
          />
        </Link>

        <div className="self-stretch flex min-w-60 flex-col text-base font-normal whitespace-nowrap justify-center flex-1 shrink basis-[0%] my-auto max-md:max-w-full items-end">
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              className="bg-primary text-primary-foreground border gap-2 px-5 py-2 rounded-md hover:bg-primary/90 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Menu
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};