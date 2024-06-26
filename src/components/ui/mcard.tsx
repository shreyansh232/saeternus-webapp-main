import React from 'react';

interface Metric {
  name: string;
  value: number;
  image: string;
}

interface MCardProps {
  metric: Metric;
}

const MCard: React.FC<MCardProps> = ({ metric }) => {
  return (
    <div className="p-4 flex flex-col w-full bg-white shadow-lg shadow-primary rounded-lg w-4/5 m-4 sm:w-full">
      <h3 className="text-black text-lg font-semibold whitespace-normal max-w-xs">{metric.name}</h3>
      <p className="text-4xl font-bold text-primary">{metric.value}</p>
      <div className='mt-auto flex justify-end'>
        <img src={metric.image} alt={metric.name} className="w-14 h-14 object-contain" />
      </div>
    </div>
  );
};

export default MCard;
