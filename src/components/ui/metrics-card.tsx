'use client';

import React, { useEffect } from 'react';

const metrics = [
  { name: 'Skills', value: 100, image: '/images/skills.png' },
  { name: 'Participants', value: 200, image: '/images/participants.png' },
  { name: 'Universities', value: 300, image: '/images/university.png' },
  { name: 'States', value: 400, image: '/images/state-1.png' },
  { name: 'Hours Taught', value: 500, image: '/images/hours.png' },
];

export default function MetricsCard() {
  useEffect(() => {
    const elements = document.querySelectorAll('.metric-value');
    elements.forEach((el) => {
      let start = 0;
      const end = parseInt(el.dataset.value);
      const duration = 2000;
      const increment = end / (duration / 10);

      const countUp = () => {
        start += increment;
        if (start < end) {
          el.textContent = Math.ceil(start);
          setTimeout(countUp, 10);
        } else {
          el.textContent = end;
        }
      };

      countUp();
    });

    const metricCards = document.querySelectorAll('.metric-card');
    metricCards.forEach(card => {
      card.addEventListener('mousemove', () => {
        card.style.boxShadow = `0px 0px 20px rgba(128, 0, 128, 0.5)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
      });
    });

    return () => {
      metricCards.forEach(card => {
        card.removeEventListener('mousemove', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div className='container my-8'>
      <div className='grid md:grid-cols-2 gap-5'>
        {metrics.map((metric, index) => (
          <div key={metric.name} className={`metric-card ${index % 2 !== 0 ? 'adjust-down' : ''} bg-white min-w-6 rounded-lg p-10 shadow-md relative overflow-hidden`}>
            <div className='relative z-10'>
              <h3 className='text-xl mb-2'>{metric.name}</h3>
              <p className='metric-value text-primary text-4xl font-bold' data-value={metric.value}>0</p>
            </div>
            <img src={metric.image} alt={metric.name} className='absolute bottom-2 right-2 w-10 h-10 rounded-full' />
          </div>
        ))}
      </div>
    </div>
  );
}
