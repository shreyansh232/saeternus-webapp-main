import React from 'react';
import Image from 'next/image';

interface Metric {
  name: string;
  value: string;
  image: string;
}

interface MCardProps {
  metric: Metric;
}

const MCard: React.FC<MCardProps> = ({ metric }) => {
  return (
    <div className="p-4 xl:p-12 flex flex-col bg-white shadow-lg shadow-primary rounded-lg w-4/5 m-4 sm:w-full">
      <h3 className="text-black text-lg xl:text-xl font-semibold whitespace-normal max-w-xs">{metric.name}</h3>
      <p className="text-4xl font-bold text-primary">{metric.value}</p>
      <div className='mt-auto flex justify-end'>
      <Image 
        src={metric.image} 
        alt={metric.name} 
        width={56}
        height={56} 
        className='object-contain'
      />
      </div>
    </div>
  );
};

export default MCard;
