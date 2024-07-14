import React from 'react';
import Image from 'next/image';

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
    <div className='container mx-auto my-8'>
      <h2 className='text-center text-3xl font-bold'>
        We are trusted by professionals from Leading Organizations
      </h2>
      <p className='mb-4 text-center text-sm font-normal'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, ad?
      </p>
      <div className='ml-14 mr-14 grid grid-cols-3 gap-4 md:grid-cols-6'>
        {clients.map((client) => (
          <div key={client.name} className='flex items-center justify-center'>
            <Image
              src={client.logo}
              alt={client.name}
              width={120}
              height={60}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
