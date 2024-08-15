'use client';

import LinkCard from '@/components/LinkCard';
import Image from 'next/image';
import Link from 'next/link';
import { FaMediumM } from 'react-icons/fa';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { IoMdDocument } from 'react-icons/io';
import { Typewriter } from 'react-simple-typewriter';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-screen max-w-screen-lg px-6">
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
        <div className="flex flex-row space-x-2 justify-center min-h-[100px] p-2 w-fit  m-auto">
          <Link
            href={'https://www.linkedin.com/in/arundeegutla/'}
            target="_blank"
            className="m-auto h-fit rounded-full bg-slate-200 border-2 hover:bg-gray-700 hover:text-white text-2xl p-2 hover:p-3 transition-all ease-in-out duration-300 hover:cursor-pointer">
            <FaLinkedinIn />
          </Link>
          <Link
            href={'https://github.com/arundeegutla/'}
            target="_blank"
            className="m-auto h-fit rounded-full bg-slate-200 border-2 hover:bg-gray-700 hover:text-white text-2xl p-2 hover:p-3 transition-all ease-in-out duration-300 hover:cursor-pointer">
            <FaGithub />
          </Link>
          <Link
            href={'https://medium.com/@arundeegutla'}
            target="_blank"
            className="m-auto h-fit rounded-full bg-slate-200 border-2 hover:bg-gray-700 hover:text-white text-2xl p-2 hover:p-3 transition-all ease-in-out duration-300 hover:cursor-pointer">
            <FaMediumM />
          </Link>
          <Link
            href={''}
            target="_blank"
            className="m-auto h-fit rounded-full bg-slate-200 border-2 hover:bg-gray-700 hover:text-white text-2xl p-2 hover:p-3 transition-all ease-in-out duration-300 hover:cursor-pointer">
            <IoMdDocument />
          </Link>
        </div>
      </div>

      <div className="flex flex-col w-full h-fit my-10">
        <h1>About me.</h1>
        <hr className="w-full  bg-gray-600"></hr>
        <p>
          I&apos;m Arun Deegutla, a passionate software engineer pursuing a
          Bachelor’s in Computer Science with a Minor in Mathematics at the{' '}
          <strong>University of Central Florida</strong>. With a strong
          foundation in full-stack development, DevOps, and AI, I&apos;ve
          interned at AMD and Kore AI, where I contributed to impactful projects
          that enhanced system reliability and user experience. I&apos;m driven
          by a love for problem-solving, my commitment to innovation and
          collaboration. Let&apos;s build something amazing together!
        </p>
      </div>

      <div className="w-full h-fit">
        <h1>Experience</h1>
        <hr className="w-full bg-gray-600"></hr>
        <VerticalTimeline animate={false} lineColor="#000">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaMediumM />}>
            <h3 className="vertical-timeline-element-title">
              Software Engineer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">San Jose, CA</h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaMediumM />}>
            <h3 className="vertical-timeline-element-title">
              Software Engineer Intern / Co-op
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Orlando, FL</h4>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaMediumM />}>
            <h3 className="vertical-timeline-element-title">
              ICPC Competitive Programmer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Orlando, FL</h4>
            <p></p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </main>
  );
}
