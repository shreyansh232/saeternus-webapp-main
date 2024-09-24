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
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const services = [
  {
    icon: <UserRoundPen className='h-10 w-10 text-primary' />,
    title: 'Profile Evaluation',
    description:
      'Track your expenses effortlessly with our intuitive budget tracking tools. Do cillum culpa labore laboris incididunt velit ipsum.',
    delay: 0.1,
  },
  {
    icon: <NotebookText className='h-10 w-10 text-primary' />,
    title: 'College Shortlisting',
    description:
      "Customizing your essay to align with the admission committee's mindset for each college. Do cillum culpa labore laboris incididunt velit ipsum.",
    delay: 0.3,
  },
  {
    icon: <MessageSquare className='h-10 w-10' />,
    title: 'MS/PhD interviews',
    description:
      'Track your expenses effortlessly with our intuitive budget tracking tools. Do cillum culpa labore laboris incididunt velit ipsum.',
    delay: 0.5,
  },
  {
    icon: <Plane className='h-10 w-10 text-primary' />,
    title: 'Visa Interviews',
    description:
      'Track your expenses effortlessly with our intuitive budget tracking tools. Do cillum culpa labore laboris incididunt velit ipsum.',
    delay: 0.2,
  },
  {
    icon: <Globe className='h-10 w-10 text-primary' />,
    title: 'End-to-End Guidance',
    description:
      'For pathway into Industry and Academia. Do cillum culpa labore laboris incididunt velit ipsum.',
    delay: 0.4,
  },
  {
    icon: <Pencil className='h-10 w-10' />,
    title: 'Tailored SOP/Essay',
    description:
      "In this service, we camouflage your weak areas and accentuate your strengths, customizing your essay to align with the admission committee's mindset for each college.",
    delay: 0.6,
  },
];

interface ServiceProp {
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay: number;
  };
}

const ServiceCard = ({ service }: ServiceProp) => (
  <div className='mb-6 mt-10 flex items-start space-x-6'>
    <div className='flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gray-50 p-5 text-primary'>
      {service.icon}
    </div>
    <div className='flex-grow'>
      <h3 className='mb-2 text-2xl font-bold text-gray-900 md:text-3xl'>
        {service.title}
      </h3>
      <p className='text-base text-gray-700 md:text-lg'>
        {service.description}
      </p>
    </div>
  </div>
);

const ServicesSection = () => {
  const { ref: card1Ref, inView: card1InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: card2Ref, inView: card2InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const leftColumnServices = services.slice(0, 3);
  const rightColumnServices = services.slice(3);

  return (
    <div className='mx-auto my-auto flex min-h-screen max-w-7xl items-center p-4 sm:p-8'>
      <div className='w-full'>
        <h2 className='mb-5 text-center text-3xl font-extrabold leading-tight text-primary sm:text-3xl md:mb-14 md:text-4xl lg:text-5xl'>
          Services
        </h2>

        <div className='px-4 sm:px-8 md:grid md:grid-cols-2 md:gap-10 md:gap-x-8 md:px-12'>
          <div>
            {leftColumnServices.map((service, index) => (
              <motion.div
                variants={cardVariants}
                initial='hidden'
                animate={card1InView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, delay: service.delay }}
                ref={card1Ref}
                key={index}
              >
                <ServiceCard key={index} service={service} />
              </motion.div>
            ))}
          </div>

          <div>
            {rightColumnServices.map((service, index) => (
              <motion.div
                variants={cardVariants}
                initial='hidden'
                animate={card2InView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, delay: service.delay }}
                ref={card2Ref}
                key={index + 3}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
