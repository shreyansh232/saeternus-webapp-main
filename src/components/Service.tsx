import React from 'react';
import { EvervaultCard } from './ui/evervault-card';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

export function Services() {
	return (
		<div className='flex justify-center w-full mx-auto'>
			<div className='flex flex-wrap gap-2 w-fit'>
				<div className='border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]'>
					<EvervaultCard text='Build' />

					<div className='h-64 flex flex-col justify-between'>
						<h2 className='dark:text-white text-black mt-4 text-sm font-light'>
							Got an idea? Need help in scaling or starting your project? We can
							help you build your dream project.
						</h2>
						<Link
							className={buttonVariants({
								variant: 'link',
								size: 'lg',
								className: 'mt-5',
							})}
							href='/contact'
						>
							Lets build something
						</Link>
					</div>
				</div>
				<div className='border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]'>
					<EvervaultCard text='Teach' />

					<div className='h-64 flex flex-col justify-between'>
						<h2 className='dark:text-white text-black mt-4 text-sm font-light'>
							Need to learn something new? We offer a wide range of courses from
							students to professionals. We can help you or your team learn new
							skills. Enterprise or individual, we have you covered.
						</h2>
						<Link
							className={buttonVariants({
								variant: 'link',
								size: 'lg',
								className: 'mt-5',
							})}
							href='/contact'
						>
							Lets learn
						</Link>
					</div>
				</div>
				<div className='border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]'>
					<EvervaultCard text='Blogs' />
					<div className='h-64 flex flex-col justify-between'>
						<h2 className='dark:text-white text-black mt-4 text-sm font-light'>
							Our free blogs are a great way to learn new things. We offer
							premium blogs for our subscribers. Learn on the go, at your own
							pace.
						</h2>
						<Link
							className={buttonVariants({
								variant: 'link',
								size: 'lg',
								className: 'mt-5',
							})}
							href='/knowledge'
						>
							Knowlege Haven
						</Link>
					</div>
				</div>
				<div className='border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]'>
					<EvervaultCard text='Newsletter' />

					<div className='h-64 flex flex-col justify-between'>
						<h2 className='dark:text-white text-black mt-4 text-sm font-light'>
							Subscribe to our newsletter to get the latest updates on our
							products and services.
						</h2>
						<Link
							className={buttonVariants({
								variant: 'link',
								size: 'lg',
								className: 'mt-5',
							})}
							href='/contact'
						>
							Newsletter
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
