import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { getCourseByPath } from '@/api/course/course';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(path: string): string {
  const course = getCourseByPath(path);
  if (!course) {
    return '';
  }
  return course.path.toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-');
}
