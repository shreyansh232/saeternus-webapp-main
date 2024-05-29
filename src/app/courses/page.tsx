import React from 'react';
import CourseCard from '@/components/CourseCard';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { getAllCourses } from '@/api/course/course';
import { Metadata } from 'next';
import { getSeoKeywords } from '@/api/keywords/keywords';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Courses',
    description: 'Courses offered by Saeternus.',
  };
}

export default function Course() {
  const courses = getAllCourses();
  const allKeywords = getSeoKeywords();
  const courseKeywords = allKeywords['mainCourse'];
  const formatKeywords = (keywords: string[]) => {
    const formattedKeywords = keywords.map((keyword: string) => keyword.trim());
    return (
      formattedKeywords.slice(0, -1).join(', ') +
      ', ' +
      formattedKeywords[formattedKeywords.length - 1]
    );
  };
  const keywords = formatKeywords(courseKeywords);

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
        <div className='mt-20 h-1/2 w-full text-wrap  text-left'>
          <h1 className='text-xs font-bold '>Keywords</h1>
          <div className='flex items-center justify-start break-normal text-xs text-gray-600'>
            {keywords}.
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
