'use client';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Testimonials } from '@/components/Testimonials';
import MetricsCard2 from '@/components/ui/metric-card2';
import MetricsCard from '@/components/ui/metrics-card';

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className='mb-28 mt-28 flex flex-col items-center justify-center text-center sm:mt-40'>
        <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          Innovating for your
          <span className='text-primary'> success</span>
        </h1>
        <h2 className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
          <span className='text-primary'>Your success is our success</span>. We
          are committed to delivering innovative solutions and exceptional
          service to help you achieve your goals.{' '}
          <span className='text-primary'>
            Let us help you turn your vision into a reality
          </span>
          .
        </h2>

        <Link
          className={buttonVariants({
            size: 'lg',
            className: 'mt-5',
          })}
          href='/courses'
        >
          Get started
          <ArrowRight className='ml-2 h-5 w-5' />
        </Link>
      </MaxWidthWrapper>

      <div className='flex flex-col items-center bg-gray-100 p-10 sm:flex-row sm:p-40'>
        <div className='sm:flex-1'>
          <h1 className='text-3xl font-bold'>Start Learning with Saeturnus</h1>
          <p className='mt-2 text-lg'>
            Get unlimited access to structured videos and learning resources.
          </p>
          <Link
            className={buttonVariants({
              size: 'lg',
              className: 'mt-5',
            })}
            href='/courses'
          >
            Get started
            <ArrowRight className='ml-2 h-5 w-5' />
          </Link>
        </div>
        <div className='mt-10 w-full sm:mt-0 sm:flex-1'>
          <MetricsCard />
        </div>
      </div>

      {/* Testimonials section */}
      <div className='mx-auto mt-8 max-w-5xl items-center justify-center sm:mt-56'>
        <div className='mb-12 px-6 text-center lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='mt-2 text-4xl font-bold text-gray-900 sm:text-5xl'>
              What are <span className='text-primary'> our clients </span>
              saying?
            </h2>
          </div>
        </div>
      </div>

      <Testimonials />
    </>
  );
}
