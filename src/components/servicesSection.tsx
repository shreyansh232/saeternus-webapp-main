'use client';

import React from 'react';
import {
  NotebookText,
  Plane,
  Globe,
  UserRoundPen,
  MessageSquare,
  Pencil,
} from 'lucide-react';

const services = [
  {
    icon: <UserRoundPen className='h-10 w-10 text-primary' />,
    title: 'Profile Evaluation',
    description:
      'Track your expenses effortlessly with our intuitive budget tracking tools. Do cillum culpa labore laboris incididunt velit ipsum.',
  },
  {
    icon: <NotebookText className='h-10 w-10 text-primary' />,
    title: 'College Shortlisting',
    description:
      "Customizing your essay to align with the admission committee's mindset for each college. Do cillum culpa labore laboris incididunt velit ipsum.",
  },
  {
    icon: <MessageSquare className='h-10 w-10' />,
    title: 'MS/PhD interviews',
    description:
      'Track your expenses effortlessly with our intuitive budget tracking tools. Do cillum culpa labore laboris incididunt velit ipsum.',
  },
  {
    icon: <Plane className='h-10 w-10 text-primary' />,
    title: 'Visa Interviews',
    description:
      'Track your expenses effortlessly with our intuitive budget tracking tools. Do cillum culpa labore laboris incididunt velit ipsum.',
  },
  {
    icon: <Globe className='h-10 w-10 text-primary' />,
    title: 'End-to-End Guidance',
    description:
      'For pathway into Industry and Academia. Do cillum culpa labore laboris incididunt velit ipsum.',
  },
  {
    icon: <Pencil className='h-10 w-10' />,
    title: 'Tailored SOP/Essay',
    description:
      "In this service, we camouflage your weak areas and accentuate your strengths, customizing your essay to align with the admission committee's mindset for each college.",
  },
];

interface ServiceProp {
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
}

const ServiceCard = ({ service }: ServiceProp) => (
  <div className='mb-6 mt-10 flex items-start space-x-6'>
    <div className='flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gray-50 p-5 text-primary'>
      {service.icon}
    </div>
    <div className='flex-grow'>
      <h3 className='mb-2 text-3xl font-bold text-gray-900'>{service.title}</h3>
      <p className='text-lg text-gray-700'>{service.description}</p>
    </div>
  </div>
);

const servicesSection = () => {
  const leftColumnServices = services.slice(0, 3);
  const rightColumnServices = services.slice(3);

  return (
    <div className='mx-auto my-auto flex h-screen max-w-7xl items-center p-4 md:p-8'>
      <div className='w-full'>
        <h2 className='mb-10 text-center text-3xl font-extrabold leading-tight text-primary sm:text-4xl md:mb-14 xl:text-5xl'>
          Services
        </h2>
        <div className='grid grid-cols-1 gap-x-4 px-4 md:grid-cols-2 md:gap-x-8 md:px-16'>
          <div>
            {leftColumnServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
          <div>
            {rightColumnServices.map((service, index) => (
              <ServiceCard key={index + 3} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default servicesSection;
