'use client';

import LinkCard from '@/components/LinkCard';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col text-center justify-center m-auto text-4xl font-medium">
        <h1>
          <a className="waving-hand">👋</a>{' '}
          <a className="font-thin">I&apos;m</a> Arun Deegutla
        </h1>
        <div className="flex text-2xl font-light mt-2 m-auto">
          <Typewriter
            words={[
              'Software Engineer',
              'Web Developer',
              'Tech Enthusiast',
              'Student',
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </div>
      </div>

      <LinkCard link="fdf" desc="fads" title="fasdfasdf" />
    </main>
  );
}
