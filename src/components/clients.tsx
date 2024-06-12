'use client';

import React from 'react';

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
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
  { name: 'IISER Mohali', logo: 'images/client18.jpg' },
];

export default function Clients(): React.FC {
  return (
    <div className='container mx-auto my-8'>
      <h2 className='text-center text-3xl font-bold mb-4'>Select Clients</h2>
      <p className='text-center text-sm font-normal mb-12'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, ad?
      </p>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6'>
        {clients.map((client) => (
          <div key={client.name} className='group relative'> {/* Group for hover effect */}
            <div className='rounded-lg overflow-hidden transition duration-300 transform hover:-translate-y-2'> {/* Card styling and hover effect */}
              <img
                src={client.logo}
                alt={client.name}
                className='w-full h-48 object-cover'
              />
            </div>
            <div className='absolute bottom-0 w-full p-4 bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition duration-300'> {/* Backside content with hover reveal */}
              <p className='text-xl font-bold'>{client.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}