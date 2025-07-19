'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import ProgressBar from 'react-scroll-progress-bar';

export function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.pageYOffset > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return scrolled;
}

export default function NavBar() {
  return (
    <>
      <div className="bg-green-400">
        <ProgressBar height="6" bgcolor="#1C1C1C" duration="0.2" />
      </div>
      <div
        className={`fixed top-0 flex w-full justify-center bg-white/40 backdrop-blur-xl z-30 transition-all`}>
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
          <Link
            href="/"
            className="flex items-center font-display text-2xl font-extrabold text-gray-900 hover:text-gray-500">
            Arun D.
          </Link>
        </div>
      </div>
    </>
  );
}
