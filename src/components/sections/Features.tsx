import { Link } from "react-router-dom";

export const Features = () => {
  return (
    <section className="bg-gradient-soft animate-gradient w-full px-16 py-28 overflow-hidden max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex w-[768px] max-w-full flex-col items-stretch text-center">
        <div className="self-center text-base font-semibold whitespace-nowrap">
          Welcome
        </div>
        <div className="w-full mt-4 max-md:max-w-full">
          <h2 className="text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
            Effortless Healthcare Management at Your Fingertips
          </h2>
          <p className="text-lg font-normal leading-[27px] mt-6 max-md:max-w-full">
            Our platform simplifies the process of managing your healthcare
            needs. From booking appointments to accessing medical records,
            everything is just a click away.
          </p>
        </div>
      </div>

      <div className="self-stretch w-full text-center mt-20 max-md:max-w-full max-md:mt-10">
        <div className="flex min-h-[276px] w-full gap-[40px_48px] flex-wrap max-md:max-w-full">
          {[
            {
              icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/766acbcbce9a93a4dfbdc668699203ebbc3c253fe3b3bf3ffdd57997607b4f5f",
              title: "How to Book Your Appointment",
              description:
                "Select your preferred doctor and choose a suitable time.",
            },
            {
              icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa6119d5f81204fe6d3516d96540d57df07aacd17aae3a163ee6969b8454b114",
              title: "Registering as a New Patient",
              description: "Complete the online form with your details.",
            },
            {
              icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f9f666004ce497ec7d158ff7000b2ab665a4db3c262ef12313da399d19826b6",
              title: "Accessing the Patient Portal",
              description: "Log in to view your medical history and reports.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%]"
            >
              <img
                loading="lazy"
                src={feature.icon}
                className="aspect-[1] object-contain w-12 self-center"
                alt={feature.title}
              />
              <div className="w-full mt-6">
                <h3 className="text-[32px] font-bold leading-[42px]">
                  {feature.title}
                </h3>
                <p className="text-base font-normal mt-6">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-6 text-base font-normal mt-20 max-md:mt-10">
        <Link
          to="/book"
          className="self-stretch border gap-2 overflow-hidden whitespace-nowrap my-auto px-6 py-3 border-black border-solid hover:bg-gray-100 transition-colors max-md:px-5"
        >
          Book
        </Link>
        <Link
          to="/signup"
          className="self-stretch flex items-center gap-2 overflow-hidden justify-center my-auto hover:text-gray-600 transition-colors"
        >
          <span className="self-stretch my-auto">Sign Up</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cc59fc65142f42773e3131d8a5a5a8d452f8191d61b72aca044880ddbb310ec"
            className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            alt="Sign Up Arrow"
          />
        </Link>
      </div>
    </section>
  );
};
