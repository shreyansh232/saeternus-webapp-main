import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

function Footer() {
  return (
    <footer className='w-full rounded-lg bg-white shadow dark:bg-gray-900'>
      <div className='mx-10 p-4 md:py-8'>
        {/* <MaxWidthWrapper> */}
        <div className='-mx-4 sm:flex sm:items-center sm:justify-between'>
          <Link
            href='/'
            className='mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse'
          >
            <Image
              src='/android-chrome-192x192.png'
              alt='Saeternus Logo'
              width={32}
              height={32}
            />
            <span className='self-center whitespace-nowrap text-xl font-semibold text-primary dark:text-white'>
              Saeternus
            </span>
          </Link>
          <ul className='text-back mb-6 flex flex-wrap items-center font-medium dark:text-gray-400 sm:mb-0'>
            <li>
              <Link
                className={cn(
                  buttonVariants({
                    variant: 'link',
                    size: 'sm',
                  }),
                  'text-black hover:text-primary'
                )}
                href='/about'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className={cn(
                  buttonVariants({
                    variant: 'link',
                    size: 'sm',
                  }),
                  'text-black hover:text-primary'
                )}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href='/courses'
                className={cn(
                  buttonVariants({
                    variant: 'link',
                    size: 'sm',
                  }),
                  'text-black hover:text-primary'
                )}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href='/policy'
                className={cn(
                  buttonVariants({
                    variant: 'link',
                    size: 'sm',
                  }),
                  'text-black hover:text-primary'
                )}
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href='/terms'
                className={cn(
                  buttonVariants({
                    variant: 'link',
                    size: 'sm',
                  }),
                  'text-black hover:text-primary'
                )}
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />
        <span className='block text-sm font-thin text-gray-500 dark:text-gray-400 sm:text-center'>
          {new Date().getFullYear()} saeternus™ All Rights Reserved.
        </span>
        {/* </MaxWidthWrapper> */}
      </div>
    </footer>
  );
}

export default Footer;
