'use client';

import { getCourseDetailById } from '@/api/course/course';
import { CourseDetails } from '@/api/course/CourseDetails';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

export default function Page({ params }: { params: { courseId: string } }) {
  const [course, setCourse] = useState<CourseDetails | undefined>(undefined);

  useEffect(() => {
    const course = getCourseDetailById(params.courseId);
    setCourse(course);
  }, [course, params.courseId]);

  return (
    <MaxWidthWrapper className='mt-12 flex flex-col items-center justify-center'>
      {course ? (
        <>
          <div className='header relative mb-12 h-full w-full'>
            <h1 className='mb-8 max-w-4xl text-4xl font-bold md:text-5xl lg:text-6xl'>
              {course.title}
            </h1>
            <p>{course.description}</p>
            {course.image && (
              <Image
                className='absolute -top-10 right-0 -z-10 rounded-lg opacity-40'
                src={course.image}
                alt={course.title}
                width={350}
                height={350}
              />
            )}
            <div className='price mt-2 flex flex-col items-start gap-2'>
              <div className='tag flex gap-1'>
                {course.tags?.map((tag) => (
                  <Badge key={tag} variant='secondary' className='text-xs'>
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className='flex w-full flex-col justify-between sm:flex-row'>
                <div className='flex items-center justify-start gap-2'>
                  <div className='flex h-full items-center justify-center'>
                    <span className='align-top text-gray-500 line-through'>
                      {course.prevPrice}
                    </span>
                    <span className='text-2xl font-bold text-primary'>
                      {course.currentPrice}
                    </span>
                  </div>
                  <Link
                    className={buttonVariants({
                      size: 'lg',
                    })}
                    href={`${course.formLink}`}
                    target='_blank'
                  >
                    Register Now!
                  </Link>
                </div>
                <div className='flex flex-col items-start justify-center gap-5 py-4 sm:flex-row'>
                  <div className='flex flex-col'>
                    <span className='text-2xl font-bold text-primary'>
                      Starting
                    </span>
                    <span> {course.startDate}</span>
                  </div>
                  <div>
                    <div>For more info contact {course.contact}</div>
                    <div>
                      or join{' '}
                      <a
                        href={course.whatsapp}
                        target='_blank'
                        className='inline-flex items-center gap-1 text-primary underline '
                      >
                        Whatsapp Group{' '}
                        <span>
                          <Image
                            src={'/assets/whatsapp.png'}
                            alt='whatsapp'
                            width={25}
                            height={25}
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='content w-full'>
            <h2 className='mb-8 max-w-3xl text-3xl font-bold md:text-4xl lg:text-5xl'>
              What will you <span className='text-primary'>learn</span>?
            </h2>

            <div className='lesson flex w-full flex-col justify-between gap-2 sm:flex-row-reverse'>
              <div className='meta flex flex-wrap gap-2 sm:mb-2 sm:block'>
                {course.courseMeta.map((meta) => {
                  return (
                    <div
                      key={meta.title}
                      className='gap-2 sm:flex sm:flex-wrap'
                    >
                      <div className='gap-2 rounded-sm p-2 sm:p-1'>
                        <h3 className='text-sm text-primary sm:text-lg'>
                          {meta.title}
                        </h3>
                        <h4 className='text-wrap text-xs'>
                          {meta.description}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className='w-full'>
                {course.lessons.map((lesson) => (
                  <Accordion key={lesson.title} type='multiple'>
                    <AccordionItem value={lesson.title}>
                      <AccordionTrigger className='text-left'>
                        {lesson.title}
                      </AccordionTrigger>
                      <AccordionContent>{lesson.description}</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Course not found</p>
      )}
    </MaxWidthWrapper>
  );
}
