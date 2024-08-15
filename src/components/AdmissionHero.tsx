import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AdmissionHero() {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div>
      {' '}
      <div className='hero-background relative'>
        <div className='gradient-overlay absolute inset-0 z-10'></div>
        <div className='relative z-20 flex text-white'>
          <div className='flex max-w-4xl flex-col p-8 md:p-32'>
            <motion.h1
              className='my-10 mb-5 text-5xl font-black md:my-10 md:text-7xl'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : -50 }}
              transition={{ duration: 1 }}
              ref={heroRef}
            >
              The Team
            </motion.h1>
            <motion.p
              className='text-left text-lg md:text-2xl'
              initial={{ opacity: 0 }}
              animate={{ opacity: heroInView ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              ref={heroRef}
            >
              We are a group of students from UIUC dedicated to helping students
              globally secure the best opportunities. From the initial
              shortlisting phase to landing your desired job or career path, we
              offer comprehensive support. Our services include personalized
              shortlisting, application assistance, MS/PhD interview
              preparation, VISA interview, networking opportunities, and job
              search strategies. We connect you with industry professionals,
              provide tailored career path guidance, and continue offering
              support as you transition into your new role. Our mission is to
              unlock your potential and guide you toward a successful and
              fulfilling career. Let&apos;s make your aspirations a reality
              together.
            </motion.p>
            <motion.button
              className='mt-7 w-full rounded-md bg-white p-3 font-bold text-black hover:bg-gray-100 md:w-[200px]'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: heroInView ? 1 : 0,
                scale: heroInView ? 1 : 0.8,
              }}
              transition={{ duration: 0.5, delay: 1 }}
              ref={heroRef}
            >
              Contact us
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdmissionHero;
