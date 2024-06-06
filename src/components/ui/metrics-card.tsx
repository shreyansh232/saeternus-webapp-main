'use client';

import React, { useEffect } from 'react';

const metrics = [
  { name: 'Metric 1', value: 100, image: '/images/images.png' },
  { name: 'Metric 2', value: 200, image: '/images/images.png' },
  { name: 'Metric 3', value: 300, image: '/images/images.png' },
  { name: 'Metric 4', value: 400, image: '/images/images.png' },
  { name: 'Metric 5', value: 500, image: '/images/images.png' },
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
      <div className='metrics-grid'>
        {metrics.map((metric, index) => (
          <div key={metric.name} className={`metric-card ${index % 2 !== 0 ? 'adjust-down' : ''}`}>
            <div className='metric-content'>
              <h3 className='metric-name'>{metric.name}</h3>
              <p className='metric-value' data-value={metric.value}>0</p>
            </div>
            <img src={metric.image} alt={metric.name} className='metric-image' />
          </div>
        ))}
      </div>
      <style jsx>{`
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin: 0 auto;
        }

        .metric-card {
          background: #f0f0f0;
          border-radius: 16px;
          padding: 40px;
          text-align: left;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          flex: 1 1 calc(50% - 40px); /* Two columns with space between */
          max-width: calc(50% - 40px);
          min-width: 200px; /* Minimum width to prevent too small cards */
          width: 100%;
          position: relative;
          transition: box-shadow 0.3s ease;
          overflow: hidden;
        }

        .metric-content {
          position: relative;
          z-index: 1;
        }

        .metric-name {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .metric-value {
          font-size: 2rem;
          font-weight: bold;
        }

        .metric-image {
          position: absolute;
          bottom: -10px;
          right: -10px;
          width: 40px;
          height: 40px;
        //   transform: translate(20%, 20%);
          border-radius: 50%;
        }

        .adjust-down {
          transform: translateY(50px);
        }
        @media (max-width: 1024px) {
          .metric-card {
            min-width: 200px; 
          }
        }

        @media (max-width: 768px) {
          .metric-card {
            min-width: 150px; 
            padding: 30px;
          }

          .metric-name {
            font-size: 1rem;
          }

          .metric-value {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            width: 100%; 
            padding: 0; 
            margin: 0; 
          }
    
          .metric-card {
            min-width: 120px; 
            padding: 20px;
          }

          .metric-name {
            font-size: 0.9rem;
          }

          .metric-value {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
}