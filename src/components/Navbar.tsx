import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';
import Image from 'next/image';
import { WideScreenNav, SmallScreenNav } from './ScreenSizeNav';

// TODO: The auth param could be used when we have authentication
export interface Navigation {
  path: string;
  name: string;
  authNeeded: boolean;
}

const navigations: Navigation[] = [
  { path: '/courses', name: 'Courses', authNeeded: true },
  { path: '/about', name: 'About', authNeeded: true },
  { path: '/contact-us', name: 'Contact', authNeeded: true },
];

const Navbar = () => {
  return (
    <nav className='sticky inset-x-0 top-0 z-30 h-20 w-full border-b border-gray-200 bg-white/75 text-xl shadow-md backdrop-blur-lg transition-all'>
      {/* <MaxWidthWrapper> */}
      <div className='mx-10 flex h-20 items-center justify-between '>
        <Link
          href='/'
          className='z-40 flex items-center justify-between gap-2 font-semibold'
        >
          <Image
            src='/android-chrome-192x192.png'
            alt='Saeturnus Logo'
            width={32}
            height={32}
          />
          <span className='text-primary'>Saeternus</span>
        </Link>

        {/* hamburger menu */}
        <SmallScreenNav navigations={navigations} />

        {/* nav option large screen */}
        <div className='hidden items-center space-x-4 sm:flex'>
          <WideScreenNav navigations={navigations} />
        </div>
      </div>
      {/* </MaxWidthWrapper> */}
    </nav>
  );
};

export default Navbar;
