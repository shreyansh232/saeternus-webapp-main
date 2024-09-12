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
          <div className='flex max-w-7xl flex-col p-20'>
            <motion.h1
              className='my-10 mb-5 text-5xl font-black md:my-10 md:text-6xl'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : -50 }}
              transition={{ duration: 1 }}
              ref={heroRef}
            >
              Your Path to Admission Success
            </motion.h1>
            <motion.p
              className='max-w-3xl text-left text-lg md:text-2xl'
              initial={{ opacity: 0 }}
              animate={{ opacity: heroInView ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              ref={heroRef}
            >
              At Saeternus, we are a dedicated team of UIUC students with a
              mission to help students across the globe secure the best academic
              and professional opportunities. From personalized shortlisting of
              programs to comprehensive application support, MS/PhD interview
              preparation, and VISA interview guidance, we offer step-by-step
              assistance tailored to your unique needs. Our approach ensures
              that you feel confident and prepared as you navigate the
              competitive admissions process. <br /> <br />
              In addition to academic consulting, we provide networking
              opportunities with industry professionals and expert job search
              strategies to guide you toward a fulfilling career. Whether
              you&apos;re transitioning to a new role or aiming for your dream
              job, our team is here to support you every step of the way.
              Together, we&apos;ll unlock your potential and make your
              aspirations a reality.
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
              Get Started
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdmissionHero;
