'use client';
import React from 'react';
import { IconTargetArrow, IconUsersGroup } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AdmissionFeatures from '@/components/AdmissionFeatures';
import AdmissionHero from '@/components/AdmissionHero';
import ServicesSection from '@/components/servicesSection';
import TestimonialSection from '@/components/servicesTestimonial';
import ContactPage from './_components/Contact';
import { Crown } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Page() {
  const { ref: expertiseRef, inView: expertiseInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div>
      <AdmissionHero />
      <div className='bg-gray-200 py-16'>
        <div className='container mx-auto px-4'>
          <div className='mb-12 text-center'>
            <motion.h2
              className='text-3xl font-extrabold text-black sm:text-4xl'
              initial={{ opacity: 0 }}
              animate={{ opacity: expertiseInView ? 1 : 0 }}
              transition={{ duration: 1 }}
              ref={expertiseRef}
            >
              Our Expertise
            </motion.h2>
          </div>
          <motion.div
            className='-mx-4 flex flex-wrap'
            variants={containerVariants}
            initial='hidden'
            animate={expertiseInView ? 'visible' : 'hidden'}
            ref={expertiseRef}
          >
            <motion.div
              className='mb-8 w-full px-4 sm:w-1/2 lg:w-1/3'
              variants={itemVariants}
            >
              <div className='flex flex-col items-center justify-center'>
                <div className='shadow-3xl mb-4 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gray-100'>
                  <IconTargetArrow className='h-12 w-12' />
                </div>
                <h3 className='mb-2 text-center text-xl font-bold text-primary sm:text-2xl'>
                  5 years of expertise
                </h3>
                <p className='text-center text-sm text-gray-500 sm:text-base'>
                  Dedicated to students&apos; success since 2019
                </p>
              </div>
            </motion.div>
            <motion.div
              className='mb-8 w-full px-4 sm:w-1/2 lg:w-1/3'
              variants={itemVariants}
            >
              <div className='flex flex-col items-center justify-center'>
                <div className='shadow-3xl mb-4 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gray-100'>
                  <IconUsersGroup stroke={2} className='h-12 w-12' />
                </div>
                <h3 className='mb-2 text-center text-xl font-bold text-primary sm:text-2xl'>
                  Experts from top 5 universities
                </h3>
                <p className='text-center text-sm text-gray-500 sm:text-base'>
                  Leveraging top-tier university knowledge
                </p>
              </div>
            </motion.div>
            <motion.div
              className='mb-8 w-full px-4 lg:w-1/3'
              variants={itemVariants}
            >
              <div className='flex flex-col items-center justify-center'>
                <div className='shadow-3xl mb-4 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gray-100'>
                  <Crown className='h-12 w-12' />
                </div>
                <h3 className='mb-2 text-center text-xl font-bold text-primary sm:text-2xl'>
                  Personalization and Quality
                </h3>
                <p className='text-center text-sm text-gray-500 sm:text-base'>
                  We craft unique personalized stories to make you stand out
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <AdmissionFeatures />
      <ServicesSection />
      <div className='bg-gray-100 p-10'>
        <h1 className='p-10 text-center text-3xl font-semibold sm:text-4xl'>
          What <span className='text-primary'>Saeternites</span> say about us...
        </h1>
        <TestimonialSection />
      </div>
      <ContactPage />
    </div>
  );
}

export default Page;
