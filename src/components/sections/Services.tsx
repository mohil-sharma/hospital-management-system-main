import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <section className="bg-mesh w-full px-16 py-28 overflow-hidden max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex w-full gap-[40px_80px] flex-wrap max-md:max-w-full animate-fade-in-up">
        <div className="flex min-w-60 flex-col overflow-hidden items-stretch flex-1 shrink basis-[0%] max-md:max-w-full">
          <div className="text-base font-semibold whitespace-nowrap text-purple-600">Care</div>
          <div className="text-5xl font-bold leading-[58px] mt-4 max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Comprehensive Healthcare
            </span>{" "}
            Services Tailored for You
          </div>
        </div>
        <div className="text-lg font-normal leading-[27px] flex-1 shrink basis-[0%] max-md:max-w-full">
          Our hospital offers a range of essential services designed to meet
          your healthcare needs. From patient registration to appointment
          scheduling and online consultations, we prioritize your convenience
          and well-being. Experience seamless access to quality care with our
          user-friendly platform.
        </div>
      </div>

      <div className="w-full mt-20 max-md:max-w-full max-md:mt-10">
        <div className="flex w-full gap-[40px_48px] flex-wrap max-md:max-w-full animate-stagger">
          {[
            {
              icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa6119d5f81204fe6d3516d96540d57df07aacd17aae3a163ee6969b8454b114",
              title: "Streamlined Patient Registration",
              description: "Easily register online to save time and hassle.",
            },
            {
              icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c16eeddaa327f8f785b15857d260069961917855b1ffb2fdd34a34e28e16386c",
              title: "Effortless Appointment Scheduling",
              description: "Book your appointments with just a few clicks.",
            },
            {
              icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/766acbcbce9a93a4dfbdc668699203ebbc3c253fe3b3bf3ffdd57997607b4f5f",
              title: "Online Consultations",
              description: "Consult with our doctors from the comfort of home.",
            },
          ].map((service, index) => (
            <div key={index} className="min-w-60 flex-1 shrink basis-[0%] p-8 rounded-2xl hover-lift bg-white shadow-sm hover:shadow-lg transition-all duration-300">
              <img
                loading="lazy"
                src={service.icon}
                className="aspect-[1] object-contain w-12"
                alt={service.title}
              />
              <h3 className="text-[32px] font-bold leading-[42px] mt-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                {service.title}
              </h3>
              <p className="text-base font-normal mt-6">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-6 text-base font-normal mt-20 max-md:mt-10 animate-fade-in-up">
        <Link
          to="/services"
          className="self-stretch border gap-2 overflow-hidden my-auto px-6 py-3 border-black border-solid hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 max-md:px-5"
        >
          Learn More
        </Link>
        <Link
          to="/signup"
          className="self-stretch flex items-center gap-2 overflow-hidden justify-center my-auto hover:text-purple-600 transition-colors"
        >
          <span className="self-stretch my-auto">Sign Up</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cc59fc65142f42773e3131d8a5a5a8d452f8191d61b72aca044880ddbb310ec"
            className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto transform transition-transform group-hover:translate-x-1"
            alt="Sign Up Arrow"
          />
        </Link>
      </div>
    </section>
  );
};
