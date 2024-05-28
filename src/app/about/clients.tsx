import React from 'react';

const clients = [
  { name: 'Client 1', logo: 'images/logo-placeholder.png' },
  { name: 'Client 2', logo: 'images/logo-placeholder.png' },
  { name: 'Client 3', logo: 'images/logo-placeholder.png' },
  { name: 'Client 4', logo: 'images/logo-placeholder.png' },
  { name: 'Client 5', logo: 'images/logo-placeholder.png' },
  { name: 'Client 6', logo: 'images/logo-placeholder.png' },
  { name: 'Client 7', logo: 'images/logo-placeholder.png' },
  { name: 'Client 8', logo: 'images/logo-placeholder.png' },
  { name: 'Client 9', logo: 'images/logo-placeholder.png' },
  { name: 'Client 10', logo: 'images/logo-placeholder.png' },
  { name: 'Client 11', logo: 'images/logo-placeholder.png' },
  { name: 'Client 12', logo: 'images/logo-placeholder.png' },
  { name: 'Client 13', logo: 'images/logo-placeholder.png' },
  { name: 'Client 14', logo: 'images/logo-placeholder.png' },
  { name: 'Client 15', logo: 'images/logo-placeholder.png' },
  { name: 'Client 16', logo: 'images/logo-placeholder.png' },
  { name: 'Client 17', logo: 'images/logo-placeholder.png' },
  { name: 'Client 18', logo: 'images/logo-placeholder.png' },
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
