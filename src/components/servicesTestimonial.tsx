'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface Testimonial {
  imageSrc: string;
  name: string;
  degree: string;
  content: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    imageSrc: '/images/placeholder.png',
    name: 'Saurabh Parulekar',
    degree: 'MS in Electrical Engineering',
    content: 'Suggest Yocket Premium for students who aspire to study MS',
    review: 'review content',
  },
  {
    imageSrc: '/images/placeholder.png',
    name: 'Aditi Sharma',
    degree: 'MBA in Finance',
    content:
      'Yocket helped me navigate through my application process seamlessly.',
    review: 'review content',
  },
  {
    imageSrc: '/images/placeholder.png',
    name: 'Rahul Mehta',
    degree: 'PhD in Computer Science',
    content:
      'The guidance I received was invaluable for my research proposals.',
    review: 'review content',
  },
];

const TestimonialCard: React.FC<Testimonial> = ({
  imageSrc,
  name,
  degree,
  content,
  review,
}) => (
  <article className='flex flex-col items-center transition-opacity duration-500 ease-in-out'>
    <div className='flex gap-2 whitespace-nowrap text-center text-primary'>
      <Image
        width={200}
        height={200}
        loading='lazy'
        src={imageSrc}
        alt={`${name}'s profile`}
        className='aspect-square w-[50px] md:w-[70px] shrink-0 rounded-full'
      />
    </div>
    <p className='mt-4 self-end text-center text-base font-light italic text-black'>
      &ldquo;{content}&rdquo;
    </p>
    <h4 className='mt-4 text-base md:text-lg text-primary'>{name}</h4>
    <p className='text-center text-base md:text-lg text-primary'>{degree}</p>
  </article>
);

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handleTestimonialChange = (direction: 'next' | 'prev') => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        if (direction === 'next') {
          return (prevIndex + 1) % testimonials.length;
        } else {
          return (prevIndex - 1 + testimonials.length) % testimonials.length;
        }
      });
      setFade(false);
    }, 300);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleTestimonialChange('next');
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className='mx-4 my-10 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 flex flex-col items-center rounded-3xl bg-white p-5 md:p-10 text-xl font-semibold shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
      <div className='w-full max-w-[500px]'>
        <div className='flex items-center justify-between gap-5 pb-9 pt-16 '>
          <div
            className={`transition-opacity duration-500 ease-in-out ${fade ? 'opacity-0' : 'opacity-100'}`}
          >
            <TestimonialCard {...testimonials[currentIndex]} />
          </div>
        </div>

        {/* Dots Indicator */}
        <div className='flex justify-center space-x-2 mt-4'>
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`mb-4 block h-3 w-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-primary' : 'bg-gray-300'}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
