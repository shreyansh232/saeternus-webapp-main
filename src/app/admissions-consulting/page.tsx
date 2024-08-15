'use client';
import React from 'react';
import { IconStar, IconTargetArrow, IconUsersGroup } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AdmissionFeatures from '@/components/AdmissionFeatures';
import AdmissionHero from '@/components/AdmissionHero';
import ContactUsSection from '@/components/servicesContactNow';
import ServicesSection from '@/components/servicesSection';
import TestimonialSection from '@/components/servicesTestimonial';

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
              className='text-4xl font-extrabold text-black'
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
                <h3 className='mb-2 text-center text-2xl font-bold text-primary'>
                  5 years of expertise
                </h3>
                <p className='text-center text-gray-500'>
                  Dedicated to student success since 2019
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
                <h3 className='mb-2 text-center text-2xl font-bold text-primary'>
                  Powered by UIUC experts
                </h3>
                <p className='text-center text-gray-500'>
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
                  <IconStar stroke={2} className='h-12 w-12' />
                </div>
                <h3 className='mb-2 text-center text-2xl font-bold text-primary'>
                  Top Quality
                </h3>
                <p className='text-center text-gray-500'>
                  We are the top quality team in the industry
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <AdmissionFeatures />
      <ServicesSection />
      <TestimonialSection />
      <ContactUsSection />
    </div>
  );
}

export default Page;
