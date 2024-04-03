import React from 'react';
import CourseCard from '@/components/CourseCard';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const courses = [
  {
    courseId: '1',
    title: 'Introduction to React',
    description: 'Learn the basics of React.js framework.',
    image: '/assets/react.png',
    tags: ['React', 'JavaScript', 'Frontend'],
    prevPrice: 99,
    currentPrice: 79,
  },
  {
    courseId: '2',
    title: 'Node.js Fundamentals',
    description: 'Master the fundamentals of Node.js for backend development.',
    image: '/assets/node.png',
    tags: ['Node.js', 'JavaScript', 'Backend'],
    prevPrice: 129,
    currentPrice: 99,
  },
  {
    courseId: '3',
    title: 'Python for Beginners',
    description: 'Get started with Python programming language.',
    image: '/assets/python.png',
    tags: ['Python', 'Programming', 'Beginner'],
    prevPrice: 89,
    currentPrice: 69,
  },
  {
    courseId: '4',
    title: 'Data Structures and Algorithms',
    description: 'Learn essential data structures and algorithms concepts.',
    // image: "dsa.png",
    tags: ['Data Structures', 'Algorithms', 'Programming'],
    prevPrice: 149,
    currentPrice: 119,
  },
  {
    courseId: '5',
    title: 'Web Development Bootcamp',
    description: 'Comprehensive course covering HTML, CSS, and JavaScript.',
    // image: "webdev.png",
    tags: ['HTML', 'CSS', 'JavaScript', 'Frontend'],
    prevPrice: 199,
    currentPrice: 149,
  },
];

export default function Course() {
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
