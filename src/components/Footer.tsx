import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import MaxWidthWrapper from './MaxWidthWrapper';

function Footer() {
  return (
    <footer className='w-full bg-white shadow dark:bg-gray-900'>
      <div className='mx-auto max-w-full py-8 md:py-12'>
        <MaxWidthWrapper>
          <div className='flex flex-col items-start justify-between md:flex-row'>
            <div className='mb-8 md:mb-0 md:mr-8'>
              <Link
                href='/'
                className='flex items-start justify-start space-x-3 rtl:space-x-reverse'
              >
                <Image
                  src='/android-chrome-192x192.png'
                  alt='Saeternus Logo'
                  width={32}
                  height={32}
                />
                <span className='self-center text-xl font-semibold text-primary dark:text-white'>
                  Saeternus
                </span>
              </Link>
              <div className='mt-4 text-sm text-black dark:text-gray-400'>
                <h1 className='text-lg font-bold'>Office Address</h1>
                <p>B-201, IBITF Office, IIT Bhilai, GEC Campus, Sejbahar,</p>
                <p>Raipur, Chhattisgarh 492015</p>
                <p>CIN: U72900CT2022PTC013086</p>
                <p>GSTN: 22ABICS3553L1Z5</p>
                <p>Contact: +91 80049 16849</p>
                <p>Email: hello@saeternus.com</p>
              </div>
            </div>
            <div className='flex space-x-16'>
              <div>
                <h2 className='text-md mb-2 font-semibold text-gray-700 dark:text-gray-200'>
                  Company
                </h2>
                <ul className='space-y-2 font-medium text-black dark:text-gray-400'>
                  <li>
                    <Link
                      href='/about'
                      className={cn('text-black hover:text-primary')}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/contact'
                      className={cn('text-black hover:text-primary')}
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/courses'
                      className={cn('text-black hover:text-primary')}
                    >
                      Courses
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='text-md mb-2 font-semibold text-gray-700 dark:text-gray-200'>
                  Legal
                </h2>
                <ul className='space-y-2 font-medium text-black dark:text-gray-400'>
                  <li>
                    <Link
                      href='/policy'
                      className={cn('text-black hover:text-primary')}
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/terms'
                      className={cn('text-black hover:text-primary')}
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <hr className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />
        <span className='block text-sm font-thin text-gray-500 dark:text-gray-400 sm:text-center'>
          {new Date().getFullYear()} saeternus™ All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
