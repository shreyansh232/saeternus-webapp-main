'use client';

import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

export function Testimonials() {
  return (
    <div className='dark:bg-grid-white/[0.05] relative mb-36 flex flex-col items-center justify-center overflow-hidden rounded-md bg-transparent antialiased'>
      <InfiniteMovingCards
        items={testimonials}
        direction='right'
        speed='slow'
      />
    </div>
  );
}

const testimonials = [
  {
    image: '/images/images.png',
    quote:
      "Thanks for the help with my project proposal! Couldn't have done it without you. I'm so happy with the results!",
    name: 'John Sebastian',
    title: 'Student',
  },
  {
    image: '/images/images.png',
    quote: 'I was struggling with Java and APIs! Well not anymore :).',
    name: 'Maria Garcia',
    title: 'OSS contributor',
  },
];
