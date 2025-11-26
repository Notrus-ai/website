import localFont from 'next/font/local';

const aspekta = localFont({
  src: [
    {
      path: './Aspekta-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Aspekta-600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Aspekta-700.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  display: 'swap',
});

export default aspekta;
