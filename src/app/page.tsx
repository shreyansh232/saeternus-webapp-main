'use client';

import React from 'react';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Testimonials } from '@/components/Testimonials';
import Clients from '@/components/clients';
import Features from '@/components/Features';
import MetricsCard from '@/components/ui/metrics-card';
import { Faqs } from '@/components/FAQs';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className='mb-36 mt-28 flex flex-col items-center justify-center text-center sm:mt-40'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={staggerContainer}
          className='flex w-full flex-col items-center justify-center'
        >
          <motion.h1
            className='text-5xl font-bold md:text-6xl xl:w-11/12 xl:text-8xl'
            variants={fadeInUp}
          >
            Transform your career with
            <span className='text-primary'> Saeternus</span>
          </motion.h1>
          <motion.h2
            className='mt-5 max-w-prose text-zinc-700 sm:text-lg xl:text-xl'
            variants={fadeInUp}
          >
            Dive into exclusive, industry-aligned resources you never knew you
            needed. Experience life-changing education across all domains and
            join us in democratizing learning for everyone, anywhere.
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <Link
              className={buttonVariants({
                size: 'xl',
                className: 'mt-5 text-xl',
              })}
              href='/courses'
            >
              Get started
              <ArrowRight className='ml-2 h-5 w-5' />
            </Link>
          </motion.div>
        </motion.div>
      </MaxWidthWrapper>
      <motion.div initial='hidden' animate='visible' variants={fadeInUp}>
        <Features />
      </motion.div>
      <div className='flex flex-col items-center bg-white p-10 sm:flex-row sm:pt-40 xl:p-60'>
        <motion.div
          className='sm:flex-1'
          initial='hidden'
          animate='visible'
          variants={fadeInUp}
        >
          <h1 className='text-4xl font-bold'>
            Start learning with <span className='text-primary'>Saeternus</span>
          </h1>
          <p className='mt-2 text-lg'>
            Unlock unique skills for your domain, top-tier education, and
            connect with industry professionals—all at affordable prices.
          </p>
          <Link
            className={buttonVariants({
              size: 'xl',
              className: 'mt-5 text-xl',
            })}
            href='/courses'
          >
            Get started
            <ArrowRight className='ml-2 h-5 w-5' />
          </Link>
        </motion.div>
        <motion.div
          className='sm:mt-0'
          initial='hidden'
          animate='visible'
          variants={fadeInUp}
        >
          <MetricsCard />
        </motion.div>
      </div>
      <motion.div
        className='mb-20 h-1/2 w-full'
        initial='hidden'
        animate='visible'
        variants={fadeInUp}
      >
        <Clients />
      </motion.div>
      {/* Testimonials section */}
      <motion.div
        className='mx-auto mb-10 max-w-5xl items-center justify-center sm:mt-56'
        initial='hidden'
        animate='visible'
        variants={fadeInUp}
      >
        <div className='mb-12 px-6 text-center lg:px-8'>
          <div className='mx-auto max-w-5xl sm:text-center'>
            <h2 className='my-auto mb-24 text-4xl font-black text-gray-900 sm:text-5xl'>
              What <span className='text-primary'>Saeternites </span> say about
              us...
            </h2>
          </div>
        </div>
      </motion.div>
      <motion.div initial='hidden' animate='visible' variants={fadeInUp}>
        <Testimonials />
      </motion.div>
      <MaxWidthWrapper className='mb-20'>
        <motion.div initial='hidden' animate='visible' variants={fadeInUp}>
          <Faqs />
        </motion.div>
      </MaxWidthWrapper>
    </>
  );
}
