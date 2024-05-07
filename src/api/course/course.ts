/**
 * TODO: Implement API calls when backend is setup
 */

import { CourseDetails, CourseInfo } from './course.types';

const courses: CourseInfo[] = [
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
    // tags: ['Data Structures', 'Algorithms', 'Programming'],
    tags: ['DSA','Algorithms', 'Programming'],
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

const detailedCourses: CourseDetails[] = [
  {
    courseId: '1',
    title: 'Introduction to React',
    description: `Welcome to the world of React.js, the powerhouse of modern web development! In this comprehensive course, you'll embark on a journey through the fundamentals of React, empowering you to build dynamic and interactive user interfaces with ease. Whether you're a beginner or an experienced developer looking to enhance your skills, this course is your gateway to mastering React and staying ahead in the rapidly evolving web development landscape.`,
    image: '/assets/react.png',
    tags: ['React', 'JavaScript', 'Frontend'],
    prevPrice: 99,
    currentPrice: 79,
    lessons: [
      {
        title: 'Getting Started with React',
        description: 'Understanding the basics of React and its core concepts.',
      },
      {
        title: 'Components and Props',
        description:
          'Exploring the building blocks of React: components and props.',
      },
      {
        title: 'State and Lifecycle',
        description:
          'Learning how to manage component state and lifecycle methods in React.',
      },
      {
        title: 'Handling Events',
        description: 'Mastering event handling in React applications.',
      },
      {
        title: 'Conditional Rendering',
        description: 'Implementing conditional rendering techniques in React.',
      },
      {
        title: 'Lists and Keys',
        description:
          'Working with lists and keys for efficient rendering in React.',
      },
      {
        title: 'Forms',
        description:
          'Creating controlled components and handling form submissions in React.',
      },
      {
        title: 'React Router',
        description:
          'Navigating between different views in a React application using React Router.',
      },
      {
        title: 'Introduction to Hooks',
        description:
          'Understanding React Hooks and how they revolutionize functional components.',
      },
      {
        title: 'Context API',
        description:
          'Using the Context API for managing global state in React applications.',
      },
      {
        title: 'Redux Fundamentals',
        description:
          'Introduction to Redux for state management in React applications.',
      },
    ],
    relatedCourses: ['2', '5'],
    startDate: '2024-05-01',
    whatYouWillLearn: [
      'Mastering React.js fundamentals',
      'Building reusable components',
      'Managing state and props efficiently',
      'Implementing routing and navigation',
      'Exploring advanced React features like Hooks and Context API',
    ],
    courseMeta: [
      {
        title: 'Duration',
        description: '8 weeks',
        image: '/assets/react-duration.png',
      },
      {
        title: 'Level',
        description: 'Intermediate',
        image: '/assets/intermediate-level.png',
      },
      {
        title: 'Certification',
        description: 'Upon successful completion',
        image: '/assets/certification.png',
      },
      {
        title: 'Language',
        description: 'English and Hindi',
        image: '/assets/instructor.png',
      },
      {
        title: 'Instructor',
        description: 'John Doe',
        image: '/assets/instructor.png',
      },
      {
        title: 'Prerequisites',
        description: 'Basic understanding of HTML, CSS, and JavaScript',
        image: '/assets/prerequisites.png',
      },
      {
        title: 'Projects',
        description: 'Hands-on projects to reinforce learning concepts',
        image: '/assets/projects.png',
      },
      {
        title: 'Community',
        description:
          'Access to an exclusive online community for discussions and support',
        image: '/assets/community.png',
      },
    ],
  },
  {
    courseId: '2',
    title: 'Node.js Fundamentals',
    description: 'Master the fundamentals of Node.js for backend development.',
    image: '/assets/node.png',
    tags: ['Node.js', 'JavaScript', 'Backend'],
    prevPrice: 129,
    currentPrice: 99,
    lessons: [
      {
        title: 'Introduction to Node.js',
        description:
          'Understanding the basics of Node.js and its role in backend development.',
      },
      {
        title: 'Node.js Modules',
        description:
          'Exploring modules in Node.js and how to use them to organize code.',
      },
      {
        title: 'File System Operations',
        description:
          'Working with the file system in Node.js to read, write, and manipulate files.',
      },
      {
        title: 'Asynchronous Programming',
        description:
          'Understanding asynchronous programming in Node.js using callbacks, promises, and async/await.',
      },
      {
        title: 'HTTP and Web Servers',
        description:
          'Creating HTTP servers and handling HTTP requests and responses in Node.js.',
      },
      {
        title: 'Express.js Framework',
        description:
          'Introduction to Express.js for building web applications and APIs with Node.js.',
      },
      {
        title: 'Middleware',
        description:
          'Implementing middleware in Express.js to handle common tasks and extend functionality.',
      },
      {
        title: 'Database Integration',
        description:
          'Integrating databases like MongoDB or MySQL with Node.js applications.',
      },
      {
        title: 'Authentication and Authorization',
        description:
          'Implementing authentication and authorization mechanisms in Node.js applications.',
      },
      {
        title: 'Error Handling and Debugging',
        description:
          'Handling errors and debugging Node.js applications effectively.',
      },
      {
        title: 'Deployment and Hosting',
        description:
          'Deploying Node.js applications to production servers and hosting platforms.',
      },
    ],
    startDate: '2024-06-01',
    whatYouWillLearn: [
      'Understanding the basics of Node.js and backend development',
      'Building web servers and APIs with Node.js and Express.js',
      'Working with databases in Node.js applications',
      'Implementing authentication and authorization',
      'Deploying Node.js applications to production environments',
    ],
    courseMeta: [
      {
        title: 'Duration',
        description: '10 weeks',
        image: '/assets/node-duration.png',
      },
      {
        title: 'Level',
        description: 'Intermediate',
        image: '/assets/intermediate-level.png',
      },
      {
        title: 'Certification',
        description: 'Upon successful completion',
        image: '/assets/certification.png',
      },
      {
        title: 'Language',
        description: 'English',
        image: '/assets/instructor.png',
      },
      {
        title: 'Instructor',
        description: 'Jane Smith',
        image: '/assets/instructor.png',
      },
      {
        title: 'Prerequisites',
        description:
          'Basic understanding of JavaScript and web development concepts',
        image: '/assets/prerequisites.png',
      },
      {
        title: 'Projects',
        description:
          'Building real-world projects to reinforce learning concepts',
        image: '/assets/projects.png',
      },
      {
        title: 'Community',
        description:
          'Access to a dedicated online community for discussions and support',
        image: '/assets/community.png',
      },
    ],
  },
];

export function getAllCourses() {
  return courses;
}

export function getCourseInfoById(id: string) {
  return courses.find((course) => course.courseId === id);
}

export function getCourseDetailById(id: string): CourseDetails | undefined {
  const course = detailedCourses.find((course) => course.courseId === id);
  return course;
}
