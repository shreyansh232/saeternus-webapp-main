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
    image: '/images/IMG_20230214_212404_240 - ROMA SIDDIQUI.jpg',
    quote: (
      <div>
        Attending this program was an awesome experience. I learned a lot from
        the sessions and speakers.
        <strong>
          {' '}
          The Saeternus GIS course was amazing, providing immense knowledge of
          GIS.
        </strong>{' '}
        Really awesome course organized by Saeternus. Highly recommended for
        future aspirants.
      </div>
    ),
    name: 'Roma Siddiqui',
    title: 'Project Assistant',
  },
  {
    image: '/images/Rajesh_Raman.jpeg',
    quote: (
      <div>
        The instructor was very methodological and patient and made learning
        SPSS very easy.{' '}
        <strong>The structured approach helped in easy learning.</strong>
      </div>
    ),
    name: 'Dr. Rajesh Raman',
    title: 'Additional Professor',
  },
  {
    image: '/images/MY PHOTO - Sudha Rawat.jpeg',
    quote: (
      <div>
        The SPSS course was transformative. The instructor simplified complex
        concepts, ensuring clarity.{' '}
        <strong>
          Clear explanations and practical examples helped me grasp SPSS
          fundamentals quickly.
        </strong>{' '}
        Emphasis on accurate data interpretation proved invaluable in my current
        role.
      </div>
    ),
    name: 'Sudha Rawat',
    title: 'Doctoral Candidate',
  },
  {
    image: '/images/photo_2024-03-04_19-58-43 - Kavita Verma.jpg',
    quote: (
      <div>
        The classes were very well planned and modified as per the needs of the
        students.{' '}
        <strong>
          The concepts were well elaborated, and the notebooks were shared in
          advance to get the idea of the topic to be taught.
        </strong>
      </div>
    ),
    name: 'Kavita Verma',
    title: 'Research Scholar',
  },
  {
    image: '/images/E29C3D62-1BD4-4174-ACBE-8218F724E85C - Preeti Mishra.JPG',
    quote: (
      <div>
        The overall experience was really overwhelming. Teachers were very
        helpful and supportive.{' '}
        <strong>
          The lecture files were shared after each class that played an
          important role in completing the task and to cope up with the class.
        </strong>{' '}
        The course was indeed very productive. Looking forward to learning more.
      </div>
    ),
    name: 'Preeti Mishra',
    title: 'Assistant Professor',
  },
  {
    image: '/images/PHOTO-2021-01-24-19-07-28 (1) - Rati Prabha.jpg',
    quote: (
      <div>
        The instructor was very methodological, and her structured approach for
        teaching SPSS made learning SPSS very easy - even for beginners.{' '}
        <strong>
          The course was appropriate for both beginners and intermediate-level
          SPSS users. I highly recommend the course.
        </strong>
      </div>
    ),
    name: 'Dr. Rati Prabha',
    title: 'Associate Professor',
  },
  {
    image: '/images/PIC - PRAKARSH SRIVASTAVA.jpg',
    quote: (
      <div>
        I am impressed by the{' '}
        <strong>
          overall quality of the course and most importantly by the faculty and
          the knowledge she possesses.
        </strong>
      </div>
    ),
    name: 'Prakarsh Srivastava',
    title: 'Student',
  },
];

export default testimonials;
