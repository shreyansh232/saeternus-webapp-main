import React, { useEffect } from 'react';

interface Metric {
  name: string;
  value: number;
  image: string;
}

const metrics: Metric[] = [
  { name: 'Metric 1', value: 100, image: '/images/images.png' },
  { name: 'Metric 2', value: 200, image: '/images/images.png' },
  { name: 'Metric 3', value: 300, image: '/images/images.png' },
  { name: 'Metric 4', value: 400, image: '/images/images.png' },
  { name: 'Metric 5', value: 500, image: '/images/images.png' },
];

export default function MetricsCard2() {
  useEffect(() => {
    const elements = document.querySelectorAll('.metric-value');
    elements.forEach((el) => {
      let start = 0;
      const end = parseInt(el.getAttribute('data-value') || '0', 10);
      const duration = 2000;
      const increment = end / (duration / 10);

      const countUp = () => {
        start += increment;
        if (start < end) {
          el.textContent = Math.ceil(start).toString();
          setTimeout(countUp, 10);
        } else {
          el.textContent = end.toString();
        }
      };

      countUp();
    });

    // Add event listener for hover effect
    const metricCards = document.querySelectorAll('.metric-card');
    metricCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.boxShadow = `${x}px ${y}px 20px rgba(128, 0, 128, 0.5)`;
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
    <div className='container mx-auto my-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {metrics.map((metric, index) => (
          <div 
            key={metric.name} 
            className={`metric-card mb-8 relative bg-gray-100 rounded-xl p-8 shadow-lg transition-shadow duration-300 overflow-hidden ${index % 2 !== 0 ? 'md:translate-y-12' : ''}`}
          >
            <div className='metric-content'>
              <h3 className='text-xl mb-2'>{metric.name}</h3>
              <p className='metric-value text-4xl font-bold' data-value={metric.value}>0</p>
            </div>
            <img 
              src={metric.image} 
              alt={metric.name} 
              className='metric-image absolute w-16 h-16 bottom-[-5px] right-[-5px] rounded-full transform translate-x-1/4 translate-y-1/4' 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
