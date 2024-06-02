import React from 'react';
import Image from 'next/image';
import Clients from '../../components/clients';

export default function About() {
  return (
    <div>
      <div className='relative h-screen w-full'>
        <Image
          src='/images/About-hero-1.jpg' // Replace with your image path
          alt='Hero Image'
          layout='fill'
          objectFit='cover'
          quality={100}
          className='absolute inset-0 h-full w-full object-cover'
        />
        <div className='absolute inset-0 bg-black bg-opacity-70 p-10 text-white md:p-40'>
          <h1 className='text-sm font-thin'>ABOUT US</h1>
          <p className='relative text-4xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            facere minima, voluptatem.
          </p>
        </div>
      </div>
      <div className='bg-white p-10 md:p-40'>
        <div className='flex flex-col items-center md:flex-row'>
          <h1 className='text-2xl font-bold md:absolute md:mr-20 md:text-4xl'>
            Who we are
          </h1>
          <p className='text-bold md:ml-52'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            facere minima, vel, voluptatibus, nobis tempora corporis officiis
            esse mollitia nostrum quia minus necessitatibus voluptatem.
          </p>
        </div>
      </div>

      <Clients />
    </div>
  );
}
