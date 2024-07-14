import React from 'react';
import Image from 'next/image';

const features = [
  {
    icon: '/path-to-live-icon.png',
    title: 'Affordable Quality',
    description: 'Top-tier education at the most competitive prices.',
  },
  {
    icon: '/path-to-tests-icon.png',
    title: 'Flexible Learning',
    description:
      'Access live classes and recorded lectures to suit your schedule',
  },
  {
    icon: '/path-to-doubt-icon.png',
    title: 'Focused Learning',
    description:
      'Small batch sizes for personalized attention and real-time Q&A sessions',
  },
  {
    icon: '/path-to-centres-icon.png',
    title: '24/7 Support',
    description: 'Continuous support from responsive instructors',
  },
  {
    icon: '/path-to-centres-icon.png',
    title: 'Regulated Quality',
    description:
      'Courses are meticulously monitored for quality and effectiveness',
  },
  {
    icon: '/path-to-centres-icon.png',
    title: 'Global Community',
    description: 'Join a community that helps each other grow and succeed',
  },
  {
    icon: '/path-to-centres-icon.png',
    title: 'Authentic Certificates',
    description:
      'Receive credible and valuable certificates that enhance your professional profile',
  },
];

function Features() {
  return (
    <div className='flex items-center justify-between bg-white py-12'>
      {features.map((feature, index) => (
        <div key={index} className='mx-4 text-center'>
          <div className='mb-4'>
            <Image
              src={feature.icon}
              alt={feature.title}
              width={50}
              height={50}
            />
          </div>
          <h3 className='text-sm font-bold text-gray-800'>{feature.title}</h3>
          <p className='text-sm text-gray-600'>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Features;
