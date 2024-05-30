import React from 'react';

const clients = [
  { name: 'Client 1', logo: '/images/bhu-client1.png' },
  { name: 'Client 2', logo: 'images/client2.png' },
  { name: 'Client 3', logo: 'images/client3.png' },
  { name: 'Client 4', logo: 'images/client4.png' },
  { name: 'Client 5', logo: 'images/client5.jpg' },
  { name: 'Client 6', logo: 'images/client6.png' },
  { name: 'Client 7', logo: 'images/client7.png' },
  { name: 'Client 8', logo: 'images/client8.png' },
  { name: 'Client 9', logo: 'images/client9.png' },
  { name: 'Client 10', logo: 'images/client10.jpg' },
  { name: 'Client 11', logo: 'images/client11.jpg' },
  { name: 'Client 12', logo: 'images/client12.svg' },
  { name: 'Client 13', logo: 'images/client13.png' },
  { name: 'Client 14', logo: 'images/client14.png' },
  { name: 'Client 15', logo: 'images/client15.png' },
  { name: 'Client 16', logo: 'images/client16.png' },
  { name: 'Client 17', logo: 'images/client17.jpeg' },
  { name: 'Client 18', logo: 'images/client18.jpg' },
];

export default function Clients() {
  return (
    <div className='container mx-auto my-8'>
      <h2 className='text-center text-3xl font-bold'>Select Clients</h2>
      <p className='mb-4 text-center text-sm font-normal'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, ad?
      </p>
      <div className='gap-4 ml-14 mr-14 grid grid-cols-3 md:grid-cols-6'>
        {clients.map((client) => (
          <div key={client.name} className='flex items-center justify-center'>
            <img src={client.logo} alt={client.name} className='h-16 w-auto' />
          </div>
        ))}
      </div>
    </div>
  );
}
