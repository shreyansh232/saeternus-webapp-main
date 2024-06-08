'use client';
import React, { useState } from 'react';
import CourseCard from '@/components/CourseCard';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { getAllCourses } from '@/api/course/course';

export default function Course() {
  const [searchQuery, setSearchQuery] = useState('');
  const courses = getAllCourses();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <MaxWidthWrapper className='mb-12 mt-12 flex flex-col items-center justify-center text-center sm:mt-20'>
        <h1 className='mb-4 max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          Courses we offer for your
          <span className='text-primary'> success</span>
        </h1>
        <form className='mb-2 mt-4 max-w-full sm:mt-10 sm:max-w-md lg:-ml-14 lg:self-start'>
          <label
            htmlFor='default-search'
            className='sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Search
          </label>
          <div className='relative'>
            <div className='pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3'>
              <svg
                className='h-4 w-4 text-gray-500 dark:text-gray-400'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
            </div>
            <input
              type='search'
              id='default-search'
              className='block h-[40px] w-[250px] rounded-xl border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary dark:focus:ring-primary'
              placeholder='Search for courses'
              required
              onChange={handleSearch}
            />
          </div>
        </form>
        <div className='flex flex-wrap items-center justify-center gap-5 lg:w-[1250px]'>
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.courseId}
              courseId={course.courseId}
              title={course.title}
              header={course.header}
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
