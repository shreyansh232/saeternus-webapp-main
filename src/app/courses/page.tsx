import React from 'react';
import CourseCard from '@/components/CourseCard';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { getAllCourses } from '@/api/course/course';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Courses',
    description: 'Courses offered by Saeternus.',
  };
}

export default function Course() {
  const courses = getAllCourses();

  return (
    <div>
      <MaxWidthWrapper className='mb-12 mt-12 flex flex-col items-center justify-center text-center sm:mt-20'>
        <h1 className='mb-12 max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          Courses we offer for your
          <span className='text-primary'> success</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center gap-2'>
          {courses.map((course) => (
            <CourseCard
              key={course.courseId}
              courseId={course.courseId}
              title={course.title}
              description={course.description}
              image={course.image}
              tags={course.tags}
              prevPrice={course.prevPrice}
              currentPrice={course.currentPrice}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
