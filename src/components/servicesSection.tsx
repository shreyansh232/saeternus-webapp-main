'use client';

import React from 'react';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import {
  NotebookText,
  Plane,
  Briefcase,
  Star,
  Globe,
  UserRoundPen,
} from 'lucide-react';

const services = [
  {
    icon: <UserRoundPen className='h-10 w-10' />,
    title: 'Profile Evaluation',
    description:
      'Track your expenses effortlessly with our intuitive budget tracking tools. Do cillum culpa labore laboris incididunt velit ipsum.',
  },
  {
    icon: <NotebookText className='h-10 w-10' />,
    title: 'College Shortlisting',
    description:
      "Customizing your essay to align with the admission committee's mindset for each college. Do cillum culpa labore laboris incididunt velit ipsum.",
  },
  {
    icon: <Star className='h-10 w-10' />,
    title: 'MS/PhD interviews',
    description:
      'Track your expenses effortlessly with our intuitive budget tracking tools. Do cillum culpa labore laboris incididunt velit ipsum.',
  },
  {
    icon: <Plane className='h-10 w-10' />,
    title: 'Visa Interviews',
    description:
      'Track your expenses effortlessly with our intuitive budget tracking tools. Do cillum culpa labore laboris incididunt velit ipsum.',
  },
  {
    icon: <Globe className='h-10 w-10' />,
    title: 'End-to-End Guidance',
    description:
      'For pathway into Industry and Academia. Do cillum culpa labore laboris incididunt velit ipsum.',
  },
  {
    icon: <Globe className='h-10 w-10' />,
    title: 'Tailored SOP/Essay',
    description:
      "In this service, we camouflage your weak areas and accentuate your strengths, customizing your essay to align with the admission committee's mindset for each college.",
  },
];

export default function ServicesSection() {
  return (
    <div className='mt-20 h-screen'>
      <div className='mx-auto max-w-5xl px-8'>
        <HoverEffect items={services} />
      </div>
    </div>
  );
}
