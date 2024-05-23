import { Metadata } from 'next';
import { getCourseByTitle } from '@/api/course/course';
import { CourseDetails } from '@/api/course/course.types';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { slugify } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({
  params,
}: {
  params: { title: string };
}): Promise<Metadata> {
  const course = await getCourseByTitle(params.title);

  if (!course) {
    return {
      title: 'Course not found',
      description: 'The course you are looking for does not exist.',
    };
  }

  return {
    title: `${course.title}`,
    description: course.description,
    openGraph: {
      title: `${course.title} - Saeternus`,
      description: course.description,
      url: `${baseURL}/courses/${slugify(course.title)}`,
      images: [
        {
          url: course.image || `${baseURL}/android-chrome-192x192.png`,
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: { title: string } }) {
  const course: CourseDetails | undefined = await getCourseByTitle(
    params.title
  );

  return (
    <MaxWidthWrapper className='mt-12 flex flex-col items-center justify-center'>
      {course ? (
        <>
          <div className='header relative mb-12 h-full w-full'>
            <h1 className='mb-8 max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
              {course.title}
            </h1>
            <p>{course.description}</p>
            {course.image && (
              <Image
                className='absolute right-0 top-0 -z-10 rounded-lg opacity-40'
                src={course.image}
                alt={course.title}
                width={350}
                height={350}
              />
            )}
            <div className='price mt-2 flex flex-col items-start gap-2'>
              <div className='tag'>
                {course.tags?.map((tag) => (
                  <Badge key={tag} variant='secondary' className='text-xs'>
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className='flex w-full justify-between'>
                <div className='flex items-center justify-start gap-2'>
                  <div className='flex h-full items-center justify-center'>
                    <span className='align-top text-gray-500 line-through'>
                      ${course.prevPrice}
                    </span>
                    <span className='text-2xl font-bold text-primary'>
                      ${course.currentPrice}
                    </span>
                  </div>
                  <Link
                    className={buttonVariants({
                      size: 'lg',
                    })}
                    href='/'
                  >
                    Register Now!
                  </Link>
                </div>
                <div className='flex flex-col items-center justify-center py-4'>
                  <span className='text-2xl font-bold text-primary'>
                    Starting
                  </span>
                  <span> {course.startDate}</span>
                </div>
              </div>
            </div>
          </div>
          <div className='content w-full'>
            <h2 className='mb-8 max-w-3xl text-4xl font-bold md:text-5xl lg:text-6xl'>
              What will you <span className='text-primary'>learn</span>?
            </h2>
            <div className='lesson w-full justify-between gap-2 sm:flex sm:flex-row-reverse'>
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
                      <AccordionTrigger>{lesson.title}</AccordionTrigger>
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
