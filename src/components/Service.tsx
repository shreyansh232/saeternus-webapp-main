import React from 'react';
import { EvervaultCard } from './ui/evervault-card';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

export function Services() {
  return (
    <div className='mx-auto flex w-full justify-center'>
      <div className='flex w-fit flex-wrap gap-2'>
        <div className='relative mx-auto flex h-[30rem] max-w-sm flex-col items-start border border-black/[0.2] p-4 dark:border-white/[0.2]'>
          <EvervaultCard text='Build' />

          <div className='flex h-64 flex-col justify-between'>
            <h2 className='mt-4 text-sm font-light text-black dark:text-white'>
              Got an idea? Need help in scaling or starting your project? We can
              help you build your dream project.
            </h2>
            <Link
              className={buttonVariants({
                variant: 'link',
                size: 'lg',
                className: 'mt-5',
              })}
              href='/contact'
            >
              Lets build something
            </Link>
          </div>
        </div>
        <div className='relative mx-auto flex h-[30rem] max-w-sm flex-col items-start border border-black/[0.2] p-4 dark:border-white/[0.2]'>
          <EvervaultCard text='Teach' />

          <div className='flex h-64 flex-col justify-between'>
            <h2 className='mt-4 text-sm font-light text-black dark:text-white'>
              Need to learn something new? We offer a wide range of courses from
              students to professionals. We can help you or your team learn new
              skills. Enterprise or individual, we have you covered.
            </h2>
            <Link
              className={buttonVariants({
                variant: 'link',
                size: 'lg',
                className: 'mt-5',
              })}
              href='/contact'
            >
              Lets learn
            </Link>
          </div>
        </div>
        <div className='relative mx-auto flex h-[30rem] max-w-sm flex-col items-start border border-black/[0.2] p-4 dark:border-white/[0.2]'>
          <EvervaultCard text='Blogs' />
          <div className='flex h-64 flex-col justify-between'>
            <h2 className='mt-4 text-sm font-light text-black dark:text-white'>
              Our free blogs are a great way to learn new things. We offer
              premium blogs for our subscribers. Learn on the go, at your own
              pace.
            </h2>
            <Link
              className={buttonVariants({
                variant: 'link',
                size: 'lg',
                className: 'mt-5',
              })}
              href='/knowledge'
            >
              Knowlege Haven
            </Link>
          </div>
        </div>
        <div className='relative mx-auto flex h-[30rem] max-w-sm flex-col items-start border border-black/[0.2] p-4 dark:border-white/[0.2]'>
          <EvervaultCard text='Newsletter' />

          <div className='flex h-64 flex-col justify-between'>
            <h2 className='mt-4 text-sm font-light text-black dark:text-white'>
              Subscribe to our newsletter to get the latest updates on our
              products and services.
            </h2>
            <Link
              className={buttonVariants({
                variant: 'link',
                size: 'lg',
                className: 'mt-5',
              })}
              href='/contact-us'
            >
              Newsletter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
