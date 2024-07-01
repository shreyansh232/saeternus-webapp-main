import React from 'react';
import Image from 'next/image';
import Clients from '../../components/Clients';

export default function About() {
  return (
    <div>
      <div className='relative h-screen w-full'>
        <Image
          src='/images/class-hero.jpg'
          alt='Saeternus about us hero image'
          layout='fill'
          objectFit='cover'
          quality={10}
          className='absolute inset-0 h-full w-full object-cover'
        />
        <div className='absolute inset-0 bg-black bg-opacity-40 p-10 text-white md:p-40'>
          <h1 className='text-sm font-thin'>ABOUT US</h1>
          <p className='relative text-4xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            facere minima, voluptatem.
          </p>
        </div>
      </div>
      <div className='bg-white p-10 md:p-40'>
        <div className='flex flex-col items-center md:flex-row'>
          <h1 className='mb-4 text-3xl font-bold md:absolute md:mr-20 md:text-4xl'>
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
