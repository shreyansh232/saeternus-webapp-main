import React, { useState, useEffect } from 'react';
interface Metric {
  name: string;
  value: number;
  image: string;
}

const metric: Metric[] = [
  { name: 'Skills', value: 100, image: '/images/skills.png' },
  { name: 'Participants', value: 200, image: '/images/participants.png' },
  { name: 'Universities', value: 300, image: '/images/university.png' },
  { name: 'States', value: 400, image: '/images/state-1.png' },
  { name: 'Hours Taught', value: 500, image: '/images/hours.png' },
];

const MetricsCard: React.FC<Metric> = ({ metric }) => {
  
  const [currentValue, setCurrentValue] = useState(0);
  useEffect(() => {
    const animateCount = () => {
      const end = metric.value;
      const duration = 2000;
      const increment = end / (duration / 10);
      let start = 0;
      const interval = setInterval(() => {
        start += increment;
        setCurrentValue(Math.ceil(start));
        if (start >= end) {
          clearInterval(interval);
        }
      }, 10);
    };
    animateCount();
    return () => clearInterval(interval); // Cleanup on unmount
  }, [metric.value]); // Re-run useEffect on metric value change
  return (
    <div className='metric-card'>
      <div className='relative z-10'>
        <h3 className='text-xl mb-2'>{metric.name}</h3>
        <p className='metric-value text-primary text-4xl font-bold'>
          {currentValue}
        </p>
      </div>
      <img
        src={metric.image}
        alt={metric.name}
        className='absolute bottom-2 right-2 w-10 h-10 rounded-full'
      />
    </div>
  );
};
export default MetricsCard;