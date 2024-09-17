import React from 'react';
import { Users, FileText, DollarSign } from 'lucide-react';
import { IconFilePencil, IconPigMoney, IconPlane } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const StudyAbroadGuidance: React.FC = () => {
  // Create references and visibility states for each section
  const { ref: card1Ref, inView: card1InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: card2Ref, inView: card2InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: card3Ref, inView: card3InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: card4Ref, inView: card4InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: card5Ref, inView: card5InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: card6Ref, inView: card6InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className='bg-gray-50 py-12 sm:py-16 lg:py-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl xl:text-5xl'>
            Study Abroad <span className='text-primary'>Guidance</span> from the
            World&apos;s Best!
          </h2>
          <p className='mt-4 text-base leading-7 text-gray-600 sm:mt-8'>
            Get expert study abroad counseling and assistance with your
            application process. Our team of professionals will provide you with
            personalized support and guidance.
          </p>
        </div>

        <div className='mt-10 grid grid-cols-1 gap-y-12 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 md:grid-cols-3 md:gap-0 xl:mt-24'>
          <motion.div
            className='md:p-8 lg:p-14'
            variants={cardVariants}
            initial='hidden'
            animate={card1InView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.1 }}
            ref={card1Ref}
          >
            <Users className='mx-auto text-primary' size={50} />
            <h3 className='mt-12 text-xl font-bold text-gray-900'>
              Personalized Counselling
            </h3>
            <p className='mt-5 text-base text-gray-600'>
              Get tailored advice to fit your unique needs and goals.
            </p>
          </motion.div>

          <motion.div
            className='md:border-l md:border-gray-200 md:p-8 lg:p-14'
            variants={cardVariants}
            initial='hidden'
            animate={card2InView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.2 }}
            ref={card2Ref}
          >
            <FileText className='mx-auto text-primary' size={50} />
            <h3 className='mt-12 text-xl font-bold text-gray-900'>
              Profile Building + Shortlisting
            </h3>
            <p className='mt-5 text-base text-gray-600'>
              Enhance your profile and find the best match for your academic
              journey.
            </p>
          </motion.div>

          <motion.div
            className='md:border-l md:border-gray-200 md:p-8 lg:p-14'
            variants={cardVariants}
            initial='hidden'
            animate={card3InView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.3 }}
            ref={card3Ref}
          >
            <IconFilePencil className='mx-auto text-primary' size={50} />
            <h3 className='mt-12 text-xl font-bold text-gray-900'>
              Editing Guidance
            </h3>
            <p className='mt-5 text-base text-gray-600'>
              Receive expert feedback on your application documents.
            </p>
          </motion.div>

          <motion.div
            className='md:border-t md:border-gray-200 md:p-8 lg:p-14'
            variants={cardVariants}
            initial='hidden'
            animate={card4InView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.4 }}
            ref={card4Ref}
          >
            <DollarSign className='mx-auto text-primary' size={50} />
            <h3 className='mt-12 text-xl font-bold text-gray-900'>
              Finance and Loan Advice
            </h3>
            <p className='mt-5 text-base text-gray-600'>
              Get the best financial guidance to fund your studies abroad.
            </p>
          </motion.div>

          <motion.div
            className='md:border-l md:border-t md:border-gray-200 md:p-8 lg:p-14'
            variants={cardVariants}
            initial='hidden'
            animate={card5InView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.5 }}
            ref={card5Ref}
          >
            <IconPlane className='mx-auto text-primary' size={50} />
            <h3 className='mt-12 text-xl font-bold text-gray-900'>
              Visa Mentoring
            </h3>
            <p className='mt-5 text-base text-gray-600'>
              Get expert guidance on your visa.
            </p>
          </motion.div>

          <motion.div
            className='md:border-l md:border-t md:border-gray-200 md:p-8 lg:p-14'
            variants={cardVariants}
            initial='hidden'
            animate={card6InView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.6 }}
            ref={card6Ref}
          >
            <IconPigMoney className='mx-auto text-primary' size={50} />
            <h3 className='mt-12 text-xl font-bold text-gray-900'>
              Scholarship Assistance
            </h3>
            <p className='mt-5 text-base text-gray-600'>
              Get expert guidance on your scholarship applications.
            </p>
          </motion.div>
        </div>

        <div className='flex justify-center'>
          <motion.button
            className='mt-6 rounded-md bg-primary px-16 py-3 font-bold text-white transition-colors hover:bg-gray-800'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore More
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default StudyAbroadGuidance;
