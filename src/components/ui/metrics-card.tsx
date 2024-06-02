'use client';

import React, { useEffect } from 'react';

const metrics = [
  { name: 'Metric 1', value: 100 },
  { name: 'Metric 2', value: 200 },
  { name: 'Metric 3', value: 300 },
  { name: 'Metric 4', value: 400 },
  { name: 'Metric 5', value: 500 },
];

export default function MetricsCard() {
  useEffect(() => {
    const elements = document.querySelectorAll('.metric-value');
    elements.forEach((el, index) => {
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
  }, []);

  return (
    <div className='container mx-auto my-8'>
      <div className='metrics-grid'>
        {metrics.map((metric, index) => (
          <div key={metric.name} className={`metric-card ${index % 2 !== 0 ? 'adjust-down' : ''}`}>
            <h3 className='metric-name'>{metric.name}</h3>
            <p className='metric-value' data-value={metric.value}>0</p>
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
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          width: 100%;
          transition: box-shadow 0.3s ease;
        }

        .metric-card:hover {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .metric-name {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .metric-value {
          font-size: 2rem;
          font-weight: bold;
        }

        .adjust-down {
          transform: translateY(60px);
        }
      `}</style>
    </div>
  );
}
