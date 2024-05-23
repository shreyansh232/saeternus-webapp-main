import localFont from 'next/font/local';

const satoshi = localFont({
  src: [
    {
      path: '../assets/fonts/Satoshi/Satoshi-Regular.ttf',
    },
  ],
  variable: '--font-satoshi',
});
export { satoshi };
