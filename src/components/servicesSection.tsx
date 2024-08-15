import React from 'react';
import Image from 'next/image';

interface Service {
  imageSrc: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    imageSrc: "/images/placeholder.png",
    title: "Profile Evaluation",
    description: "Track your expenses effortlessly with our intuitive budget tracking tools. Do cillum culpa labore laboris incididunt velit ipsum."
  },
  {
    imageSrc: "/images/placeholder.png",
    title: "College Shortlisting",
    description: "Customizing your essay to align with the admission committee's mindset for each college. Do cillum culpa labore laboris incididunt velit ipsum."
  },
  {
    imageSrc: "/images/placeholder.png",
    title: "MS/PhD interviews",
    description: "Track your expenses effortlessly with our intuitive budget tracking tools. Do cillum culpa labore laboris incididunt velit ipsum."
  },
  {
    imageSrc: "/images/placeholder.png",
    title: "Visa Interviews",
    description: "Track your expenses effortlessly with our intuitive budget tracking tools. Do cillum culpa labore laboris incididunt velit ipsum."
  },
  {
    imageSrc: "/images/placeholder.png",
    title: "End-to-End Guidance",
    description: "For pathway into Industry and Academia. Do cillum culpa labore laboris incididunt velit ipsum."
  },
  {
    imageSrc: "/images/placeholder.png",
    title: "Tailored SOP/Essay",
    description: "In this service, we camouflage your weak areas and accentuate your strengths, customizing your essay to align with the admission committee's mindset for each college."
  }
];

const ServiceCard: React.FC<Service> = ({ imageSrc, title, description }) => {
  return (
    <article className="flex flex-col items-center justify-between px-20 pt-20 pb-4 min-h-[30rem] w-full shadow-lg text-center bg-white rounded-[50px] max-md:px-5 max-md:mt-8">
      <div className="flex flex-col items-center flex-grow">
        <Image loading="lazy" width={100} height={100} src={imageSrc} alt={title} className="mt-4 aspect-square w-[72px]" />
        <h3 className="mt-2 text-2xl tracking-tight text-primary max-md:text-xl max-md:leading-[53px]">{title}</h3>
        <p className="mt-2 mb-4 text-md text-foreground">{description}</p>
      </div>
    </article>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center p-8 pb-20 bg-secondary">
      <h2 className="text-base font-bold tracking-normal leading-5 text-primary uppercase mt-4 max-md:mt-10">
        Services
      </h2>
      <h3 className="mt-5 text-5xl tracking-tighter text-primary leading-tight max-md:text-3xl">
        Services Offered
      </h3>
      <p className="mt-5 text-xl tracking-normal leading-7 text-foreground max-md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed ex ac enim gravida varius in ut dui. Cras bibendum libero quam, eu iaculis mauris eleifend a.
      </p>
      <div className="flex justify-center items-center self-stretch px-10 mt-10 w-full max-md:px-5">
        <div className="w-full max-w-[1200px]">
          {/* Update the grid to handle 2 cards on medium screens and 3 on large screens */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-4 self-start mt-10 ml-16 text-sm font-bold tracking-normal leading-4 text-center text-primary uppercase max-md:ml-2.5">
        <Image
          width={100}
          height={100}
          loading="lazy"
          src="/images/placeholder.png"
          alt="Connect"
          className="shrink-0 aspect-square w-[62px]"
        />
        <button className="my-auto">Connect Now</button>
      </div>
    </section>
  );
};

export default ServicesSection;
