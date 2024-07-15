'use client';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Testimonials } from '@/components/Testimonials';
import Clients from '@/components/clients';
import Features from '@/components/Features';
import MetricsCard from '@/components/ui/metrics-card';

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className='mb-36 mt-28 flex flex-col items-center justify-center text-center sm:mt-40'>
        <h1 className='text-5xl font-bold md:text-6xl xl:w-11/12 xl:text-8xl'>
          Transform your career with
          <span className='text-primary'> Saeternus</span>
        </h1>
        <h2 className='mt-5 max-w-prose text-zinc-700 sm:text-lg xl:text-xl'>
          Dive into exclusive, industry-aligned resouces you never knew you
          needed. Experience life-changing education across all domains and join
          us in democratizing learning for everyone, anywhere.
        </h2>

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
      </MaxWidthWrapper>
      <div>
        <Features />
      </div>
      <div className='flex flex-col items-center bg-white p-10 sm:flex-row sm:pt-40 xl:p-60'>
        <div className='sm:flex-1'>
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
        </div>
        <div className='sm:mt-0'>
          <MetricsCard />
        </div>
      </div>
      <div className='mb-20 h-1/2 w-full bg-gray-100'>
        <Clients />
      </div>
      {/* Testimonials section */}
      <div className='mx-auto mb-10 max-w-5xl items-center justify-center sm:mt-56'>
        <div className='mb-12 px-6 text-center lg:px-8'>
          <div className='mx-auto max-w-5xl sm:text-center'>
            <h2 className='my-auto mb-24 text-4xl font-black text-gray-900 sm:text-5xl'>
              What <span className='text-primary'>Saeternites </span> say about
              us...
            </h2>
          </div>
        </div>
      </div>
      <Testimonials />
    </>
  );
}
