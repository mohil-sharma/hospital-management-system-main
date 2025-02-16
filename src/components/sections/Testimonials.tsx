const TestimonialCard = ({ rating, quote, avatar, name, title, company }) => (
  <div className="flex min-w-60 flex-col overflow-hidden flex-1 shrink basis-[0%] p-8 rounded-2xl hover-lift bg-white shadow-sm hover:shadow-lg transition-all duration-300 max-md:max-w-full">
    <div className="flex gap-1 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <img
          key={i}
          loading="lazy"
          src={
            i < rating
              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/ec6ba88fe7cd61e8b64527faf694b61ab64d4278e4ba82d01b4fa72e710a45e4"
              : "https://cdn.builder.io/api/v1/image/assets/TEMP/6d6e7595c35d509f3ae0e92e29e4306a21d082fdd3e977e52a25233b24d91944"
          }
          className="aspect-[1.05] object-contain w-5 shrink-0 transform transition-transform hover:scale-110"
          alt={`Star ${i + 1}`}
        />
      ))}
    </div>
    <div className="self-stretch text-black text-xl font-bold leading-[1.4] mt-8 max-md:max-w-full">
      "{quote}"
    </div>
    <div className="flex items-center gap-5 text-base text-black mt-8">
      <img
        loading="lazy"
        srcSet={avatar}
        className="aspect-[1] object-contain w-14 self-stretch shrink-0 my-auto rounded-full border-2 border-purple-100"
        alt={name}
      />
      <div className="self-stretch my-auto">
        <div className="font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          {name}
        </div>
        <div className="font-normal">{title}</div>
      </div>
      <div className="border self-stretch w-0 shrink-0 h-[61px] my-auto border-gray-200 border-solid" />
      <img
        loading="lazy"
        src={company}
        className="aspect-[2.5] object-contain w-[120px] self-stretch shrink-0 my-auto opacity-80"
        alt="Company Logo"
      />
    </div>
  </div>
);

export const Testimonials = () => {
  const testimonials = [
    {
      rating: 4,
      quote: "The care I received was exceptional and life-changing.",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0df769b8fb553ad7114a5389beeaf1cd3b26f19398cdc0cefc0d68fcffb12a9c",
      name: "Jane Doe",
      title: "Patient, Local Resident",
      company:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fe6d58f7cd9a453b9b96e108cb6a14e29b56a0ee0736f38047d47b82c679b942",
    },
    {
      rating: 5,
      quote: "I felt supported every step of the way during my treatment.",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0df769b8fb553ad7114a5389beeaf1cd3b26f19398cdc0cefc0d68fcffb12a9c",
      name: "John Smith",
      title: "Patient, Business Owner",
      company:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fe6d58f7cd9a453b9b96e108cb6a14e29b56a0ee0736f38047d47b82c679b942",
    },
  ];

  return (
    <section className="bg-gradient-soft animate-gradient w-full px-16 py-28 overflow-hidden max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="w-[560px] max-w-full text-black">
        <h2 className="text-5xl font-bold leading-[1.2] max-md:max-w-full max-md:text-[40px]">
          Patient Testimonials
        </h2>
        <p className="text-lg font-normal mt-6 max-md:max-w-full">
          Our patients share their positive experiences with us.
        </p>
      </div>

      <div className="w-full mt-20 max-md:max-w-full max-md:mt-10">
        <div className="flex w-full gap-[40px_64px] justify-center flex-wrap max-md:max-w-full">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
