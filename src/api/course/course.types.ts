export interface CourseInfo {
  courseId: string;
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  prevPrice?: number;
  currentPrice: number;
}

export interface Lesson {
  title: string;
  description: string;
}

export interface courseMeta {
  title: string;
  image: string;
  description: string;
}

export interface CourseDetails {
  courseId: string;
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  prevPrice?: number;
  currentPrice: number;
  lessons: Lesson[];
  relatedCourses?: string[];
  startDate: string;
  whatYouWillLearn: string[];
  courseMeta: courseMeta[];
}
