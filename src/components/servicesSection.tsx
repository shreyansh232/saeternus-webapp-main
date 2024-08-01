import React from 'react';
import ServiceCard from '@/components/servicesCard';
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
    description: "Track your expenses effortlessly with our intuitive budget tracking tools"
  },
  {
    imageSrc: "/images/placeholder.png",
    title: "College Shortlisting",
    description: "Tailored SOP/Essay\nIn this service, we camouflage your weak areas and accentuate your strengths, specifically customizing your essay to align with the admission committee's mindset for each college."
  },
  {
    imageSrc: "/images/placeholder.png",
    title: "MS/PhD interviews",
    description: "Track your expenses effortlessly with our intuitive budget tracking tools"
  },
  {
    imageSrc: "/images/placeholder.png",
    title: "Visa Interviews",
    description: "Track your expenses effortlessly with our intuitive budget tracking tools"
  },
  {
    imageSrc: "/images/placeholder.png",
    title: "End-to-End Guidance",
    description: " for pathway into Industry and Academia"
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center p-12 pb-20 mx-10 mt-10 bg-secondary bg-opacity-20 rounded-[50px]">
      <h2 className="text-sm font-bold tracking-normal leading-4 text-primary uppercase mt-4 max-md:mt-10 max-md:max-w-full">
        Services
      </h2>
      <h3 className="mt-5 text-7xl tracking-tighter text-primary leading-[91.2px] max-md:max-w-full max-md:text-4xl">
        Services Offered
      </h3>
      <p className="mt-5 text-2xl tracking-normal leading-9 text-foreground max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed ex ac enim gravida varius in ut dui. Cras bibendum libero quam, eu iaculis mauris eleifend a. Aenea
      </p>
      <div className="flex justify-center items-center self-stretch px-16 mt-10 w-full max-md:px-5 max-md:max-w-full">
        <div className="w-full max-w-[1200px] max-md:max-w-full">
          <div className="flex flex-wrap gap-5">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col w-[calc(33.33%-20px)] max-md:w-full">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-4 self-start mt-10 ml-20 text-sm font-bold tracking-normal leading-4 text-center text-white uppercase max-md:ml-2.5">
        <Image width={100} height={100} loading="lazy" src="/images/placeholder.png" alt="" className="shrink-0 aspect-square fill-pink-500 w-[62px]" />
        <button className="my-auto">Connect Now</button>
      </div>
    </section>
  );
};

export default ServicesSection;