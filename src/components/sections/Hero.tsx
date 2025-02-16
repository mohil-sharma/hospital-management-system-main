
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <header className="bg-gradient-soft animate-gradient w-full px-16 py-28 overflow-hidden max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex w-full gap-[40px_80px] flex-wrap max-md:max-w-full animate-stagger">
        <div className="min-w-60 text-[56px] text-black font-bold leading-[67px] flex-1 shrink max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
          Your Health, Our Priority 
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            – Book Now
          </span>
        </div>
        <div className="flex min-w-60 flex-col items-stretch font-normal flex-1 shrink basis-[0%] max-md:max-w-full">
          <div className="text-black text-lg leading-[27px] max-md:max-w-full">
            Welcome to our hospital, where compassionate care meets advanced
            medical technology. Schedule your appointment today and take the
            first step towards better health.
          </div>
          <div className="flex gap-4 text-base whitespace-nowrap mt-8">
            <Link
              to="/book"
              className="self-stretch bg-black border gap-2 text-white px-6 py-3 border-black border-solid hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg max-md:px-5"
            >
              Book Now
            </Link>
            <Link
              to="/contact"
              className="self-stretch border gap-2 text-black px-6 py-3 border-black border-solid hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 max-md:px-5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="flex min-h-[100px] w-[100px] max-w-full mt-20 max-md:mt-10" />
      <img
        loading="lazy"
        src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=2000"
        className="aspect-[1.78] object-cover w-full mt-20 max-md:max-w-full max-md:mt-10 animate-float shadow-2xl rounded-2xl"
        alt="Modern Hospital Facility"
      />
    </header>
  );
};
