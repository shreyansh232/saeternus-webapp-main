import { getAllCourses } from '@/api/course/course';
import type { MetadataRoute } from 'next';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allCourses = await getAllCourses();
  const courses = allCourses.map((course) => {
    return {
      url: `${baseURL}/courses/${course.title}`,
      lastModified: new Date(),
      priority: 0.9,
    };
  });

  return [
    {
      url: 'https://www.saeternus.com',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://www.saeternus.com/courses/',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.saeternus.com/contact/',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.saeternus.com/about/',
      lastModified: new Date(),
      priority: 0.8,
    },
    ...courses,
  ];
}
