import Link from 'next/link';
import { useEffect, useState } from 'react';
import logo from '@/assets/images/logo-white.svg';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      // className={`w-full transition-all duration-300 ${
      //   isScrolled 
      //     ? 'fixed top-0 z-50' 
      //     : 'absolute top-8 z-50'
      // }`}
      // style={isScrolled ? {
      //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
      //   backdropFilter: 'blur(10px)',
      //   WebkitBackdropFilter: 'blur(10px)',
      // } : {}}
      className="absolute z-10 md:left-34 md:top-12 2xl:left-24 2xl:top-16"
    >
      {/* <div className={`container mx-auto flex justify-between px-16 ${isScrolled ? 'py-4' : 'py-8'}`}> */}
      <div className="container mx-auto flex justify-between px-16 py-8">
        <figure>
          <Image src={logo} alt="Notrus Logo" width={150} />
        </figure>
        {/* <ul>
          <li>
            <Link className="py-4 px-8" href="#">Página</Link>
            <Link className="py-4 px-8" href="#">Página</Link>
            <Link className="py-4 px-8" href="#">Página</Link>
            <Link className="py-4 px-8" href="#">Página</Link>
            <Link className="py-4 px-8" href="#">Página</Link>
          </li>
        </ul> */}
      </div>
    </header>
  )
}