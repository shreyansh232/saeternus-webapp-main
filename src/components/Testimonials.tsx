'use client';

import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

export function Testimonials() {
	return (
		<div className='mb-36 rounded-md flex flex-col antialiased bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
			<InfiniteMovingCards
				items={testimonials}
				direction='right'
				speed='slow'
			/>
		</div>
	);
}

const testimonials = [
	{
		quote:
			"Thanks for the help with my project proposal! Couldn't have done it without you. I'm so happy with the results!",
		name: 'John Sebastian',
		title: 'Student',
	},
	{
		quote: 'I was struggling with Java and APIs! Well not anymore :).',
		name: 'Maria Garcia',
		title: 'OSS contributor',
	},
];
