import * as React from 'react';

import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  // CardContent,
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
  description,
  image,
  tags,
  prevPrice,
  currentPrice,
}) => {
  return (
    <Card className='flex h-[250px] w-[350px] flex-col justify-between overflow-hidden'>
      <CardHeader className='relative'>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {image && (
          <Image
            className='absolute -right-1/4 -top-1/4 rounded-lg opacity-40'
            src={image}
            alt='Picture of the author'
            width={175}
            height={175}
          ></Image>
        )}
      </CardHeader>
      {/* Below CardContent might be usefull in future. */}
      {/* <CardContent></CardContent> */}
      <CardFooter className='flex flex-col justify-between gap-2'>
        <div className='flex w-full justify-start gap-2'>
          {tags?.map((tag) => (
            <Badge key={tag} variant='secondary' className='text-xs'>
              {tag}
            </Badge>
          ))}
        </div>
        <div className='flex w-full items-center justify-between'>
          <div className='flex'>
            <span className='text-gray-500 line-through'>${prevPrice}</span>
            <span className='text-2xl font-bold'>${currentPrice}</span>
          </div>
          <Link
            className={buttonVariants({
              size: 'lg',
              className: 'mt-5',
            })}
            href={`/courses/${courseId}`}
          >
            View course
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
