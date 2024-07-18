import * as React from 'react';
import { slugify } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { CourseInfo } from '@/api/course/course.types';

const CourseCard: React.FC<CourseInfo> = ({
  courseId,
  title,
  header,
  image,
  tags,
  prevPrice,
  currentPrice,
  path,
}) => {
  return (
    <Card className='flex w-[340px] flex-col justify-between overflow-hidden shadow-md transition-all duration-500 lg:h-[300px] lg:w-[400px] lg:hover:scale-105 lg:hover:border-2 lg:hover:border-primary lg:hover:shadow-lg'>
      <CardHeader className='relative'>
        <CardTitle className='font-extrabold'>{title}</CardTitle>
        <CardHeader className='text-sm'>{header}</CardHeader>
        {image && (
          <Image
            className='absolute -right-1/4 -top-1/4 rounded-lg opacity-40'
            src={image}
            alt='Course Image'
            width={175}
            height={175}
          ></Image>
        )}
      </CardHeader>
      {/* Below CardContent might be usefull in future. */}
      {/* <CardContent></CardContent> */}
      <CardFooter className='flex flex-col justify-between gap-1'>
        <div className='flex w-full justify-start gap-2'>
          {tags?.map((tag) => (
            <Badge key={tag} variant='secondary' className='text-xs'>
              {tag}
            </Badge>
          ))}
        </div>
        <div className='flex w-full items-center justify-between'>
          <div className='flex items-center justify-center'>
            <span className='text-gray-500 line-through'>{prevPrice}</span>
            <span className='text-2xl font-bold'>{currentPrice}</span>
          </div>
          <Link
            className={buttonVariants({
              size: 'lg',
              className: 'mt-5',
            })}
            href={`/courses/${slugify(path)}`}
          >
            View course
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
