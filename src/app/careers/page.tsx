'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { getJobByTitle } from '../../api/jobs/jobs';

type Job = {
  title: string;
  location: string;
  description: string;
};

const careersData: Job[] = [
  getJobByTitle('Software Engineer') || {
    title: '',
    location: '',
    description: '',
  },
  getJobByTitle('Product Designer') || {
    title: '',
    location: '',
    description: '',
  },
];

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  return (
    <div className='min-h-screen bg-gray-50 p-8'>
      <header className='py-12 text-center'>
        <h1 className='mb-4 text-4xl font-bold'>Join Our Team at Saeternus</h1>
        <p className='text-lg text-gray-600'>
          Help us unlock students potential around the world.
        </p>
      </header>

      <section className='my-12'>
        <h2 className='mb-6 text-2xl font-semibold'>Current Job Openings</h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {careersData.map((job, index) => (
            <Card key={index} className='shadow-lg'>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{job.location}</p>
                <p className='mt-2 text-gray-600'>{job.description}</p>
                <Button className='mt-4' onClick={() => setSelectedJob(index)}>
                  Apply
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
