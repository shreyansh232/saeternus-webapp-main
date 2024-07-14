'use client';

import Image from 'next/image';
import React from 'react';

const clients = [
  {
    name: 'Banaras Hindu University',
    logo: '/images/banaras-hindu-university-bhu.png',
  },
  {
    name: 'Jawaharlal Nehru University',
    logo: '/images/jawahar-lal-nehru-jnu.png',
  },
  {
    name: 'Aligarh Muslim University',
    logo: '/images/aligarh-muslim-university-amu.png',
  },
  { name: 'University of Madras', logo: '/images/university-of-madras.png' },
  { name: 'Osmania University', logo: '/images/osmania-university.png' },
  { name: 'Panjab University', logo: '/images/panjab-university.png' },
  { name: 'University of Kerala', logo: '/images/university-of-kerala.png' },
  {
    name: 'University of Rajasthan',
    logo: '/images/university-of-rajasthan.png',
  },
  { name: 'Lucknow University', logo: '/images/lucknow-university.png' },
  {
    name: "King George's Medical University",
    logo: '/images/king-georges-medical-university.png',
  },
  {
    name: 'North-Eastern Hill University',
    logo: '/images/northeastern-hill-university.png',
  },
  {
    name: 'Himachal Pradesh University',
    logo: '/images/himachal-pradesh-university.svg',
  },
  { name: 'Tamil University', logo: '/images/tamil-university.png' },
  { name: 'Kashmir University', logo: '/images/kashmir-university.png' },
  { name: 'Deccan College', logo: '/images/deccan-college.png' },
  { name: 'BAMU India', logo: '/images/bamu-india.png' },
  { name: 'University of Ibadan', logo: '/images/university-of-ibadan.png' },
  { name: 'IISER Mohali', logo: '/images/iiser-mohali.png' },
];

export default function Clients() {
  return (
    <div className='container mx-auto my-8 mb-20 py-20 xl:py-52'>
      <h2 className='mb-4 text-center text-4xl font-black sm:text-5xl'>
        Our Clients
      </h2>
      <p className='mb-20 text-center font-normal xl:text-lg'>
        We are trusted by professionals from leading organizations
      </p>
      <div className='grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6 xl:gap-20'>
        {clients.map((client) => (
          <div
            key={client.name}
            className='h-100 w-100 group [perspective:1000]'
          >
            <div className='text-center transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
              <div className='relative inset-0 flex items-center justify-center [backface-visibility:hidden]'>
                <Image
                  src={client.logo}
                  alt={client.name}
                  height={100}
                  width={100}
                  className='h-16 w-auto'
                />
              </div>
              <div className='absolute inset-0 flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]'>
                <div className='bg-gray-100 text-black '>{client.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
