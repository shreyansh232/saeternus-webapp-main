'use client';

import React from 'react';

const clients = [
  { name: 'Banaras Hindu University', logo: '/images/bhu-client1.png' },
  { name: 'Jawaharlal Nehru University', logo: 'images/client2.png' },
  { name: 'Aligarh Muslim University', logo: 'images/client3.png' },
  { name: 'University of Madras', logo: 'images/client4.png' },
  { name: 'Osmania University', logo: 'images/client5.png' },
  { name: 'Panjab University', logo: 'images/client6.png' },
  { name: 'University of Kerala', logo: 'images/client7.png' },
  { name: 'University of Rajasthan', logo: 'images/client8.png' },
  { name: 'Lucknow University', logo: 'images/client9.png' },
  { name: "King George's Medical University", logo: 'images/client10.png' },
  { name: 'North-Eastern Hill University', logo: 'images/client11.png' },
  { name: 'Himachal Pradesh University', logo: 'images/client12.svg' },
  { name: 'Tamil University', logo: 'images/client13.png' },
  { name: 'Kashmir University', logo: 'images/client14.png' },
  { name: 'Deccan College', logo: 'images/client15.png' },
  { name: 'BAMU India', logo: 'images/client16.png' },
  { name: 'University of Ibadan', logo: 'images/client17.png' },
  { name: 'IISER Mohali', logo: 'images/client18.png' },
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
                <img
                  src={client.logo}
                  alt={client.name}
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
          // background-color: black;
          color: #000000;
          text-align: center;
          width: 120px;
        }

        @media (max-width: 768px) {
          .flip-card-inner {
            height: auto;
          }
        }
      `}</style>
    </div>
  );
}
