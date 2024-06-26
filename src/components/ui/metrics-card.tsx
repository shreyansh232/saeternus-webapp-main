// pages/index.tsx

import React from 'react';
import MetricsCard from './mcard'; // Adjust import path based on your file structure

const metrics = [
  { name: 'Programs', value: 8, image: '/images/skills.png' },
  { name: 'Learners', value: 141, image: '/images/participants.png' },
  { name: 'Organisations', value: 55, image: '/images/university.png' },
  { name: 'Country/States', value: 23, image: '/images/state-1.png' },
  { name: 'Hours Spent', value: 3324, image: '/images/hours.png' },
];

const MetricsSection: React.FC = () => {
  return (
    <div className="container mt-10 mx-auto px-0">
      <div className="flex gap-1 sm:gap-4">
        <div className="flex flex-col">
          {metrics.slice(0, 3).map((metric, index) => (
            <div key={index} className={""}>
              <MetricsCard metric={metric} />
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-20">
          {metrics.slice(3, 5).map((metric, index) => (
            <div key={index} className="md:mb-0">
              <MetricsCard metric={metric} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetricsSection;
