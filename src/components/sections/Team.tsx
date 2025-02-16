
import { Link } from "react-router-dom";

const TeamMember = ({ image, name, role, description, socialLinks }) => (
  <div className="flex min-w-60 flex-col items-center flex-1 shrink basis-[0%] p-6 rounded-2xl hover-lift bg-white shadow-sm hover:shadow-lg transition-all duration-300">
    <img
      loading="lazy"
      src={image}
      className="aspect-[1] object-cover w-24 h-24 rounded-full border-4 border-purple-100"
      alt={name}
    />
    <div className="self-stretch w-full text-black text-center mt-6">
      <div className="w-full">
        <div className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          {name}
        </div>
        <div className="text-lg font-normal">{role}</div>
      </div>
      <div className="text-base font-normal leading-6 mt-4">{description}</div>
    </div>
    <div className="flex gap-3.5 mt-6">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-110"
        >
          <img
            loading="lazy"
            src={link.icon}
            className="aspect-[1] object-contain w-6 shrink-0 opacity-80 hover:opacity-100 transition-opacity"
            alt={link.platform}
          />
        </a>
      ))}
    </div>
  </div>
);

export const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Emily Carter",
      title: "Chief Medical Officer",
      description:
        "Dr. Carter is a seasoned healthcare executive with over 20 years of experience in clinical practice and hospital administration.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=400",
      socialLinks: [
        {
          platform: "LinkedIn",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/881a0b3bfd9f71e10093da8316b323be7980157eb82b76306c30498a5e5935c5",
          url: "#",
        },
        {
          platform: "Twitter",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cadd24ee858eeeab1464fe141a076131415d444e83f3cee0a761a3d1983801a",
          url: "#",
        },
      ],
    },
    {
      name: "Dr. Michael Rodriguez",
      title: "Head of Cardiology",
      description:
        "Dr. Rodriguez is a board-certified cardiologist with expertise in interventional cardiology and cardiac imaging.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400",
      socialLinks: [
        {
          platform: "LinkedIn",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/881a0b3bfd9f71e10093da8316b323be7980157eb82b76306c30498a5e5935c5",
          url: "#",
        },
        {
          platform: "Twitter",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cadd24ee858eeeab1464fe141a076131415d444e83f3cee0a761a3d1983801a",
          url: "#",
        },
      ],
    },
    {
      name: "Sarah Johnson",
      title: "Director of Nursing",
      description:
        "Sarah Johnson is a registered nurse and healthcare administrator with a passion for patient care and quality improvement.",
      image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=400&h=400",
      socialLinks: [
        {
          platform: "LinkedIn",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/881a0b3bfd9f71e10093da8316b323be7980157eb82b76306c30498a5e5935c5",
          url: "#",
        },
        {
          platform: "Twitter",
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cadd24ee858eeeab1464fe141a076131415d444e83f3cee0a761a3d1983801a",
          url: "#",
        },
      ],
    },
  ];

  return (
    <section className="bg-mesh w-full px-16 py-28 overflow-hidden max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex w-[768px] max-w-full flex-col items-center mx-auto">
        <div className="w-full text-center">
          <h2 className="text-5xl font-bold leading-[1.2] max-md:max-w-full max-md:text-[40px]">
            Our Team
          </h2>
          <p className="text-lg font-normal mt-6 max-md:max-w-full">
            Meet our dedicated team of healthcare professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-20 max-md:mt-10">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index}
              image={member.image}
              name={member.name}
              role={member.title}
              description={member.description}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
