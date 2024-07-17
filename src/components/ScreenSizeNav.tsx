'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Navigation } from './Navbar';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

interface NavProps {
  navigations: Navigation[];
}

const SmallScreenNav: React.FC<NavProps> = ({ navigations }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const toggleOpen = () => setOpen((prev) => !prev);
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
    if (isOpen) toggleOpen();
    // eslint-disable-next-line
  }, [pathname]);

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      toggleOpen();
    }
  };

  return (
    <div className='sm:hidden'>
      <Menu onClick={toggleOpen} className='relative z-50 h-5 w-5' />

      {isOpen ? (
        <div className='fixed inset-0 z-0 w-full animate-in fade-in-20 slide-in-from-top-5'>
          <ul className='absolute grid w-full gap-3 border-b border-zinc-200 bg-white px-5 pb-8 pt-20 shadow-xl'>
            {navigations.map((nav) => (
              <li key={nav.path}>
                <Link
                  onClick={() => closeOnCurrent(nav.path)}
                  className={cn(
                    'flex w-full items-center font-semibold hover:text-primary',
                    {
                      'text-primary': pathname === nav.path,
                    }
                  )}
                  href={nav.path}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

const WideScreenNav: React.FC<NavProps> = ({ navigations }) => {
  const pathname = usePathname();

  return (
    <>
      {navigations.map((nav) => (
        <Link
          key={nav.path}
          href={nav.path}
          className={cn(
            buttonVariants({
              variant: 'ghost',
              size: 'sm',
              className: 'text-base',
            }),
            'hover:text-primary',
            {
              'text-primary': pathname === nav.path,
            },
            {
              'text-black': pathname !== nav.path,
            }
          )}
        >
          {nav.name}
        </Link>
      ))}
    </>
  );
};

export { SmallScreenNav, WideScreenNav };
