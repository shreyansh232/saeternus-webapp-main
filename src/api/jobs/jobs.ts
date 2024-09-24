const careersData = [
  {
    title: 'Software Engineer',
    location: 'Remote',
    description:
      'We are looking for a skilled Software Engineer to join our team.',
    benefits: [
      'Competitive salary',
      'Health benefits',
      'Flexible working hours',
      'Professional development opportunities',
    ],
  },
  {
    title: 'Product Designer',
    location: 'Remote',
    description:
      'Join us as a Product Designer and help shape the future of our platform.',
    benefits: [
      'Work on cutting-edge projects',
      'Collaborate with a creative team',
      'Health insurance',
      'Remote-first culture',
    ],
  },
];

export function getJobByTitle(title: string) {
  return careersData.find((job) => job.title === title);
}
