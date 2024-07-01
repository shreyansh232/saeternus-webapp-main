'use client';

import Image from 'next/image';
import React from 'react';

const clients = [
  { name: 'Banaras Hindu University', logo: '/images/banaras-hindu-university-bhu.png' },
  { name: 'Jawaharlal Nehru University', logo: '/images/jawahar-lal-nehru-jnu.png' },
  { name: 'Aligarh Muslim University', logo: '/images/aligarh-muslim-university-amu.png' },
  { name: 'University of Madras', logo: '/images/university-of-madras.png' },
  { name: 'Osmania University', logo: '/images/osmania-university.png' },
  { name: 'Panjab University', logo: '/images/panjab-university.png' },
  { name: 'University of Kerala', logo: '/images/university-of-kerala.png' },
  { name: 'University of Rajasthan', logo: '/images/university-of-rajasthan.png' },
  { name: 'Lucknow University', logo: '/images/lucknow-university.png' },
  { name: "King George's Medical University", logo: '/images/king-georges-medical-university.png' },
  { name: 'North-Eastern Hill University', logo: '/images/northeastern-hill-university.png' },
  { name: 'Himachal Pradesh University', logo: '/images/himachal-pradesh-university.svg' },
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
      <h2 className='mb-4 text-center text-3xl font-bold'>Select Clients</h2>
      <p className='mb-12 text-center text-sm font-normal'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, ad?
      </p>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6'>
        {clients.map((client) => (
          <div key={client.name} className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <Image
                  src={client.logo}
                  alt={client.name}
                  height={100}
                  width={100}
                  className='h-16 w-auto'
                />
              </div>
              <div className='flip-card-back'>
                <div className='tooltip'>{client.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .flip-card {
          background-color: transparent;
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: relative;
          width: 100%;
          backface-visibility: hidden;
        }
        .flip-card-front {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .flip-card-back {
          // background-color: #333;
          margin-top: -70px;
          color: white;
          transform: rotateY(180deg);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .tooltip {
          padding: 10px;
          border-radius: 6px;
          color: #000000;
          text-align: center;
          width: 120px;
        }
      `}</style>
    </div>
  );
}
